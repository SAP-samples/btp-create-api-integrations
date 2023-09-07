/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Certificates } from './Certificates';
import { CertificatesRequestBuilder } from './CertificatesRequestBuilder';
import { CertificateStoresApi } from './CertificateStoresApi';
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
  EdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class CertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Certificates<DeSerializersT>, DeSerializersT>
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
  ): CertificatesApi<DeSerializersT> {
    return new CertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link certificateStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_STORE: OneToOneLink<
      Certificates<DeSerializersT>,
      DeSerializersT,
      CertificateStoresApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [CertificateStoresApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      CERTIFICATE_STORE: new OneToOneLink(
        'certificateStore',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = Certificates;

  requestBuilder(): CertificatesRequestBuilder<DeSerializersT> {
    return new CertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Certificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Certificates<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Certificates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Certificates, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Certificates, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CERT_NAME: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CS_KEY: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FORMAT: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      Certificates<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_NAME: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STORE_TYPE: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXPIRY_DATE: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ISSUER_EMAIL: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBJECT_EMAIL: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN_ALG_NAME: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_VALID: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTENT: EdmTypeField<
      Certificates<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link certificateStore} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CERTIFICATE_STORE: OneToOneLink<
      Certificates<DeSerializersT>,
      DeSerializersT,
      CertificateStoresApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Certificates<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link certName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERT_NAME: fieldBuilder.buildEdmTypeField(
          'certName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link csKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CS_KEY: fieldBuilder.buildEdmTypeField('csKey', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link format} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FORMAT: fieldBuilder.buildEdmTypeField('format', 'Edm.String', true),
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
         * Static representation of the {@link storeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_NAME: fieldBuilder.buildEdmTypeField(
          'storeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link storeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_TYPE: fieldBuilder.buildEdmTypeField(
          'storeType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'expiryDate',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link issuerEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_EMAIL: fieldBuilder.buildEdmTypeField(
          'issuerEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subjectEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT_EMAIL: fieldBuilder.buildEdmTypeField(
          'subjectEmail',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link signAlgName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_ALG_NAME: fieldBuilder.buildEdmTypeField(
          'signAlgName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isValid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_VALID: fieldBuilder.buildEdmTypeField('isValid', 'Edm.String', true),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'validFrom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
        /**
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.Binary', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Certificates)
      };
    }

    return this._schema;
  }
}
