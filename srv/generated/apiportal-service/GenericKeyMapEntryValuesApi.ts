/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GenericKeyMapEntryValues } from './GenericKeyMapEntryValues';
import { GenericKeyMapEntryValuesRequestBuilder } from './GenericKeyMapEntryValuesRequestBuilder';
import { GenericKeyMapEntriesApi } from './GenericKeyMapEntriesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class GenericKeyMapEntryValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GenericKeyMapEntryValues<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link genericKeyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY: OneToOneLink<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [GenericKeyMapEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GENERIC_KEY_MAP_ENTRY: new OneToOneLink(
        'genericKeyMapEntry',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GenericKeyMapEntryValues;

  requestBuilder(): GenericKeyMapEntryValuesRequestBuilder<DeSerializersT> {
    return new GenericKeyMapEntryValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GenericKeyMapEntryValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GenericKeyMapEntryValues<DeSerializersT>,
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
    typeof GenericKeyMapEntryValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GenericKeyMapEntryValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIFE_CYCLE: HistoryField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    MAP_NAME: OrderableEdmTypeField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE_ID: OrderableEdmTypeField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      GenericKeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link genericKeyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY: OneToOneLink<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GenericKeyMapEntryValues<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link mapName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAP_NAME: fieldBuilder.buildEdmTypeField(
          'mapName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', false),
        /**
         * Static representation of the {@link scopeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_ID: fieldBuilder.buildEdmTypeField(
          'scopeId',
          'Edm.String',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', GenericKeyMapEntryValues)
      };
    }

    return this._schema;
  }
}
