/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApplicationAdditionalPropertys } from './ApplicationAdditionalPropertys';
import { ApplicationAdditionalPropertysRequestBuilder } from './ApplicationAdditionalPropertysRequestBuilder';
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
export class ApplicationAdditionalPropertysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ApplicationAdditionalPropertys<DeSerializersT>, DeSerializersT>
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

  entityConstructor = ApplicationAdditionalPropertys;

  requestBuilder(): ApplicationAdditionalPropertysRequestBuilder<DeSerializersT> {
    return new ApplicationAdditionalPropertysRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ApplicationAdditionalPropertys<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApplicationAdditionalPropertys<DeSerializersT>,
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
    typeof ApplicationAdditionalPropertys,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApplicationAdditionalPropertys,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENTITY_ID: OrderableEdmTypeField<
      ApplicationAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApplicationAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      ApplicationAdditionalPropertys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ApplicationAdditionalPropertys<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', ApplicationAdditionalPropertys)
      };
    }

    return this._schema;
  }
}
