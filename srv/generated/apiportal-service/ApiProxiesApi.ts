/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiProxies } from './ApiProxies';
import { ApiProxiesRequestBuilder } from './ApiProxiesRequestBuilder';
import { ApiProductsApi } from './ApiProductsApi';
import { ApiProvidersApi } from './ApiProvidersApi';
import { ContentPackageMappersApi } from './ContentPackageMappersApi';
import { FileResourcesApi } from './FileResourcesApi';
import { PoliciesApi } from './PoliciesApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { ResourcesApi } from './ResourcesApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
import { History, HistoryField } from './History';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ApiProxiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProxies<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): ApiProxiesApi<DeSerializersT> {
    return new ApiProxiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link apiProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PRODUCTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProvider} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROVIDER: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProvidersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contentPackage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTENT_PACKAGE: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ContentPackageMappersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fileResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FILE_RESOURCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      FileResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link policies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICIES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      PoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link proxyEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link successorApi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUCCESSOR_API: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link successorApiReferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUCCESSOR_API_REFERENCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetApiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_API_PROXIES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProductsApi<DeSerializersT>,
      ApiProvidersApi<DeSerializersT>,
      ContentPackageMappersApi<DeSerializersT>,
      FileResourcesApi<DeSerializersT>,
      PoliciesApi<DeSerializersT>,
      ApiProxyEndPointsApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      API_PRODUCTS: new Link('apiProducts', this, linkedApis[0]),
      API_PROVIDER: new OneToOneLink('apiProvider', this, linkedApis[1]),
      CONTENT_PACKAGE: new OneToOneLink('contentPackage', this, linkedApis[2]),
      FILE_RESOURCES: new Link('fileResources', this, linkedApis[3]),
      POLICIES: new Link('policies', this, linkedApis[4]),
      PROXY_END_POINTS: new Link('proxyEndPoints', this, linkedApis[5]),
      RESOURCES: new Link('resources', this, linkedApis[6]),
      SUCCESSOR_API: new OneToOneLink('successorAPI', this, linkedApis[7]),
      SUCCESSOR_API_REFERENCES: new Link(
        'successorAPIReferences',
        this,
        linkedApis[8]
      ),
      TARGET_API_PROXIES: new Link('targetAPIProxies', this, linkedApis[9]),
      TARGET_END_POINTS: new Link('targetEndPoints', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = ApiProxies;

  requestBuilder(): ApiProxiesRequestBuilder<DeSerializersT> {
    return new ApiProxiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiProxies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiProxies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApiProxies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApiProxies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApiProxies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_PROVIDERNAME: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    API_VERSION_GROUP: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CF_BINDING_ID: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_CHANGES: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_COPY: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_PUBLISHED: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_UNMANAGED: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_VERSIONED: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROVIDER_NAME: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_METADATA: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_STATUS: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_TEMPLATE_NAMES: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ApiProxies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PRODUCTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProvider} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROVIDER: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProvidersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link contentPackage} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONTENT_PACKAGE: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ContentPackageMappersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link fileResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FILE_RESOURCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      FileResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link policies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICIES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      PoliciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link proxyEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link successorApi} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUCCESSOR_API: OneToOneLink<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link successorApiReferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUCCESSOR_API_REFERENCES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetApiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_API_PROXIES: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link targetEndPoints} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINTS: Link<
      ApiProxies<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApiProxies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fkProvidername} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_PROVIDERNAME: fieldBuilder.buildEdmTypeField(
          'FK_PROVIDERNAME',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apiVersionGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        API_VERSION_GROUP: fieldBuilder.buildEdmTypeField(
          'apiVersionGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link cfBindingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CF_BINDING_ID: fieldBuilder.buildEdmTypeField(
          'cfBindingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hasChanges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_CHANGES: fieldBuilder.buildEdmTypeField(
          'hasChanges',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isCopy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_COPY: fieldBuilder.buildEdmTypeField('isCopy', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link isPublished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLISHED: fieldBuilder.buildEdmTypeField(
          'isPublished',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isUnmanaged} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_UNMANAGED: fieldBuilder.buildEdmTypeField(
          'isUnmanaged',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isVersioned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VERSIONED: fieldBuilder.buildEdmTypeField(
          'isVersioned',
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
         * Static representation of the {@link providerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVIDER_NAME: fieldBuilder.buildEdmTypeField(
          'provider_name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseMetadata} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_METADATA: fieldBuilder.buildEdmTypeField(
          'releaseMetadata',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link releaseStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEASE_STATUS: fieldBuilder.buildEdmTypeField(
          'releaseStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_CODE: fieldBuilder.buildEdmTypeField(
          'service_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.String', true),
        /**
         * Static representation of the {@link statusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'status_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
        /**
         * Static representation of the {@link policyTemplateNames} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_TEMPLATE_NAMES: fieldBuilder.buildEdmTypeField(
          'policyTemplateNames',
          'Edm.String',
          true
        ),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiProxies)
      };
    }

    return this._schema;
  }
}
