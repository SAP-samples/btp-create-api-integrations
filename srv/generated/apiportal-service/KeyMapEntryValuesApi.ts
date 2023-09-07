/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyMapEntryValues } from './KeyMapEntryValues';
import { KeyMapEntryValuesRequestBuilder } from './KeyMapEntryValuesRequestBuilder';
import { KeyMapEntriesApi } from './KeyMapEntriesApi';
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
export class KeyMapEntryValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
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
  ): KeyMapEntryValuesApi<DeSerializersT> {
    return new KeyMapEntryValuesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link keyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY: OneToOneLink<
      KeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      KeyMapEntriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KeyMapEntriesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KEY_MAP_ENTRY: new OneToOneLink('keyMapEntry', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = KeyMapEntryValues;

  requestBuilder(): KeyMapEntryValuesRequestBuilder<DeSerializersT> {
    return new KeyMapEntryValuesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeyMapEntryValues<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KeyMapEntryValues<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof KeyMapEntryValues,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KeyMapEntryValues,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIFE_CYCLE: HistoryField<
      KeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    MAP_NAME: OrderableEdmTypeField<
      KeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      KeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      KeyMapEntryValues<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link keyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY: OneToOneLink<
      KeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      KeyMapEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KeyMapEntryValues<DeSerializers>>;
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
          'map_name',
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
        ALL_FIELDS: new AllFields('*', KeyMapEntryValues)
      };
    }

    return this._schema;
  }
}
