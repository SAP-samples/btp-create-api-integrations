/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevelopersApi } from './DevelopersApi';
import { EndPointPropertiesApi } from './EndPointPropertiesApi';
import { ApiProviderAdditionalPropertysApi } from './ApiProviderAdditionalPropertysApi';
import { KeyMapEntriesApi } from './KeyMapEntriesApi';
import { FileResourcesApi } from './FileResourcesApi';
import { ApplicationAdditionalPropertysApi } from './ApplicationAdditionalPropertysApi';
import { FlowRulesApi } from './FlowRulesApi';
import { DocumentationsApi } from './DocumentationsApi';
import { ResourcesApi } from './ResourcesApi';
import { GenericKeyMapEntryValuesApi } from './GenericKeyMapEntryValuesApi';
import { RouteRulesApi } from './RouteRulesApi';
import { TemplatePolicysApi } from './TemplatePolicysApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { ApiProvidersApi } from './ApiProvidersApi';
import { ApiProxiesApi } from './ApiProxiesApi';
import { StepsApi } from './StepsApi';
import { PoliciesApi } from './PoliciesApi';
import { RatePlansApi } from './RatePlansApi';
import { ApiportalCloneMappingsApi } from './ApiportalCloneMappingsApi';
import { ApplicationsApi } from './ApplicationsApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
import { VirtualHostsApi } from './VirtualHostsApi';
import { AclProductLinkagesApi } from './AclProductLinkagesApi';
import { TemplateFileResourcesApi } from './TemplateFileResourcesApi';
import { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { CacheResourcesApi } from './CacheResourcesApi';
import { CertificatesApi } from './CertificatesApi';
import { GenericKeyMapEntriesApi } from './GenericKeyMapEntriesApi';
import { ApiProductAdditionalPropertiesApi } from './ApiProductAdditionalPropertiesApi';
import { ContentPackageMappersApi } from './ContentPackageMappersApi';
import { ApiProductsApi } from './ApiProductsApi';
import { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
import { FaultRulesApi } from './FaultRulesApi';
import { KeyMapEntryValuesApi } from './KeyMapEntryValuesApi';
import { BillsApi } from './BillsApi';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ConditionalFlowRulesApi } from './ConditionalFlowRulesApi';
import { CertificateStoresApi } from './CertificateStoresApi';
import { DestinationAndUrlMappingsApi } from './DestinationAndUrlMappingsApi';
import { StreamsApi } from './StreamsApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function apiportalService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): ApiportalService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new ApiportalService(mergeDefaultDeSerializersWith(deSerializers));
}
class ApiportalService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get developersApi(): DevelopersApi<DeSerializersT> {
    const api = this.initApi('developersApi', DevelopersApi);
    const linkedApis = [this.initApi('applicationsApi', ApplicationsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get endPointPropertiesApi(): EndPointPropertiesApi<DeSerializersT> {
    const api = this.initApi('endPointPropertiesApi', EndPointPropertiesApi);
    const linkedApis = [
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProviderAdditionalPropertysApi(): ApiProviderAdditionalPropertysApi<DeSerializersT> {
    return this.initApi(
      'apiProviderAdditionalPropertysApi',
      ApiProviderAdditionalPropertysApi
    );
  }

  get keyMapEntriesApi(): KeyMapEntriesApi<DeSerializersT> {
    const api = this.initApi('keyMapEntriesApi', KeyMapEntriesApi);
    const linkedApis = [
      this.initApi('keyMapEntryValuesApi', KeyMapEntryValuesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get fileResourcesApi(): FileResourcesApi<DeSerializersT> {
    const api = this.initApi('fileResourcesApi', FileResourcesApi);
    const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get applicationAdditionalPropertysApi(): ApplicationAdditionalPropertysApi<DeSerializersT> {
    return this.initApi(
      'applicationAdditionalPropertysApi',
      ApplicationAdditionalPropertysApi
    );
  }

  get flowRulesApi(): FlowRulesApi<DeSerializersT> {
    const api = this.initApi('flowRulesApi', FlowRulesApi);
    const linkedApis = [
      this.initApi('streamsApi', StreamsApi),
      this.initApi('streamsApi', StreamsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get documentationsApi(): DocumentationsApi<DeSerializersT> {
    const api = this.initApi('documentationsApi', DocumentationsApi);
    const linkedApis = [this.initApi('apiResourcesApi', ApiResourcesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get resourcesApi(): ResourcesApi<DeSerializersT> {
    return this.initApi('resourcesApi', ResourcesApi);
  }

  get genericKeyMapEntryValuesApi(): GenericKeyMapEntryValuesApi<DeSerializersT> {
    const api = this.initApi(
      'genericKeyMapEntryValuesApi',
      GenericKeyMapEntryValuesApi
    );
    const linkedApis = [
      this.initApi('genericKeyMapEntriesApi', GenericKeyMapEntriesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get routeRulesApi(): RouteRulesApi<DeSerializersT> {
    const api = this.initApi('routeRulesApi', RouteRulesApi);
    const linkedApis = [
      this.initApi('faultRulesApi', FaultRulesApi),
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get templatePolicysApi(): TemplatePolicysApi<DeSerializersT> {
    const api = this.initApi('templatePolicysApi', TemplatePolicysApi);
    const linkedApis = [
      this.initApi('policyTemplateContainersApi', PolicyTemplateContainersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProxyEndPointsApi(): ApiProxyEndPointsApi<DeSerializersT> {
    const api = this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi);
    const linkedApis = [
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('apiResourcesApi', ApiResourcesApi),
      this.initApi('conditionalFlowRulesApi', ConditionalFlowRulesApi),
      this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi),
      this.initApi('faultRulesApi', FaultRulesApi),
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('endPointPropertiesApi', EndPointPropertiesApi),
      this.initApi('routeRulesApi', RouteRulesApi),
      this.initApi('virtualHostsApi', VirtualHostsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProvidersApi(): ApiProvidersApi<DeSerializersT> {
    const api = this.initApi('apiProvidersApi', ApiProvidersApi);
    const linkedApis = [
      this.initApi(
        'apiProviderAdditionalPropertysApi',
        ApiProviderAdditionalPropertysApi
      ),
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('keyMapEntriesApi', KeyMapEntriesApi),
      this.initApi('resourcesApi', ResourcesApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProxiesApi(): ApiProxiesApi<DeSerializersT> {
    const api = this.initApi('apiProxiesApi', ApiProxiesApi);
    const linkedApis = [
      this.initApi('apiProductsApi', ApiProductsApi),
      this.initApi('apiProvidersApi', ApiProvidersApi),
      this.initApi('contentPackageMappersApi', ContentPackageMappersApi),
      this.initApi('fileResourcesApi', FileResourcesApi),
      this.initApi('policiesApi', PoliciesApi),
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('resourcesApi', ResourcesApi),
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get stepsApi(): StepsApi<DeSerializersT> {
    const api = this.initApi('stepsApi', StepsApi);
    const linkedApis = [
      this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi),
      this.initApi('faultRulesApi', FaultRulesApi),
      this.initApi('streamsApi', StreamsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get policiesApi(): PoliciesApi<DeSerializersT> {
    const api = this.initApi('policiesApi', PoliciesApi);
    const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get ratePlansApi(): RatePlansApi<DeSerializersT> {
    const api = this.initApi('ratePlansApi', RatePlansApi);
    const linkedApis = [
      this.initApi('apiProductsApi', ApiProductsApi),
      this.initApi('resourcesApi', ResourcesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiportalCloneMappingsApi(): ApiportalCloneMappingsApi<DeSerializersT> {
    return this.initApi('apiportalCloneMappingsApi', ApiportalCloneMappingsApi);
  }

  get applicationsApi(): ApplicationsApi<DeSerializersT> {
    const api = this.initApi('applicationsApi', ApplicationsApi);
    const linkedApis = [
      this.initApi('apiProductsApi', ApiProductsApi),
      this.initApi(
        'applicationAdditionalPropertysApi',
        ApplicationAdditionalPropertysApi
      ),
      this.initApi('developersApi', DevelopersApi),
      this.initApi('resourcesApi', ResourcesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiTargetEndPointsApi(): ApiTargetEndPointsApi<DeSerializersT> {
    const api = this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi);
    const linkedApis = [
      this.initApi('apiProvidersApi', ApiProvidersApi),
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('conditionalFlowRulesApi', ConditionalFlowRulesApi),
      this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi),
      this.initApi('faultRulesApi', FaultRulesApi),
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('endPointPropertiesApi', EndPointPropertiesApi),
      this.initApi('apiProxiesApi', ApiProxiesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get virtualHostsApi(): VirtualHostsApi<DeSerializersT> {
    return this.initApi('virtualHostsApi', VirtualHostsApi);
  }

  get aclProductLinkagesApi(): AclProductLinkagesApi<DeSerializersT> {
    return this.initApi('aclProductLinkagesApi', AclProductLinkagesApi);
  }

  get templateFileResourcesApi(): TemplateFileResourcesApi<DeSerializersT> {
    const api = this.initApi(
      'templateFileResourcesApi',
      TemplateFileResourcesApi
    );
    const linkedApis = [
      this.initApi('policyTemplateContainersApi', PolicyTemplateContainersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get defaultFaultRulesApi(): DefaultFaultRulesApi<DeSerializersT> {
    const api = this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi);
    const linkedApis = [
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('stepsApi', StepsApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get cacheResourcesApi(): CacheResourcesApi<DeSerializersT> {
    return this.initApi('cacheResourcesApi', CacheResourcesApi);
  }

  get certificatesApi(): CertificatesApi<DeSerializersT> {
    const api = this.initApi('certificatesApi', CertificatesApi);
    const linkedApis = [
      this.initApi('certificateStoresApi', CertificateStoresApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get genericKeyMapEntriesApi(): GenericKeyMapEntriesApi<DeSerializersT> {
    const api = this.initApi(
      'genericKeyMapEntriesApi',
      GenericKeyMapEntriesApi
    );
    const linkedApis = [
      this.initApi('genericKeyMapEntryValuesApi', GenericKeyMapEntryValuesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProductAdditionalPropertiesApi(): ApiProductAdditionalPropertiesApi<DeSerializersT> {
    return this.initApi(
      'apiProductAdditionalPropertiesApi',
      ApiProductAdditionalPropertiesApi
    );
  }

  get contentPackageMappersApi(): ContentPackageMappersApi<DeSerializersT> {
    const api = this.initApi(
      'contentPackageMappersApi',
      ContentPackageMappersApi
    );
    const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get apiProductsApi(): ApiProductsApi<DeSerializersT> {
    const api = this.initApi('apiProductsApi', ApiProductsApi);
    const linkedApis = [
      this.initApi(
        'apiProductAdditionalPropertiesApi',
        ApiProductAdditionalPropertiesApi
      ),
      this.initApi('apiProxiesApi', ApiProxiesApi),
      this.initApi('apiResourcesApi', ApiResourcesApi),
      this.initApi('applicationsApi', ApplicationsApi),
      this.initApi('ratePlansApi', RatePlansApi),
      this.initApi('resourcesApi', ResourcesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get policyTemplateContainersApi(): PolicyTemplateContainersApi<DeSerializersT> {
    const api = this.initApi(
      'policyTemplateContainersApi',
      PolicyTemplateContainersApi
    );
    const linkedApis = [
      this.initApi('templateFileResourcesApi', TemplateFileResourcesApi),
      this.initApi('templatePolicysApi', TemplatePolicysApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get faultRulesApi(): FaultRulesApi<DeSerializersT> {
    const api = this.initApi('faultRulesApi', FaultRulesApi);
    const linkedApis = [
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('routeRulesApi', RouteRulesApi),
      this.initApi('stepsApi', StepsApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get keyMapEntryValuesApi(): KeyMapEntryValuesApi<DeSerializersT> {
    const api = this.initApi('keyMapEntryValuesApi', KeyMapEntryValuesApi);
    const linkedApis = [this.initApi('keyMapEntriesApi', KeyMapEntriesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get billsApi(): BillsApi<DeSerializersT> {
    return this.initApi('billsApi', BillsApi);
  }

  get apiResourcesApi(): ApiResourcesApi<DeSerializersT> {
    const api = this.initApi('apiResourcesApi', ApiResourcesApi);
    const linkedApis = [
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('documentationsApi', DocumentationsApi),
      this.initApi('resourcesApi', ResourcesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get conditionalFlowRulesApi(): ConditionalFlowRulesApi<DeSerializersT> {
    const api = this.initApi(
      'conditionalFlowRulesApi',
      ConditionalFlowRulesApi
    );
    const linkedApis = [
      this.initApi('apiResourcesApi', ApiResourcesApi),
      this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi),
      this.initApi('streamsApi', StreamsApi),
      this.initApi('streamsApi', StreamsApi),
      this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get certificateStoresApi(): CertificateStoresApi<DeSerializersT> {
    const api = this.initApi('certificateStoresApi', CertificateStoresApi);
    const linkedApis = [this.initApi('certificatesApi', CertificatesApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get destinationAndUrlMappingsApi(): DestinationAndUrlMappingsApi<DeSerializersT> {
    return this.initApi(
      'destinationAndUrlMappingsApi',
      DestinationAndUrlMappingsApi
    );
  }

  get streamsApi(): StreamsApi<DeSerializersT> {
    const api = this.initApi('streamsApi', StreamsApi);
    const linkedApis = [
      this.initApi('flowRulesApi', FlowRulesApi),
      this.initApi('stepsApi', StepsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
