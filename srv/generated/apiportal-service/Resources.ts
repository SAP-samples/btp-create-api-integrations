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
import type { ResourcesApi } from './ResourcesApi';

/**
 * This class represents the entity "Resources" of service "apiportal".
 */
export class Resources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ResourcesType<T>
{
  /**
   * Technical entity name for Resources.
   */
  static _entityName = 'Resources';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Resources entity
   */
  static _keys = ['locale', 'object_id', 'type'];
  /**
   * Locale.
   * Maximum length: 5.
   */
  locale!: DeserializedType<T, 'Edm.String'>;
  /**
   * Long Text.
   * Maximum length: 16000.
   * @nullable
   */
  longText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Medium Text.
   * Maximum length: 255.
   * @nullable
   */
  mediumText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Id.
   * Maximum length: 255.
   */
  objectId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Text.
   * Maximum length: 255.
   * @nullable
   */
  shortText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 2.
   */
  type!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: ResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ResourcesType<T extends DeSerializers = DefaultDeSerializers> {
  locale: DeserializedType<T, 'Edm.String'>;
  longText?: DeserializedType<T, 'Edm.String'> | null;
  mediumText?: DeserializedType<T, 'Edm.String'> | null;
  objectId: DeserializedType<T, 'Edm.String'>;
  shortText?: DeserializedType<T, 'Edm.String'> | null;
  type: DeserializedType<T, 'Edm.String'>;
}
