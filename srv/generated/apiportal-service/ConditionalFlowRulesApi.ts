/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConditionalFlowRules } from './ConditionalFlowRules';
import { ConditionalFlowRulesRequestBuilder } from './ConditionalFlowRulesRequestBuilder';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { StreamsApi } from './StreamsApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
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
export class ConditionalFlowRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
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
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiResourcesApi<DeSerializersT>,
      ApiProxyEndPointsApi<DeSerializersT>,
      StreamsApi<DeSerializersT>,
      StreamsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      API_RESOURCE: new OneToOneLink('apiResource', this, linkedApis[0]),
      PROXY_END_POINT: new OneToOneLink('proxyEndPoint', this, linkedApis[1]),
      REQUEST: new OneToOneLink('request', this, linkedApis[2]),
      RESPONSE: new OneToOneLink('response', this, linkedApis[3]),
      TARGET_END_POINT: new OneToOneLink('targetEndPoint', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = ConditionalFlowRules;

  requestBuilder(): ConditionalFlowRulesRequestBuilder<DeSerializersT> {
    return new ConditionalFlowRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ConditionalFlowRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ConditionalFlowRules<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ConditionalFlowRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ConditionalFlowRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_APIRESOURCE_ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITIONS: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    READ_ONLY: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    FK_REQUEST_ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_RESPONSE_ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      ConditionalFlowRules<DeSerializers>,
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
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ConditionalFlowRules<DeSerializers>>;
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
         * Static representation of the {@link conditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITIONS: fieldBuilder.buildEdmTypeField(
          'conditions',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link fkProxyendpointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField(
          'FK_PROXYENDPOINT_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link readOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        READ_ONLY: fieldBuilder.buildEdmTypeField(
          'readOnly',
          'Edm.Boolean',
          true
        ),
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
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
        /**
         * Static representation of the {@link fkTargetendpointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_TARGETENDPOINT_ID: fieldBuilder.buildEdmTypeField(
          'FK_TARGETENDPOINT_ID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ConditionalFlowRules)
      };
    }

    return this._schema;
  }
}
