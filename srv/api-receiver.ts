import { ApplicationService } from "@sap/cds";
import { Service, Request } from "@sap/cds/apis/services";
import * as YAML from "js-yaml";
import { ApiEvent, NewApiData, NewApiYaml } from "./entities";
import {
  apiportalService,
  ApiProxies,
  batch,
  changeset,
} from "./generated/apiportal-service";
import * as fs from "fs";
import { HttpResponse } from "@sap-cloud-sdk/http-client";

const {
  apiProxiesApi,
  apiProxyEndPointsApi,
  apiResourcesApi,
  documentationsApi,
  apiProductsApi,
} = apiportalService();

const DESTINATION_NAME: string = "api-portal";

class ApiReceiver extends ApplicationService {
  async init(): Promise<void> {
    this.on("CREATE", "NewApi", async (req: Request): Promise<void> => {
      const eventData = <ApiEvent>req.data;
      const apiMetadata: NewApiData = await this.getApiMetadata(eventData);
      const proxyExists: NewApiData = await this.getApiDataByKey(
        `${apiMetadata.name}`
      );
      if (proxyExists.name === apiMetadata.name) {
        proxyExists.content = apiMetadata.content;
        const updateProxy: String = await this.updateProxy(proxyExists);
        console.log(`Result of update proxy: ${updateProxy}`);
        return;
      } else {
        const fedProxy: ApiProxies = await this.createProxy(apiMetadata);
        const batchResult: String = await this.updateProduct(fedProxy.name);
        console.log(`Result of proxy creation: ${batchResult}`);
        return;
      }
    });
    await super.init();
  }

  private getApiMetadata = async (eventData: ApiEvent): Promise<NewApiData> => {
    //@ts-ignore
    const azureapi: Service = await cds.connect.to("azureapi");
    const { subject } = eventData;
    const apiYaml = <unknown>(
      await azureapi.get(
        `/apis/${encodeURIComponent(subject)}/open-api-definition`
      )
    );
    const apiYamlString: string = <string>apiYaml;
    const jsonObject = YAML.load(apiYamlString);
    const encodedRes = Buffer.from(JSON.stringify(jsonObject)).toString(
      "base64"
    );
    const newApiYaml: NewApiYaml = <NewApiYaml>jsonObject;
    const newApiData: NewApiData = {
      name: newApiYaml.info.title
        .concat("-", newApiYaml.info.version)
        .replace(new RegExp(/\W/, "g"), "-"),
      version: newApiYaml.info.version,
      description: newApiYaml.info.description,
      publishUrl: newApiYaml.servers[0].url,
      content: encodedRes,
    };
    newApiData.version && newApiData.version.length > 0
      ? newApiData.name
      : (newApiData.name = newApiData.name.slice(0, -1));
    return newApiData;
  };

  private getApiDataByKey = async (proxyName: String): Promise<NewApiData> => {
    const schema = apiProxiesApi.schema;
    const query = apiProxiesApi
      .requestBuilder()
      .getByKey(`${proxyName}`)
      .select(
        schema.NAME,
        schema.PROXY_END_POINTS.select(
          apiProxyEndPointsApi.schema.API_RESOURCES.select(
            apiResourcesApi.schema.DOCUMENTATIONS.select(
              documentationsApi.schema.CONTENT,
              documentationsApi.schema.ID
            )
          )
        )
      );
    let apiData;
    try {
      const proxy: ApiProxies = await query.execute({
        destinationName: DESTINATION_NAME,
      });
      apiData = {
        name: proxy.name,
        content:
          proxy.proxyEndPoints[0].apiResources[0].documentations[0].content,
        id: proxy.proxyEndPoints[0].apiResources[0].documentations[0].id,
      } as unknown;
      return <NewApiData>apiData;
    } catch (err) {
      apiData = {
        name: "",
        content: "",
      } as unknown;
      return <NewApiData>apiData;
    }
  };
  private createProxy = async (apiData: NewApiData): Promise<ApiProxies> => {
    const newApiProxy = JSON.parse(
      fs.readFileSync("srv/sample/apiproxy.json", { encoding: "utf8" })
    );
    let endPoints = newApiProxy.proxyEndPoints[0];
    endPoints.publishUrl = apiData.publishUrl;
    endPoints.apiResources[0].documentations[0].content = apiData.content;
    const newApiProxyUpdated = {
      ...newApiProxy,
      name: apiData.name,
      title: apiData.name,
      version: apiData.version,
      description: apiData.description,
      proxyEndPoints: [endPoints],
    };
    const newEntity = apiProxiesApi
      .entityBuilder()
      .fromJson(newApiProxyUpdated);
    const query = apiProxiesApi.requestBuilder().create(newEntity);
    const proxy: ApiProxies = await query.execute({
      destinationName: DESTINATION_NAME,
    });
    return proxy;
  };
  private updateProduct = async (proxyName: String): Promise<String> => {
    const apiProductQuery = apiProductsApi
      .requestBuilder()
      .getByKey("Federated_API")
      .select(
        apiProductsApi.schema.NAME,
        apiProductsApi.schema.TITLE,
        apiProductsApi.schema.SCOPE,
        apiProductsApi.schema.DESCRIPTION,
        apiProductsApi.schema.VERSION,
        apiProductsApi.schema.STATUS_CODE,
        apiProductsApi.schema.IS_RESTRICTED,
        apiProductsApi.schema.IS_PUBLISHED,
        apiProductsApi.schema.QUOTA_COUNT,
        apiProductsApi.schema.QUOTA_INTERVAL,
        apiProductsApi.schema.QUOTA_TIME_UNIT
      );
    const remoteProduct = await apiProductQuery.execute({
      destinationName: DESTINATION_NAME,
    });
    const putProduct = apiProductsApi
      .requestBuilder()
      .update(remoteProduct)
      .replaceWholeEntityWithPut();
    const productLink = apiProxiesApi
      .entityBuilder()
      .withCustomFields({ uri: `APIProxies('${proxyName}')` })
      .build();
    const proxyLink = apiProductsApi
      .entityBuilder()
      .withCustomFields({ uri: `APIProducts('Federated_API')` })
      .build();
    const createProxyLink = apiProxiesApi
      .requestBuilder()
      .create(proxyLink as any)
      .appendPath(`(name='${proxyName}')`, "/$links", "/apiProducts");
    const createProductLink = apiProductsApi
      .requestBuilder()
      .create(productLink as any)
      .appendPath(`(name='Federated_API')`, "/$links", "/apiProxies");
    let res: String;
    try {
      const postBatch: HttpResponse = await batch(
        changeset(putProduct, createProxyLink as any, createProductLink as any)
      ).executeRaw({
        destinationName: DESTINATION_NAME,
      });
      res = this.parseBatchStatus(postBatch.status);
    } catch (err) {
      res = "Batch request builder failed - Check prerequisite setup";
    }
    return res;
  };
  private updateProxy = async (apiProxy: NewApiData): Promise<String> => {
    const proxyQuery = apiProxiesApi
      .requestBuilder()
      .getByKey(`${apiProxy.name}`)
      .select(
        apiProxiesApi.schema.NAME,
        apiProxiesApi.schema.TITLE,
        apiProxiesApi.schema.DESCRIPTION,
        apiProxiesApi.schema.VERSION,
        apiProxiesApi.schema.STATUS_CODE,
        apiProxiesApi.schema.SERVICE_CODE,
        apiProxiesApi.schema.IS_PUBLISHED,
        apiProxiesApi.schema.RELEASE_STATUS,
        apiProxiesApi.schema.SUCCESSOR_API,
        apiProxiesApi.schema.IS_UNMANAGED,
        apiProxiesApi.schema.RELEASE_METADATA,
        apiProxiesApi.schema.PROVIDER_NAME,
        apiProxiesApi.schema.STATE
      );
    const proxyToUpdate = await proxyQuery.execute({
      destinationName: DESTINATION_NAME,
    });
    const putProxy = apiProxiesApi
      .requestBuilder()
      .update(proxyToUpdate)
      .replaceWholeEntityWithPut();
    const apiDocumentationQuery = documentationsApi
      .requestBuilder()
      .getByKey(`${apiProxy.id}`, "en")
      .select(
        documentationsApi.schema.LOCALE,
        documentationsApi.schema.MIME_TYPE,
        documentationsApi.schema.API_RESOURCE_NAME,
        documentationsApi.schema.CONTENT,
        documentationsApi.schema.ID
      );
    const docsToUpdate = await apiDocumentationQuery.execute({
      destinationName: DESTINATION_NAME,
    });
    docsToUpdate.content = apiProxy.content;
    const putDocs = documentationsApi
      .requestBuilder()
      .update(docsToUpdate)
      .replaceWholeEntityWithPut();
    let res: String;
    try {
      const putBatch: HttpResponse = await batch(
        changeset(putProxy, putDocs)
      ).executeRaw({
        destinationName: DESTINATION_NAME,
      });
      res = this.parseBatchStatus(putBatch.status);
    } catch (err) {
      res = "Batch request builder failed - Check prerequisite setup";
    }
    return res;
  };
  private parseBatchStatus = (status: number): String => {
    return status < 300
      ? `batch request was successful with status code ${status.toString()}`
      : `batch request failed with status code ${status.toString()}`;
  };
}
module.exports = { ApiReceiver };
