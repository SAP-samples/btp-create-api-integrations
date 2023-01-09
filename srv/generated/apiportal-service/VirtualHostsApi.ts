/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VirtualHosts } from './VirtualHosts';
import { VirtualHostsRequestBuilder } from './VirtualHostsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class VirtualHostsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<VirtualHosts<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VirtualHosts;

  requestBuilder(): VirtualHostsRequestBuilder<DeSerializersT> {
    return new VirtualHostsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VirtualHosts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<VirtualHosts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof VirtualHosts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(VirtualHosts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_SSL: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJECT_PATH: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIRTUAL_HOST: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VIRTUAL_PORT: OrderableEdmTypeField<
      VirtualHosts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VirtualHosts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link isDefault} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DEFAULT: fieldBuilder.buildEdmTypeField(
          'isDefault',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isSsl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SSL: fieldBuilder.buildEdmTypeField('isSSL', 'Edm.Boolean', true),
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
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link projectPath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_PATH: fieldBuilder.buildEdmTypeField(
          'projectPath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link virtualHost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIRTUAL_HOST: fieldBuilder.buildEdmTypeField(
          'virtual_host',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link virtualPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIRTUAL_PORT: fieldBuilder.buildEdmTypeField(
          'virtual_port',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VirtualHosts)
      };
    }

    return this._schema;
  }
}
