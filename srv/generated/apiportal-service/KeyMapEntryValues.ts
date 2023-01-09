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
import type { KeyMapEntryValuesApi } from './KeyMapEntryValuesApi';
import { KeyMapEntries, KeyMapEntriesType } from './KeyMapEntries';

/**
 * This class represents the entity "KeyMapEntryValues" of service "apiportal".
 */
export class KeyMapEntryValues<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeyMapEntryValuesType<T>
{
  /**
   * Technical entity name for KeyMapEntryValues.
   */
  static _entityName = 'KeyMapEntryValues';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the KeyMapEntryValues entity
   */
  static _keys = ['map_name', 'name'];
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Map Name.
   * Maximum length: 255.
   */
  mapName!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 10240.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link KeyMapEntries} entity.
   */
  keyMapEntry?: KeyMapEntries<T> | null;

  constructor(readonly _entityApi: KeyMapEntryValuesApi<T>) {
    super(_entityApi);
  }
}

export interface KeyMapEntryValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifeCycle?: History<T> | null;
  mapName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  keyMapEntry?: KeyMapEntriesType<T> | null;
}
