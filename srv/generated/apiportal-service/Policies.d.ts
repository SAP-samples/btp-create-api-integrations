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
import { History } from './History';
import type { PoliciesApi } from './PoliciesApi';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
/**
 * This class represents the entity "Policies" of service "apiportal".
 */
export declare class Policies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PoliciesType<T>
{
  readonly _entityApi: PoliciesApi<T>;
  /**
   * Technical entity name for Policies.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the Policies entity
   */
  static _keys: string[];
  /**
   * Fk Api Name.
   * Maximum length: 255.
   * @nullable
   */
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
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
   * Policy Content.
   * @nullable
   */
  policyContent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 40.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  apiProxy?: ApiProxies<T> | null;
  constructor(_entityApi: PoliciesApi<T>);
}
export interface PoliciesType<T extends DeSerializers = DefaultDeSerializers> {
  fkApiName?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  lifeCycle?: History<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  policyContent?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  apiProxy?: ApiProxiesType<T> | null;
}
//# sourceMappingURL=Policies.d.ts.map
