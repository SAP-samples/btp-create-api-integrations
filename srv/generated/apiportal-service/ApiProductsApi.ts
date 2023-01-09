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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ApiProductsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProducts<DeSerializersT>, DeSerializersT>
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
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProductAdditionalPropertiesApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      ApiResourcesApi<DeSerializersT>,
      ApplicationsApi<DeSerializersT>,
      RatePlansApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ADDITIONAL_PROPERTIES: new Link(
        'additionalProperties',
        this,
        linkedApis[0]
      ),
      API_PROXIES: new Link('apiProxies', this, linkedApis[1]),
      API_RESOURCES: new Link('apiResources', this, linkedApis[2]),
      APPLICATIONS: new Link('applications', this, linkedApis[3]),
      RATE_PLANS: new Link('ratePlans', this, linkedApis[4]),
      RESOURCES: new Link('resources', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = ApiProducts;

  requestBuilder(): ApiProductsRequestBuilder<DeSerializersT> {
    return new ApiProductsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiProducts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiProducts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApiProducts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApiProducts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApiProducts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IS_PUBLISHED: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_RESTRICTED: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PUBLISHED_AT: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    PUBLISHED_BY: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QUOTA_COUNT: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUOTA_INTERVAL: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    QUOTA_TIME_UNIT: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ApiProducts<DeSerializers>,
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
    ALL_FIELDS: AllFields<ApiProducts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link isRestricted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_RESTRICTED: fieldBuilder.buildEdmTypeField(
          'isRestricted',
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
         * Static representation of the {@link publishedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_AT: fieldBuilder.buildEdmTypeField(
          'published_at',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link publishedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_BY: fieldBuilder.buildEdmTypeField(
          'published_by',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link quotaCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTA_COUNT: fieldBuilder.buildEdmTypeField(
          'quotaCount',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link quotaInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTA_INTERVAL: fieldBuilder.buildEdmTypeField(
          'quotaInterval',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link quotaTimeUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUOTA_TIME_UNIT: fieldBuilder.buildEdmTypeField(
          'quotaTimeUnit',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', ApiProducts)
      };
    }

    return this._schema;
  }
}
