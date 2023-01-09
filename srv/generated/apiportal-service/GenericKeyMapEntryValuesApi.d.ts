/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GenericKeyMapEntryValues } from './GenericKeyMapEntryValues';
import { GenericKeyMapEntryValuesRequestBuilder } from './GenericKeyMapEntryValuesRequestBuilder';
import { GenericKeyMapEntriesApi } from './GenericKeyMapEntriesApi';
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
export declare class GenericKeyMapEntryValuesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<GenericKeyMapEntryValues<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [GenericKeyMapEntriesApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof GenericKeyMapEntryValues;
  requestBuilder(): GenericKeyMapEntryValuesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    GenericKeyMapEntryValues<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    GenericKeyMapEntryValues<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof GenericKeyMapEntryValues,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    LIFE_CYCLE: HistoryField<
      GenericKeyMapEntryValues<
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
      GenericKeyMapEntryValues<
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
      GenericKeyMapEntryValues<
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
      GenericKeyMapEntryValues<
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
      GenericKeyMapEntryValues<
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
      GenericKeyMapEntryValues<
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
     * Static representation of the one-to-one navigation property {@link genericKeyMapEntry} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENERIC_KEY_MAP_ENTRY: OneToOneLink<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT,
      GenericKeyMapEntriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      GenericKeyMapEntryValues<
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
//# sourceMappingURL=GenericKeyMapEntryValuesApi.d.ts.map
