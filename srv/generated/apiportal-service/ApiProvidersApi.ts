/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiProviders } from './ApiProviders';
import { ApiProvidersRequestBuilder } from './ApiProvidersRequestBuilder';
import { ApiProviderAdditionalPropertysApi } from './ApiProviderAdditionalPropertysApi';
import { ApiProxiesApi } from './ApiProxiesApi';
import { KeyMapEntriesApi } from './KeyMapEntriesApi';
import { ResourcesApi } from './ResourcesApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
import { History, HistoryField } from './History';
import { SslInfo, SslInfoField } from './SslInfo';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ApiProvidersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProviders<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link additionalProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_PROPERTIES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiProviderAdditionalPropertysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXIES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link envKvMs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENV_KV_MS: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      KeyMapEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINTS: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProviderAdditionalPropertysApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      KeyMapEntriesApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ADDITIONAL_PROPERTIES: new Link(
        'additionalProperties',
        this,
        linkedApis[0]
      ),
      API_PROXIES: new Link('apiProxies', this, linkedApis[1]),
      ENV_KV_MS: new Link('envKVMs', this, linkedApis[2]),
      RESOURCES: new Link('resources', this, linkedApis[3]),
      TARGET_END_POINTS: new Link('targetEndPoints', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = ApiProviders;

  requestBuilder(): ApiProvidersRequestBuilder<DeSerializersT> {
    return new ApiProvidersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiProviders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiProviders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApiProviders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApiProviders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApiProviders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEST_TYPE: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ON_PREMISE: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGION: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RT_AUTH: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SSL_INFO: SslInfoField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HOST: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PORT: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    USE_SSL: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TRUST_ALL: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    USER_NAME: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLIENT_SECRET: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLIENT_ID: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOKEN_URL: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTH_TYPE: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PATH_PREFIX: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TIMEOUT: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COCKPIT_URL: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOUD_CONNECTOR_LOCATION: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORG_SECRET: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_SECRET: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYSTORE_PASSWORD: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    KEYSTORE_LOCATION: OrderableEdmTypeField<
      ApiProviders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_PROPERTIES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiProviderAdditionalPropertysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXIES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link envKvMs} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENV_KV_MS: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      KeyMapEntriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINTS: Link<
      ApiProviders<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApiProviders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link destType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEST_TYPE: fieldBuilder.buildEdmTypeField(
          'destType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isOnPremise} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ON_PREMISE: fieldBuilder.buildEdmTypeField(
          'isOnPremise',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lifeCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_CYCLE: fieldBuilder.buildComplexTypeField(
          'life_cycle',
          HistoryField,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link region} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION: fieldBuilder.buildEdmTypeField('region', 'Edm.String', true),
        /**
         * Static representation of the {@link rtAuth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RT_AUTH: fieldBuilder.buildEdmTypeField('rt_auth', 'Edm.String', true),
        /**
         * Static representation of the {@link sslInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SSL_INFO: fieldBuilder.buildComplexTypeField(
          'sslInfo',
          SslInfoField,
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', true),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link host} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HOST: fieldBuilder.buildEdmTypeField('host', 'Edm.String', true),
        /**
         * Static representation of the {@link port} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PORT: fieldBuilder.buildEdmTypeField('port', 'Edm.Int32', true),
        /**
         * Static representation of the {@link useSsl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_SSL: fieldBuilder.buildEdmTypeField('useSSL', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link trustAll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRUST_ALL: fieldBuilder.buildEdmTypeField(
          'trustAll',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link userName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_NAME: fieldBuilder.buildEdmTypeField(
          'userName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clientSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_SECRET: fieldBuilder.buildEdmTypeField(
          'clientSecret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clientId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_ID: fieldBuilder.buildEdmTypeField(
          'clientId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tokenUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOKEN_URL: fieldBuilder.buildEdmTypeField(
          'tokenUrl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link authType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTH_TYPE: fieldBuilder.buildEdmTypeField(
          'authType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link pathPrefix} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PATH_PREFIX: fieldBuilder.buildEdmTypeField(
          'pathPrefix',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link timeout} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMEOUT: fieldBuilder.buildEdmTypeField('timeout', 'Edm.Int32', true),
        /**
         * Static representation of the {@link cockpitUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COCKPIT_URL: fieldBuilder.buildEdmTypeField(
          'cockpit_url',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cloudConnectorLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOUD_CONNECTOR_LOCATION: fieldBuilder.buildEdmTypeField(
          'cloudConnectorLocation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link orgSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORG_SECRET: fieldBuilder.buildEdmTypeField(
          'orgSecret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link userSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_SECRET: fieldBuilder.buildEdmTypeField(
          'userSecret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keystorePassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYSTORE_PASSWORD: fieldBuilder.buildEdmTypeField(
          'keystorePassword',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link keystoreLocation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KEYSTORE_LOCATION: fieldBuilder.buildEdmTypeField(
          'keystoreLocation',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiProviders)
      };
    }

    return this._schema;
  }
}
