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
import { ExpirySettings, ExpirySettingsField } from './ExpirySettings';
import { History, HistoryField } from './History';
import type { CacheResourcesApi } from './CacheResourcesApi';

/**
 * This class represents the entity "CacheResources" of service "apiportal".
 */
export class CacheResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CacheResourcesType<T>
{
  /**
   * Technical entity name for CacheResources.
   */
  static _entityName = 'CacheResources';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the CacheResources entity
   */
  static _keys = ['name'];
  /**
   * Compression Enabled.
   * @nullable
   */
  compressionEnabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Disk Size.
   * @nullable
   */
  diskSize?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Expiry Settings.
   * @nullable
   */
  expirySettings?: ExpirySettings<T> | null;
  /**
   * In Memory Size.
   * @nullable
   */
  inMemorySize?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Max Element Disk.
   * @nullable
   */
  maxElementDisk?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Max Element Memory.
   * @nullable
   */
  maxElementMemory?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Min Compression Size.
   * @nullable
   */
  minCompressionSize?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Over Flow To Disk.
   * @nullable
   */
  overFlowToDisk?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Persistent Cache.
   * @nullable
   */
  persistentCache?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Skip Cache Element Size.
   * @nullable
   */
  skipCacheElementSize?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: CacheResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface CacheResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  compressionEnabled?: DeserializedType<T, 'Edm.Boolean'> | null;
  diskSize?: DeserializedType<T, 'Edm.Int32'> | null;
  expirySettings?: ExpirySettings<T> | null;
  inMemorySize?: DeserializedType<T, 'Edm.Int32'> | null;
  lifeCycle?: History<T> | null;
  maxElementDisk?: DeserializedType<T, 'Edm.Int32'> | null;
  maxElementMemory?: DeserializedType<T, 'Edm.Int32'> | null;
  minCompressionSize?: DeserializedType<T, 'Edm.Int32'> | null;
  name: DeserializedType<T, 'Edm.String'>;
  overFlowToDisk?: DeserializedType<T, 'Edm.Boolean'> | null;
  persistentCache?: DeserializedType<T, 'Edm.Boolean'> | null;
  skipCacheElementSize?: DeserializedType<T, 'Edm.Int32'> | null;
}
