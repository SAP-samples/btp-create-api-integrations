/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyMapEntries } from './KeyMapEntries';
import { KeyMapEntriesRequestBuilder } from './KeyMapEntriesRequestBuilder';
import { KeyMapEntryValuesApi } from './KeyMapEntryValuesApi';
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
export class KeyMapEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyMapEntries<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link keyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY_VALUES: Link<
      KeyMapEntries<DeSerializersT>,
      DeSerializersT,
      KeyMapEntryValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KeyMapEntryValuesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KEY_MAP_ENTRY_VALUES: new Link('keyMapEntryValues', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = KeyMapEntries;

  requestBuilder(): KeyMapEntriesRequestBuilder<DeSerializersT> {
    return new KeyMapEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KeyMapEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<KeyMapEntries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof KeyMapEntries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(KeyMapEntries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ENCRYPTED: OrderableEdmTypeField<
      KeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      KeyMapEntries<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      KeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      KeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link keyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY_VALUES: Link<
      KeyMapEntries<DeSerializersT>,
      DeSerializersT,
      KeyMapEntryValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KeyMapEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link encrypted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENCRYPTED: fieldBuilder.buildEdmTypeField(
          'encrypted',
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
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KeyMapEntries)
      };
    }

    return this._schema;
  }
}
