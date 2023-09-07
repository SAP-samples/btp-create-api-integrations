/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificateStores } from './CertificateStores';
import { CertificateStoresRequestBuilder } from './CertificateStoresRequestBuilder';
import { CertificatesApi } from './CertificatesApi';
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
export class CertificateStoresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificateStores<DeSerializersT>, DeSerializersT>
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
  ): CertificateStoresApi<DeSerializersT> {
    return new CertificateStoresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link certificates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATES: Link<
      CertificateStores<DeSerializersT>,
      DeSerializersT,
      CertificatesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CertificatesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CERTIFICATES: new Link('certificates', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = CertificateStores;

  requestBuilder(): CertificateStoresRequestBuilder<DeSerializersT> {
    return new CertificateStoresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificateStores<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CertificateStores<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CertificateStores<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CertificateStores,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificateStores,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LIFE_CYCLE: HistoryField<
      CertificateStores<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CertificateStores<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_TYPE: OrderableEdmTypeField<
      CertificateStores<DeSerializers>,
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
    ALL_FIELDS: AllFields<CertificateStores<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link storeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_TYPE: fieldBuilder.buildEdmTypeField(
          'storeType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificateStores)
      };
    }

    return this._schema;
  }
}
