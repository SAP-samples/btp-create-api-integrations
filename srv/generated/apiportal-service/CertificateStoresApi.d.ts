/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateStores } from './CertificateStores';
import { CertificateStoresRequestBuilder } from './CertificateStoresRequestBuilder';
import { CertificatesApi } from './CertificatesApi';
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
export declare class CertificateStoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificateStores<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: [CertificatesApi<DeSerializersT>]): this;
  entityConstructor: typeof CertificateStores;
  requestBuilder(): CertificateStoresRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    CertificateStores<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<CertificateStores<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof CertificateStores, DeSerializersT>;
  private _schema?;
  get schema(): {
    LIFE_CYCLE: HistoryField<
      CertificateStores<
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
      CertificateStores<
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
    STORE_TYPE: OrderableEdmTypeField<
      CertificateStores<
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
     * Static representation of the one-to-many navigation property {@link certificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATES: Link<
      CertificateStores<DeSerializersT>,
      DeSerializersT,
      CertificatesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      CertificateStores<
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
//# sourceMappingURL=CertificateStoresApi.d.ts.map
