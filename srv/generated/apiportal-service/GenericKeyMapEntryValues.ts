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
import type { GenericKeyMapEntryValuesApi } from './GenericKeyMapEntryValuesApi';
import {
  GenericKeyMapEntries,
  GenericKeyMapEntriesType
} from './GenericKeyMapEntries';

/**
 * This class represents the entity "GenericKeyMapEntryValues" of service "apiportal".
 */
export class GenericKeyMapEntryValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GenericKeyMapEntryValuesType<T>
{
  /**
   * Technical entity name for GenericKeyMapEntryValues.
   */
  static _entityName = 'GenericKeyMapEntryValues';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the GenericKeyMapEntryValues entity
   */
  static _keys = ['mapName', 'name', 'scope', 'scopeId'];
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
   * Scope.
   * Maximum length: 60.
   */
  scope!: DeserializedType<T, 'Edm.String'>;
  /**
   * Scope Id.
   * Maximum length: 255.
   */
  scopeId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 10240.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link GenericKeyMapEntries} entity.
   */
  genericKeyMapEntry?: GenericKeyMapEntries<T> | null;

  constructor(readonly _entityApi: GenericKeyMapEntryValuesApi<T>) {
    super(_entityApi);
  }
}

export interface GenericKeyMapEntryValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifeCycle?: History<T> | null;
  mapName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  scope: DeserializedType<T, 'Edm.String'>;
  scopeId: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  genericKeyMapEntry?: GenericKeyMapEntriesType<T> | null;
}
