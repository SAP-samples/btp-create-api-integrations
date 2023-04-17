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
import type { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import { Steps, StepsType } from './Steps';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';
/**
 * This class represents the entity "DefaultFaultRules" of service "apiportal".
 */
export declare class DefaultFaultRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DefaultFaultRulesType<T>
{
  readonly _entityApi: DefaultFaultRulesApi<T>;
  /**
   * Technical entity name for DefaultFaultRules.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the DefaultFaultRules entity
   */
  static _keys: string[];
  /**
   * Always Enforce.
   * @nullable
   */
  alwaysEnforce?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * One-to-many navigation property to the {@link Steps} entity.
   */
  steps: Steps<T>[];
  /**
   * One-to-one navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoint?: ApiTargetEndPoints<T> | null;
  constructor(_entityApi: DefaultFaultRulesApi<T>);
}
export interface DefaultFaultRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  alwaysEnforce?: DeserializedType<T, 'Edm.Boolean'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  proxyEndPoint?: ApiProxyEndPointsType<T> | null;
  steps: StepsType<T>[];
  targetEndPoint?: ApiTargetEndPointsType<T> | null;
}
//# sourceMappingURL=DefaultFaultRules.d.ts.map