/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiTargetEndPoints } from './ApiTargetEndPoints';
import { ApiTargetEndPointsRequestBuilder } from './ApiTargetEndPointsRequestBuilder';
import { ApiProvidersApi } from './ApiProvidersApi';
import { ApiProxiesApi } from './ApiProxiesApi';
import { ConditionalFlowRulesApi } from './ConditionalFlowRulesApi';
import { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { FaultRulesApi } from './FaultRulesApi';
import { FlowRulesApi } from './FlowRulesApi';
import { EndPointPropertiesApi } from './EndPointPropertiesApi';
import { History, HistoryField } from './History';
import {
  LoadBalancerConfigurations,
  LoadBalancerConfigurationsField
} from './LoadBalancerConfigurations';
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
export class ApiTargetEndPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
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
  ): ApiTargetEndPointsApi<DeSerializersT> {
    return new ApiTargetEndPointsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link additionalApiProviders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_API_PROVIDERS: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProvidersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link conditionalFlows} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONDITIONAL_FLOWS: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ConditionalFlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_FLOW: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link preFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRE_FLOW: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      EndPointPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetApiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_API_PROXY: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProvidersApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>,
      ConditionalFlowRulesApi<DeSerializersT>,
      DefaultFaultRulesApi<DeSerializersT>,
      FaultRulesApi<DeSerializersT>,
      FlowRulesApi<DeSerializersT>,
      FlowRulesApi<DeSerializersT>,
      EndPointPropertiesApi<DeSerializersT>,
      ApiProxiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ADDITIONAL_API_PROVIDERS: new Link(
        'additionalApiProviders',
        this,
        linkedApis[0]
      ),
      API_PROXY: new OneToOneLink('apiProxy', this, linkedApis[1]),
      CONDITIONAL_FLOWS: new Link('conditionalFlows', this, linkedApis[2]),
      DEFAULT_FAULT_RULE: new OneToOneLink(
        'defaultFaultRule',
        this,
        linkedApis[3]
      ),
      FAULT_RULES: new Link('faultRules', this, linkedApis[4]),
      POST_FLOW: new OneToOneLink('postFlow', this, linkedApis[5]),
      PRE_FLOW: new OneToOneLink('preFlow', this, linkedApis[6]),
      PROPERTIES: new Link('properties', this, linkedApis[7]),
      TARGET_API_PROXY: new OneToOneLink('targetAPIProxy', this, linkedApis[8])
    };
    return this;
  }

  entityConstructor = ApiTargetEndPoints;

  requestBuilder(): ApiTargetEndPointsRequestBuilder<DeSerializersT> {
    return new ApiTargetEndPointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiTargetEndPoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApiTargetEndPoints<DeSerializersT>,
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
    typeof ApiTargetEndPoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApiTargetEndPoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_API_NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_DEFAULTFAULTRULE_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    LOAD_BALANCER_CONFIGURATIONS: LoadBalancerConfigurationsField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_POSTFLOW_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PREFLOW_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVIDER_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIVE_PATH: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGET_API_PROXY: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_API_PROXY_NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ApiTargetEndPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link additionalApiProviders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADDITIONAL_API_PROVIDERS: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProvidersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link conditionalFlows} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONDITIONAL_FLOWS: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ConditionalFlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link postFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POST_FLOW: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link preFlow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRE_FLOW: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link properties} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROPERTIES: Link<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      EndPointPropertiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetApiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_API_PROXY: OneToOneLink<
      ApiTargetEndPoints<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApiTargetEndPoints<DeSerializers>>;
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
         * Static representation of the {@link loadBalancerConfigurations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOAD_BALANCER_CONFIGURATIONS: fieldBuilder.buildComplexTypeField(
          'loadBalancerConfigurations',
          LoadBalancerConfigurationsField,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
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
         * Static representation of the {@link providerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROVIDER_ID: fieldBuilder.buildEdmTypeField(
          'provider_id',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relativePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELATIVE_PATH: fieldBuilder.buildEdmTypeField(
          'relativePath',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkTargetApiProxy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_TARGET_API_PROXY: fieldBuilder.buildEdmTypeField(
          'FK_TARGET_API_PROXY',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetApiProxyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_API_PROXY_NAME: fieldBuilder.buildEdmTypeField(
          'targetAPIProxyName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiTargetEndPoints)
      };
    }

    return this._schema;
  }
}
