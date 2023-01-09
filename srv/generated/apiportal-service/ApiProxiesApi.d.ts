/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
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
import { HistoryField } from './History';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class ApiProxiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProxies<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
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
  ): this;
  entityConstructor: typeof ApiProxies;
  requestBuilder(): ApiProxiesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ApiProxies<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ApiProxies<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ApiProxies, DeSerializersT>;
  private _schema?;
  get schema(): {
    FK_PROVIDERNAME: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    API_VERSION_GROUP: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CF_BINDING_ID: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HAS_CHANGES: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_COPY: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_PUBLISHED: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_UNMANAGED: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_VERSIONED: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROVIDER_NAME: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_METADATA: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEASE_STATUS: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_CODE: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATE: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_TEMPLATE_NAMES: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      ApiProxies<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=ApiProxiesApi.d.ts.map
