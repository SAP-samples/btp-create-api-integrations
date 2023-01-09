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
import type { ApiportalCloneMappingsApi } from './ApiportalCloneMappingsApi';
/**
 * This class represents the entity "ApiportalCloneMappings" of service "apiportal".
 */
export declare class ApiportalCloneMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApiportalCloneMappingsType<T>
{
  readonly _entityApi: ApiportalCloneMappingsApi<T>;
  /**
   * Technical entity name for ApiportalCloneMappings.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ApiportalCloneMappings entity
   */
  static _keys: string[];
  /**
   * Apiportal Client Id.
   * Maximum length: 512.
   * @nullable
   */
  apiportalClientId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Devportal Tenant Id.
   * Maximum length: 512.
   * @nullable
   */
  devportalTenantId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * New Service Instance Id.
   * Maximum length: 512.
   * @nullable
   */
  newServiceInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Instance Id.
   * Maximum length: 512.
   * @nullable
   */
  serviceInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subaccount Id.
   * Maximum length: 512.
   */
  subaccountId: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: ApiportalCloneMappingsApi<T>);
}
export interface ApiportalCloneMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  apiportalClientId?: DeserializedType<T, 'Edm.String'> | null;
  devportalTenantId?: DeserializedType<T, 'Edm.String'> | null;
  lifeCycle?: History<T> | null;
  newServiceInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  serviceInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  subaccountId: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=ApiportalCloneMappings.d.ts.map
