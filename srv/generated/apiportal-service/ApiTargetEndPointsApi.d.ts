/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
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
import { HistoryField } from './History';
import { LoadBalancerConfigurationsField } from './LoadBalancerConfigurations';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class ApiTargetEndPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
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
  ): this;
  entityConstructor: typeof ApiTargetEndPoints;
  requestBuilder(): ApiTargetEndPointsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ApiTargetEndPoints<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ApiTargetEndPoints<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ApiTargetEndPoints, DeSerializersT>;
  private _schema?;
  get schema(): {
    FK_API_NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_DEFAULTFAULTRULE_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DEFAULT: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      true,
      true
    >;
    LOAD_BALANCER_CONFIGURATIONS: LoadBalancerConfigurationsField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_POSTFLOW_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PREFLOW_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROVIDER_ID: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELATIVE_PATH: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGET_API_PROXY: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_API_PROXY_NAME: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      ApiTargetEndPoints<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=ApiTargetEndPointsApi.d.ts.map
