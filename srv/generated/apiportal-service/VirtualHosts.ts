/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
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
import type { VirtualHostsApi } from './VirtualHostsApi';

/**
 * This class represents the entity "VirtualHosts" of service "apiportal".
 */
export class VirtualHosts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VirtualHostsType<T>
{
  /**
   * Technical entity name for VirtualHosts.
   */
  static _entityName = 'VirtualHosts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the VirtualHosts entity
   */
  static _keys = ['id'];
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
   * Is Ssl.
   * @nullable
   */
  isSsl?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Project Path.
   * Maximum length: 255.
   * @nullable
   */
  projectPath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Virtual Host.
   * Maximum length: 2048.
   * @nullable
   */
  virtualHost?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Virtual Port.
   * @nullable
   */
  virtualPort?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(readonly _entityApi: VirtualHostsApi<T>) {
    super(_entityApi);
  }
}

export interface VirtualHostsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  isDefault?: DeserializedType<T, 'Edm.Boolean'> | null;
  isSsl?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  projectPath?: DeserializedType<T, 'Edm.String'> | null;
  virtualHost?: DeserializedType<T, 'Edm.String'> | null;
  virtualPort?: DeserializedType<T, 'Edm.Int32'> | null;
}
