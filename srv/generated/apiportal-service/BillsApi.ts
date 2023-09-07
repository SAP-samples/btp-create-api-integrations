/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Bills } from './Bills';
import { BillsRequestBuilder } from './BillsRequestBuilder';
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
export class BillsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Bills<DeSerializersT>, DeSerializersT>
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
  ): BillsApi<DeSerializersT> {
    return new BillsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Bills;

  requestBuilder(): BillsRequestBuilder<DeSerializersT> {
    return new BillsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Bills<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Bills<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Bills<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Bills, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Bills, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BILL_DETAILS: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_GENERATED_AT: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    BILL_GENERATED_BY: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILL_ID: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ID: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_ID: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENTITY_NAME: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_TYPE: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    ISOFFBOARDED: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OFFBOARDED_DATE: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    STATUS: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    TOTAL: OrderableEdmTypeField<
      Bills<DeSerializers>,
      DeSerializersT,
      'Edm.Double',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Bills<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link billDetails} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_DETAILS: fieldBuilder.buildEdmTypeField(
          'billDetails',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billGeneratedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_GENERATED_AT: fieldBuilder.buildEdmTypeField(
          'billGeneratedAt',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link billGeneratedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_GENERATED_BY: fieldBuilder.buildEdmTypeField(
          'billGeneratedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILL_ID: fieldBuilder.buildEdmTypeField('billId', 'Edm.String', true),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'currency',
          'Edm.String',
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
        /**
         * Static representation of the {@link emailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ID: fieldBuilder.buildEdmTypeField('emailId', 'Edm.String', true),
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
         * Static representation of the {@link entityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'entityName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_TYPE: fieldBuilder.buildEdmTypeField(
          'entityType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'firstName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'fromDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link isoffboarded} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISOFFBOARDED: fieldBuilder.buildEdmTypeField(
          'isoffboarded',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'lastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link offboardedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFBOARDED_DATE: fieldBuilder.buildEdmTypeField(
          'offboardedDate',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'toDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link total} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL: fieldBuilder.buildEdmTypeField('total', 'Edm.Double', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Bills)
      };
    }

    return this._schema;
  }
}
