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
import type { ApiProviderAdditionalPropertysApi } from './ApiProviderAdditionalPropertysApi';
/**
 * This class represents the entity "APIProviderAdditionalPropertys" of service "apiportal".
 */
export declare class ApiProviderAdditionalPropertys<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApiProviderAdditionalPropertysType<T>
{
  readonly _entityApi: ApiProviderAdditionalPropertysApi<T>;
  /**
   * Technical entity name for ApiProviderAdditionalPropertys.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ApiProviderAdditionalPropertys entity
   */
  static _keys: string[];
  /**
   * Entity Id.
   * Maximum length: 255.
   */
  entityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 1024.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: ApiProviderAdditionalPropertysApi<T>);
}
export interface ApiProviderAdditionalPropertysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=ApiProviderAdditionalPropertys.d.ts.map
