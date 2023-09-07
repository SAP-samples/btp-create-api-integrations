/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FlowRules } from './FlowRules';
import { FlowRulesRequestBuilder } from './FlowRulesRequestBuilder';
import { StreamsApi } from './StreamsApi';
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
export class FlowRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FlowRules<DeSerializersT>, DeSerializersT>
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
  ): FlowRulesApi<DeSerializersT> {
    return new FlowRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [StreamsApi<DeSerializersT>, StreamsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REQUEST: new OneToOneLink('request', this, linkedApis[0]),
      RESPONSE: new OneToOneLink('response', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = FlowRules;

  requestBuilder(): FlowRulesRequestBuilder<DeSerializersT> {
    return new FlowRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FlowRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FlowRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FlowRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FlowRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FlowRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      FlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FK_REQUEST_ID: OrderableEdmTypeField<
      FlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_RESPONSE_ID: OrderableEdmTypeField<
      FlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FlowRules<DeSerializers>>;
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
         * Static representation of the {@link fkRequestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'FK_REQUEST_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkResponseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_RESPONSE_ID: fieldBuilder.buildEdmTypeField(
          'FK_RESPONSE_ID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FlowRules)
      };
    }

    return this._schema;
  }
}
