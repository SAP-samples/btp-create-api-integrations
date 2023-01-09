/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GenericKeyMapEntries } from './GenericKeyMapEntries';
import { GenericKeyMapEntriesRequestBuilder } from './GenericKeyMapEntriesRequestBuilder';
import { GenericKeyMapEntryValuesApi } from './GenericKeyMapEntryValuesApi';
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
export class GenericKeyMapEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link genericKeyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY_VALUES: Link<
      GenericKeyMapEntries<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntryValuesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [GenericKeyMapEntryValuesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GENERIC_KEY_MAP_ENTRY_VALUES: new Link(
        'genericKeyMapEntryValues',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = GenericKeyMapEntries;

  requestBuilder(): GenericKeyMapEntriesRequestBuilder<DeSerializersT> {
    return new GenericKeyMapEntriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GenericKeyMapEntries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    GenericKeyMapEntries<DeSerializersT>,
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
    typeof GenericKeyMapEntries,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        GenericKeyMapEntries,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    IS_ENCRYPTED: OrderableEdmTypeField<
      GenericKeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      GenericKeyMapEntries<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      GenericKeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      GenericKeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCOPE_ID: OrderableEdmTypeField<
      GenericKeyMapEntries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link genericKeyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY_VALUES: Link<
      GenericKeyMapEntries<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntryValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<GenericKeyMapEntries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link isEncrypted} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ENCRYPTED: fieldBuilder.buildEdmTypeField(
          'isEncrypted',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GenericKeyMapEntries)
      };
    }

    return this._schema;
  }
}
