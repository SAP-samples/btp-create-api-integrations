/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Applications } from './Applications';
import { ApplicationsRequestBuilder } from './ApplicationsRequestBuilder';
import { ApiProductsApi } from './ApiProductsApi';
import { ApplicationAdditionalPropertysApi } from './ApplicationAdditionalPropertysApi';
import { DevelopersApi } from './DevelopersApi';
import { ResourcesApi } from './ResourcesApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ApplicationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Applications<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link apiProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PRODUCTS: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTES: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApplicationAdditionalPropertysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link developer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVELOPER: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      DevelopersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProductsApi<DeSerializersT>,
      ApplicationAdditionalPropertysApi<DeSerializersT>,
      DevelopersApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      API_PRODUCTS: new Link('apiProducts', this, linkedApis[0]),
      ATTRIBUTES: new Link('attributes', this, linkedApis[1]),
      DEVELOPER: new OneToOneLink('developer', this, linkedApis[2]),
      RESOURCES: new Link('resources', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Applications;

  requestBuilder(): ApplicationsRequestBuilder<DeSerializersT> {
    return new ApplicationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Applications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Applications<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Applications<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Applications, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Applications, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALLBACKURL: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_DEVELOPER_ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_CYCLE: HistoryField<
      Applications<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APP_KEY: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APP_SECRET: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSCRIBED_RATE_PLAN: OrderableEdmTypeField<
      Applications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PRODUCTS: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApiProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link attributes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ATTRIBUTES: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ApplicationAdditionalPropertysApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link developer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEVELOPER: OneToOneLink<
      Applications<DeSerializersT>,
      DeSerializersT,
      DevelopersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      Applications<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Applications<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link callbackurl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALLBACKURL: fieldBuilder.buildEdmTypeField(
          'callbackurl',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkDeveloperId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_DEVELOPER_ID: fieldBuilder.buildEdmTypeField(
          'FK_DEVELOPER_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
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
         * Static representation of the {@link statusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'status_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'valid_from',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'valid_to',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
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
         * Static representation of the {@link appKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_KEY: fieldBuilder.buildEdmTypeField('app_key', 'Edm.String', true),
        /**
         * Static representation of the {@link appSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APP_SECRET: fieldBuilder.buildEdmTypeField(
          'app_secret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subscribedRatePlan} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSCRIBED_RATE_PLAN: fieldBuilder.buildEdmTypeField(
          'subscribedRatePlan',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Applications)
      };
    }

    return this._schema;
  }
}
