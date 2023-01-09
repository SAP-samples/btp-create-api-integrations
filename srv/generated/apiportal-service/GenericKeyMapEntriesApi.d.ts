/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GenericKeyMapEntries } from './GenericKeyMapEntries';
import { GenericKeyMapEntriesRequestBuilder } from './GenericKeyMapEntriesRequestBuilder';
import { GenericKeyMapEntryValuesApi } from './GenericKeyMapEntryValuesApi';
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
export declare class GenericKeyMapEntriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [GenericKeyMapEntryValuesApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof GenericKeyMapEntries;
  requestBuilder(): GenericKeyMapEntriesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    GenericKeyMapEntries<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    GenericKeyMapEntries<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof GenericKeyMapEntries, DeSerializersT>;
  private _schema?;
  get schema(): {
    IS_ENCRYPTED: OrderableEdmTypeField<
      GenericKeyMapEntries<
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
      GenericKeyMapEntries<
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
      GenericKeyMapEntries<
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
      GenericKeyMapEntries<
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
    SCOPE_ID: OrderableEdmTypeField<
      GenericKeyMapEntries<
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
    /**
     * Static representation of the one-to-many navigation property {@link genericKeyMapEntryValues} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY_VALUES: Link<
      GenericKeyMapEntries<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntryValuesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      GenericKeyMapEntries<
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
//# sourceMappingURL=GenericKeyMapEntriesApi.d.ts.map
