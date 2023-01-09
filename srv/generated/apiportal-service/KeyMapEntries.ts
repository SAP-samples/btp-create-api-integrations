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
import type { KeyMapEntriesApi } from './KeyMapEntriesApi';
import { KeyMapEntryValues, KeyMapEntryValuesType } from './KeyMapEntryValues';

/**
 * This class represents the entity "KeyMapEntries" of service "apiportal".
 */
export class KeyMapEntries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KeyMapEntriesType<T>
{
  /**
   * Technical entity name for KeyMapEntries.
   */
  static _entityName = 'KeyMapEntries';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the KeyMapEntries entity
   */
  static _keys = ['name'];
  /**
   * Encrypted.
   * @nullable
   */
  encrypted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Scope.
   * Maximum length: 255.
   * @nullable
   */
  scope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link KeyMapEntryValues} entity.
   */
  keyMapEntryValues!: KeyMapEntryValues<T>[];

  constructor(readonly _entityApi: KeyMapEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface KeyMapEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  encrypted?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  keyMapEntryValues: KeyMapEntryValuesType<T>[];
}
