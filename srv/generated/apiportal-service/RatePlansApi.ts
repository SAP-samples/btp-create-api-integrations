/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RatePlans } from './RatePlans';
import { RatePlansRequestBuilder } from './RatePlansRequestBuilder';
import { ApiProductsApi } from './ApiProductsApi';
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
export class RatePlansApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RatePlans<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link apiProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PRODUCTS: Link<
      RatePlans<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      RatePlans<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ApiProductsApi<DeSerializersT>, ResourcesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      API_PRODUCTS: new Link('apiProducts', this, linkedApis[0]),
      RESOURCES: new Link('resources', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RatePlans;

  requestBuilder(): RatePlansRequestBuilder<DeSerializersT> {
    return new RatePlansRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RatePlans<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RatePlans<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RatePlans<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RatePlans, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RatePlans, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CURRENCY: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FREQUENCY: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ACTIVE: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_PUBLISHED: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    IS_SEASONAL: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RATE: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RatePlans<DeSerializers>,
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
      RatePlans<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      RatePlans<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RatePlans<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link frequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FREQUENCY: fieldBuilder.buildEdmTypeField(
          'frequency',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEdmTypeField(
          'isActive',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isPublished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLISHED: fieldBuilder.buildEdmTypeField(
          'isPublished',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link isSeasonal} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SEASONAL: fieldBuilder.buildEdmTypeField(
          'isSeasonal',
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
         * Static representation of the {@link rate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATE: fieldBuilder.buildEdmTypeField('rate', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'validTo',
          'Edm.DateTime',
          true
        ),
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
        ALL_FIELDS: new AllFields('*', RatePlans)
      };
    }

    return this._schema;
  }
}
