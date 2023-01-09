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
import type { GenericKeyMapEntriesApi } from './GenericKeyMapEntriesApi';
import {
  GenericKeyMapEntryValues,
  GenericKeyMapEntryValuesType
} from './GenericKeyMapEntryValues';
/**
 * This class represents the entity "GenericKeyMapEntries" of service "apiportal".
 */
export declare class GenericKeyMapEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GenericKeyMapEntriesType<T>
{
  readonly _entityApi: GenericKeyMapEntriesApi<T>;
  /**
   * Technical entity name for GenericKeyMapEntries.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the GenericKeyMapEntries entity
   */
  static _keys: string[];
  /**
   * Is Encrypted.
   * @nullable
   */
  isEncrypted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Scope.
   * Maximum length: 60.
   */
  scope: DeserializedType<T, 'Edm.String'>;
  /**
   * Scope Id.
   * Maximum length: 255.
   */
  scopeId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link GenericKeyMapEntryValues} entity.
   */
  genericKeyMapEntryValues: GenericKeyMapEntryValues<T>[];
  constructor(_entityApi: GenericKeyMapEntriesApi<T>);
}
export interface GenericKeyMapEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  isEncrypted?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  scope: DeserializedType<T, 'Edm.String'>;
  scopeId: DeserializedType<T, 'Edm.String'>;
  genericKeyMapEntryValues: GenericKeyMapEntryValuesType<T>[];
}
//# sourceMappingURL=GenericKeyMapEntries.d.ts.map
