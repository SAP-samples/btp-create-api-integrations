/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Documentations } from './Documentations';
import { DocumentationsRequestBuilder } from './DocumentationsRequestBuilder';
import { ApiResourcesApi } from './ApiResourcesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class DocumentationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Documentations<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link apiResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCE: OneToOneLink<
      Documentations<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ApiResourcesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      API_RESOURCE: new OneToOneLink('apiResource', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Documentations;

  requestBuilder(): DocumentationsRequestBuilder<DeSerializersT> {
    return new DocumentationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Documentations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Documentations<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Documentations<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Documentations, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Documentations, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_APIRESOURCE_ID: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    API_RESOURCE_NAME: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTENT: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_CYCLE: HistoryField<
      Documentations<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    LOCALE: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIME_TYPE: OrderableEdmTypeField<
      Documentations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCE: OneToOneLink<
      Documentations<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Documentations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fkApiresourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_APIRESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'FK_APIRESOURCE_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link apiResourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        API_RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'apiResourceName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.String', true),
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
         * Static representation of the {@link locale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
        /**
         * Static representation of the {@link mimeType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIME_TYPE: fieldBuilder.buildEdmTypeField(
          'mime_type',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Documentations)
      };
    }

    return this._schema;
  }
}
