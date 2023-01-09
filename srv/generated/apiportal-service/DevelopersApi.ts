/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Developers } from './Developers';
import { DevelopersRequestBuilder } from './DevelopersRequestBuilder';
import { ApplicationsApi } from './ApplicationsApi';
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
export class DevelopersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Developers<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link applications} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    APPLICATIONS: Link<
      Developers<DeSerializersT>,
      DeSerializersT,
      ApplicationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ApplicationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      APPLICATIONS: new Link('applications', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Developers;

  requestBuilder(): DevelopersRequestBuilder<DeSerializersT> {
    return new DevelopersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Developers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Developers<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Developers<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Developers, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Developers, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COUNTRY: OrderableEdmTypeField<
      Developers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ID: OrderableEdmTypeField<
      Developers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      Developers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      Developers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      Developers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_CYCLE: HistoryField<
      Developers<DeSerializers>,
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
    ALL_FIELDS: AllFields<Developers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link country} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
        /**
         * Static representation of the {@link emailId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ID: fieldBuilder.buildEdmTypeField(
          'emailId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'firstName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'lastName',
          'Edm.String',
          false
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Developers)
      };
    }

    return this._schema;
  }
}
