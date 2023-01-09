/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
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
import { HistoryField } from './History';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class ApiProxyEndPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
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
  ): this;
  entityConstructor: typeof ApiProxyEndPoints;
  requestBuilder(): ApiProxyEndPointsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ApiProxyEndPoints<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<ApiProxyEndPoints<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ApiProxyEndPoints, DeSerializersT>;
  private _schema?;
  get schema(): {
    FK_API_NAME: OrderableEdmTypeField<
      ApiProxyEndPoints<
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
    BASE_PATH: OrderableEdmTypeField<
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
    FK_POSTCLIENTFLOW_ID: OrderableEdmTypeField<
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
      ApiProxyEndPoints<
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
    PUBLISH_URL: OrderableEdmTypeField<
      ApiProxyEndPoints<
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
    ALL_FIELDS: AllFields<
      ApiProxyEndPoints<
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
//# sourceMappingURL=ApiProxyEndPointsApi.d.ts.map
