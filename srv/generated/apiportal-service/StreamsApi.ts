/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Streams } from './Streams';
import { StreamsRequestBuilder } from './StreamsRequestBuilder';
import { FlowRulesApi } from './FlowRulesApi';
import { StepsApi } from './StepsApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class StreamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Streams<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link flow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FLOW: OneToOneLink<
      Streams<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      Streams<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [FlowRulesApi<DeSerializersT>, StepsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      FLOW: new OneToOneLink('flow', this, linkedApis[0]),
      STEPS: new Link('steps', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Streams;

  requestBuilder(): StreamsRequestBuilder<DeSerializersT> {
    return new StreamsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Streams<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Streams<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Streams<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Streams, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Streams, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_FLOW_ID: OrderableEdmTypeField<
      Streams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Streams<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_REQUEST: OrderableEdmTypeField<
      Streams<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link flow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FLOW: OneToOneLink<
      Streams<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      Streams<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Streams<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fkFlowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_FLOW_ID: fieldBuilder.buildEdmTypeField(
          'FK_FLOW_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link isRequest} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REQUEST: fieldBuilder.buildEdmTypeField(
          'isRequest',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Streams)
      };
    }

    return this._schema;
  }
}
