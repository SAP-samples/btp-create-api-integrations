/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiProducts } from './ApiProducts';
import { ApiProductsRequestBuilder } from './ApiProductsRequestBuilder';
import { ApiProductAdditionalPropertiesApi } from './ApiProductAdditionalPropertiesApi';
import { ApiProxiesApi } from './ApiProxiesApi';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ApplicationsApi } from './ApplicationsApi';
import { RatePlansApi } from './RatePlansApi';
import { ResourcesApi } from './ResourcesApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class ApiProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProducts<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ApiProductAdditionalPropertiesApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      ApiResourcesApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>,
      RatePlansApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ApiProducts;
  requestBuilder(): ApiProductsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ApiProducts<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ApiProducts<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ApiProducts, DeSerializersT>;
  private _schema?;
  get schema(): {
    IS_PUBLISHED: OrderableEdmTypeField<
      ApiProducts<
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
    IS_RESTRICTED: OrderableEdmTypeField<
      ApiProducts<
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
      ApiProducts<
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
      ApiProducts<
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
    PUBLISHED_AT: OrderableEdmTypeField<
      ApiProducts<
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
      'Edm.DateTime',
      true,
      true
    >;
    PUBLISHED_BY: OrderableEdmTypeField<
      ApiProducts<
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
    QUOTA_COUNT: OrderableEdmTypeField<
      ApiProducts<
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
      'Edm.Int32',
      true,
      true
    >;
    QUOTA_INTERVAL: OrderableEdmTypeField<
      ApiProducts<
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
      'Edm.Int32',
      true,
      true
    >;
    QUOTA_TIME_UNIT: OrderableEdmTypeField<
      ApiProducts<
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
    SCOPE: OrderableEdmTypeField<
      ApiProducts<
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
      ApiProducts<
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
      ApiProducts<
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
      ApiProducts<
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
      ApiProducts<
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
     * Static representation of the one-to-many navigation property {@link additionalProperties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_PROPERTIES: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      ApiProductAdditionalPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXIES: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCES: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link ratePlans} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RATE_PLANS: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      RatePlansApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiProducts<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ApiProducts<
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
//# sourceMappingURL=ApiProductsApi.d.ts.map
