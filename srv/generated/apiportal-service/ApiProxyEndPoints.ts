/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import { History, HistoryField } from './History';
import type { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
import { ApiResources, ApiResourcesType } from './ApiResources';
import {
  ConditionalFlowRules,
  ConditionalFlowRulesType
} from './ConditionalFlowRules';
import { DefaultFaultRules, DefaultFaultRulesType } from './DefaultFaultRules';
import { FaultRules, FaultRulesType } from './FaultRules';
import { FlowRules, FlowRulesType } from './FlowRules';
import {
  EndPointProperties,
  EndPointPropertiesType
} from './EndPointProperties';
import { RouteRules, RouteRulesType } from './RouteRules';
import { VirtualHosts, VirtualHostsType } from './VirtualHosts';

/**
 * This class represents the entity "APIProxyEndPoints" of service "apiportal".
 */
export class ApiProxyEndPoints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiProxyEndPointsType<T>
{
  /**
   * Technical entity name for ApiProxyEndPoints.
   */
  static _entityName = 'APIProxyEndPoints';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiProxyEndPoints entity
   */
  static _keys = ['id'];
  /**
   * Fk Api Name.
   * Maximum length: 255.
   * @nullable
   */
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Path.
   * @nullable
   */
  basePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Defaultfaultrule Id.
   * Maximum length: 36.
   * @nullable
   */
  fkDefaultfaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Default.
   * @nullable
   */
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Postclientflow Id.
   * Maximum length: 36.
   * @nullable
   */
  fkPostclientflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Postflow Id.
   * Maximum length: 36.
   * @nullable
   */
  fkPostflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Preflow Id.
   * Maximum length: 36.
   * @nullable
   */
  fkPreflowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Publish Url.
   * @nullable
   */
  publishUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  apiProxy?: ApiProxies<T> | null;
  /**
   * One-to-many navigation property to the {@link ApiResources} entity.
   */
  apiResources!: ApiResources<T>[];
  /**
   * One-to-many navigation property to the {@link ConditionalFlowRules} entity.
   */
  conditionalFlows!: ConditionalFlowRules<T>[];
  /**
   * One-to-one navigation property to the {@link DefaultFaultRules} entity.
   */
  defaultFaultRule?: DefaultFaultRules<T> | null;
  /**
   * One-to-many navigation property to the {@link FaultRules} entity.
   */
  faultRules!: FaultRules<T>[];
  /**
   * One-to-one navigation property to the {@link FlowRules} entity.
   */
  postClientFlow?: FlowRules<T> | null;
  /**
   * One-to-one navigation property to the {@link FlowRules} entity.
   */
  postFlow?: FlowRules<T> | null;
  /**
   * One-to-one navigation property to the {@link FlowRules} entity.
   */
  preFlow?: FlowRules<T> | null;
  /**
   * One-to-many navigation property to the {@link EndPointProperties} entity.
   */
  properties!: EndPointProperties<T>[];
  /**
   * One-to-many navigation property to the {@link RouteRules} entity.
   */
  routeRules!: RouteRules<T>[];
  /**
   * One-to-many navigation property to the {@link VirtualHosts} entity.
   */
  virtualhosts!: VirtualHosts<T>[];

  constructor(readonly _entityApi: ApiProxyEndPointsApi<T>) {
    super(_entityApi);
  }
}

export interface ApiProxyEndPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
  basePath?: DeserializedType<T, 'Edm.String'> | null;
  fkDefaultfaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkPostclientflowId?: DeserializedType<T, 'Edm.String'> | null;
  fkPostflowId?: DeserializedType<T, 'Edm.String'> | null;
  fkPreflowId?: DeserializedType<T, 'Edm.String'> | null;
  publishUrl?: DeserializedType<T, 'Edm.String'> | null;
  apiProxy?: ApiProxiesType<T> | null;
  apiResources: ApiResourcesType<T>[];
  conditionalFlows: ConditionalFlowRulesType<T>[];
  defaultFaultRule?: DefaultFaultRulesType<T> | null;
  faultRules: FaultRulesType<T>[];
  postClientFlow?: FlowRulesType<T> | null;
  postFlow?: FlowRulesType<T> | null;
  preFlow?: FlowRulesType<T> | null;
  properties: EndPointPropertiesType<T>[];
  routeRules: RouteRulesType<T>[];
  virtualhosts: VirtualHostsType<T>[];
}
