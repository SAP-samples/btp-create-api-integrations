/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FileResources } from './FileResources';
import { FileResourcesRequestBuilder } from './FileResourcesRequestBuilder';
import { ApiProxiesApi } from './ApiProxiesApi';
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
export class FileResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FileResources<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link apiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXIES: Link<
      FileResources<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ApiProxiesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      API_PROXIES: new Link('apiProxies', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = FileResources;

  requestBuilder(): FileResourcesRequestBuilder<DeSerializersT> {
    return new FileResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FileResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FileResources<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FileResources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FileResources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FileResources, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONTENT: OrderableEdmTypeField<
      FileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      FileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      FileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      FileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiProxies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXIES: Link<
      FileResources<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FileResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FileResources)
      };
    }

    return this._schema;
  }
}
