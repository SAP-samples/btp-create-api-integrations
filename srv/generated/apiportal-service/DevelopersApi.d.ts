/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Developers } from './Developers';
import { DevelopersRequestBuilder } from './DevelopersRequestBuilder';
import { ApplicationsApi } from './ApplicationsApi';
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
export declare class DevelopersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Developers<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [ApplicationsApi<DeSerializersT>]): this;
  entityConstructor: typeof Developers;
  requestBuilder(): DevelopersRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Developers<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Developers<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Developers, DeSerializersT>;
  private _schema?;
  get schema(): {
    COUNTRY: OrderableEdmTypeField<
      Developers<
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
    EMAIL_ID: OrderableEdmTypeField<
      Developers<
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
    FIRST_NAME: OrderableEdmTypeField<
      Developers<
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
    ID: OrderableEdmTypeField<
      Developers<
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
    LAST_NAME: OrderableEdmTypeField<
      Developers<
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
    LIFE_CYCLE: HistoryField<
      Developers<
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
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: Link<
      Developers<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Developers<
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
//# sourceMappingURL=DevelopersApi.d.ts.map
