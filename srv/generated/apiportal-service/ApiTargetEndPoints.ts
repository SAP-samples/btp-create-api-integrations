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
import {
  LoadBalancerConfigurations,
  LoadBalancerConfigurationsField
} from './LoadBalancerConfigurations';
import type { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
import { ApiProviders, ApiProvidersType } from './ApiProviders';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
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

/**
 * This class represents the entity "APITargetEndPoints" of service "apiportal".
 */
export class ApiTargetEndPoints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiTargetEndPointsType<T>
{
  /**
   * Technical entity name for ApiTargetEndPoints.
   */
  static _entityName = 'APITargetEndPoints';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiTargetEndPoints entity
   */
  static _keys = ['id'];
  /**
   * Fk Api Name.
   * Maximum length: 255.
   * @nullable
   */
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Load Balancer Configurations.
   * @nullable
   */
  loadBalancerConfigurations?: LoadBalancerConfigurations<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
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
   * Provider Id.
   * Maximum length: 200.
   * @nullable
   */
  providerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relative Path.
   * Maximum length: 255.
   * @nullable
   */
  relativePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Target Api Proxy.
   * Maximum length: 255.
   * @nullable
   */
  fkTargetApiProxy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target Api Proxy Name.
   * Maximum length: 255.
   * @nullable
   */
  targetApiProxyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * Maximum length: 2083.
   * @nullable
   */
  url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProviders} entity.
   */
  additionalApiProviders!: ApiProviders<T>[];
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  apiProxy?: ApiProxies<T> | null;
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
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  targetApiProxy?: ApiProxies<T> | null;

  constructor(readonly _entityApi: ApiTargetEndPointsApi<T>) {
    super(_entityApi);
  }
}

export interface ApiTargetEndPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
  fkDefaultfaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  loadBalancerConfigurations?: LoadBalancerConfigurations<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkPostflowId?: DeserializedType<T, 'Edm.String'> | null;
  fkPreflowId?: DeserializedType<T, 'Edm.String'> | null;
  providerId?: DeserializedType<T, 'Edm.String'> | null;
  relativePath?: DeserializedType<T, 'Edm.String'> | null;
  fkTargetApiProxy?: DeserializedType<T, 'Edm.String'> | null;
  targetApiProxyName?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  additionalApiProviders: ApiProvidersType<T>[];
  apiProxy?: ApiProxiesType<T> | null;
  conditionalFlows: ConditionalFlowRulesType<T>[];
  defaultFaultRule?: DefaultFaultRulesType<T> | null;
  faultRules: FaultRulesType<T>[];
  postFlow?: FlowRulesType<T> | null;
  preFlow?: FlowRulesType<T> | null;
  properties: EndPointPropertiesType<T>[];
  targetApiProxy?: ApiProxiesType<T> | null;
}
