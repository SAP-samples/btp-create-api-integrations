/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KeyMapEntryValues } from './KeyMapEntryValues';
import { KeyMapEntryValuesRequestBuilder } from './KeyMapEntryValuesRequestBuilder';
import { KeyMapEntriesApi } from './KeyMapEntriesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class KeyMapEntryValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [KeyMapEntriesApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof KeyMapEntryValues;
  requestBuilder(): KeyMapEntryValuesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    KeyMapEntryValues<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<KeyMapEntryValues<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof KeyMapEntryValues, DeSerializersT>;
  private _schema?;
  get schema(): {
    LIFE_CYCLE: HistoryField<
      KeyMapEntryValues<
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
    MAP_NAME: OrderableEdmTypeField<
      KeyMapEntryValues<
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
    NAME: OrderableEdmTypeField<
      KeyMapEntryValues<
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
    VALUE: OrderableEdmTypeField<
      KeyMapEntryValues<
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
     * Static representation of the one-to-one navigation property {@link keyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KEY_MAP_ENTRY: OneToOneLink<
      KeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      KeyMapEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      KeyMapEntryValues<
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
//# sourceMappingURL=KeyMapEntryValuesApi.d.ts.map
