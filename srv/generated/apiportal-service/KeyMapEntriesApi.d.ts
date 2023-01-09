/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyMapEntries } from './KeyMapEntries';
import { KeyMapEntriesRequestBuilder } from './KeyMapEntriesRequestBuilder';
import { KeyMapEntryValuesApi } from './KeyMapEntryValuesApi';
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
export declare class KeyMapEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyMapEntries<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [KeyMapEntryValuesApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof KeyMapEntries;
  requestBuilder(): KeyMapEntriesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    KeyMapEntries<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<KeyMapEntries<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof KeyMapEntries, DeSerializersT>;
  private _schema?;
  get schema(): {
    ENCRYPTED: OrderableEdmTypeField<
      KeyMapEntries<
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
      KeyMapEntries<
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
      KeyMapEntries<
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
    SCOPE: OrderableEdmTypeField<
      KeyMapEntries<
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
     * Static representation of the one-to-many navigation property {@link keyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY_VALUES: Link<
      KeyMapEntries<DeSerializersT>,
      DeSerializersT,
      KeyMapEntryValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      KeyMapEntries<
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
//# sourceMappingURL=KeyMapEntriesApi.d.ts.map
