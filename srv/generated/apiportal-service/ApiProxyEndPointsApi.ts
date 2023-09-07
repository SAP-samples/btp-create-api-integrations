/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiProxyEndPoints } from './ApiProxyEndPoints';
import { ApiProxyEndPointsRequestBuilder } from './ApiProxyEndPointsRequestBuilder';
import { ApiProxiesApi } from './ApiProxiesApi';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ConditionalFlowRulesApi } from './ConditionalFlowRulesApi';
import { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { FaultRulesApi } from './FaultRulesApi';
import { FlowRulesApi } from './FlowRulesApi';
import { EndPointPropertiesApi } from './EndPointPropertiesApi';
import { RouteRulesApi } from './RouteRulesApi';
import { VirtualHostsApi } from './VirtualHostsApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ApiProxyEndPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
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
  ): ApiProxyEndPointsApi<DeSerializersT> {
    return new ApiProxyEndPointsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link conditionalFlows} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONDITIONAL_FLOWS: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ConditionalFlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postClientFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_CLIENT_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link preFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRE_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      EndPointPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_RULES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      RouteRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link virtualhosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VIRTUALHOSTS: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      VirtualHostsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProxiesApi<DeSerializersT>,
      ApiResourcesApi<DeSerializersT>,
      ConditionalFlowRulesApi<DeSerializersT>,
      DefaultFaultRulesApi<DeSerializersT>,
      FaultRulesApi<DeSerializersT>,
      FlowRulesApi<DeSerializersT>,
      FlowRulesApi<DeSerializersT>,
      FlowRulesApi<DeSerializersT>,
      EndPointPropertiesApi<DeSerializersT>,
      RouteRulesApi<DeSerializersT>,
      VirtualHostsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      API_PROXY: new OneToOneLink('apiProxy', this, linkedApis[0]),
      API_RESOURCES: new Link('apiResources', this, linkedApis[1]),
      CONDITIONAL_FLOWS: new Link('conditionalFlows', this, linkedApis[2]),
      DEFAULT_FAULT_RULE: new OneToOneLink(
        'defaultFaultRule',
        this,
        linkedApis[3]
      ),
      FAULT_RULES: new Link('faultRules', this, linkedApis[4]),
      POST_CLIENT_FLOW: new OneToOneLink('postClientFlow', this, linkedApis[5]),
      POST_FLOW: new OneToOneLink('postFlow', this, linkedApis[6]),
      PRE_FLOW: new OneToOneLink('preFlow', this, linkedApis[7]),
      PROPERTIES: new Link('properties', this, linkedApis[8]),
      ROUTE_RULES: new Link('routeRules', this, linkedApis[9]),
      VIRTUALHOSTS: new Link('virtualhosts', this, linkedApis[10])
    };
    return this;
  }

  entityConstructor = ApiProxyEndPoints;

  requestBuilder(): ApiProxyEndPointsRequestBuilder<DeSerializersT> {
    return new ApiProxyEndPointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiProxyEndPoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApiProxyEndPoints<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApiProxyEndPoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApiProxyEndPoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_API_NAME: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BASE_PATH: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_DEFAULTFAULTRULE_ID: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_POSTCLIENTFLOW_ID: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_POSTFLOW_ID: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PREFLOW_ID: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PUBLISH_URL: OrderableEdmTypeField<
      ApiProxyEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link apiResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link conditionalFlows} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONDITIONAL_FLOWS: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      ConditionalFlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postClientFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_CLIENT_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link preFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRE_FLOW: OneToOneLink<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      EndPointPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link routeRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_RULES: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      RouteRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link virtualhosts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VIRTUALHOSTS: Link<
      ApiProxyEndPoints<DeSerializersT>,
      DeSerializersT,
      VirtualHostsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApiProxyEndPoints<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fkApiName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_API_NAME: fieldBuilder.buildEdmTypeField(
          'FK_API_NAME',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link basePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BASE_PATH: fieldBuilder.buildEdmTypeField(
          'base_path',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkDefaultfaultruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_DEFAULTFAULTRULE_ID: fieldBuilder.buildEdmTypeField(
          'FK_DEFAULTFAULTRULE_ID',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link fkPostclientflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_POSTCLIENTFLOW_ID: fieldBuilder.buildEdmTypeField(
          'FK_POSTCLIENTFLOW_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkPostflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_POSTFLOW_ID: fieldBuilder.buildEdmTypeField(
          'FK_POSTFLOW_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkPreflowId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_PREFLOW_ID: fieldBuilder.buildEdmTypeField(
          'FK_PREFLOW_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link publishUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISH_URL: fieldBuilder.buildEdmTypeField(
          'publishUrl',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiProxyEndPoints)
      };
    }

    return this._schema;
  }
}
