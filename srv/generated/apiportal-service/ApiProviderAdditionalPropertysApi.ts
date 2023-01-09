/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiProviderAdditionalPropertys } from './ApiProviderAdditionalPropertys';
import { ApiProviderAdditionalPropertysRequestBuilder } from './ApiProviderAdditionalPropertysRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class ApiProviderAdditionalPropertysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ApiProviderAdditionalPropertys<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApiProviderAdditionalPropertys;

  requestBuilder(): ApiProviderAdditionalPropertysRequestBuilder<DeSerializersT> {
    return new ApiProviderAdditionalPropertysRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ApiProviderAdditionalPropertys<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApiProviderAdditionalPropertys<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApiProviderAdditionalPropertys,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApiProviderAdditionalPropertys,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENTITY_ID: OrderableEdmTypeField<
      ApiProviderAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProviderAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      ApiProviderAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApiProviderAdditionalPropertys<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link entityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'entityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiProviderAdditionalPropertys)
      };
    }

    return this._schema;
  }
}
