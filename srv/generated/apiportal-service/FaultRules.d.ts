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
import type { FaultRulesApi } from './FaultRulesApi';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import { RouteRules, RouteRulesType } from './RouteRules';
import { Steps, StepsType } from './Steps';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';
/**
 * This class represents the entity "FaultRules" of service "apiportal".
 */
export declare class FaultRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FaultRulesType<T>
{
  readonly _entityApi: FaultRulesApi<T>;
  /**
   * Technical entity name for FaultRules.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the FaultRules entity
   */
  static _keys: string[];
  /**
   * Condition.
   * @nullable
   */
  condition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Proxyendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Routerule Id.
   * Maximum length: 36.
   * @nullable
   */
  fkRouteruleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Targetendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxyEndPoints} entity.
   */
  proxyEndPoint?: ApiProxyEndPoints<T> | null;
  /**
   * One-to-one navigation property to the {@link RouteRules} entity.
   */
  routeRule?: RouteRules<T> | null;
  /**
   * One-to-many navigation property to the {@link Steps} entity.
   */
  steps: Steps<T>[];
  /**
   * One-to-one navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoint?: ApiTargetEndPoints<T> | null;
  constructor(_entityApi: FaultRulesApi<T>);
}
export interface FaultRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  condition?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  fkRouteruleId?: DeserializedType<T, 'Edm.String'> | null;
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  proxyEndPoint?: ApiProxyEndPointsType<T> | null;
  routeRule?: RouteRulesType<T> | null;
  steps: StepsType<T>[];
  targetEndPoint?: ApiTargetEndPointsType<T> | null;
}
//# sourceMappingURL=FaultRules.d.ts.map
