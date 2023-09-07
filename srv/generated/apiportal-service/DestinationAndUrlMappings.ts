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
import type { DestinationAndUrlMappingsApi } from './DestinationAndUrlMappingsApi';

/**
 * This class represents the entity "DestinationAndUrlMappings" of service "apiportal".
 */
export class DestinationAndUrlMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DestinationAndUrlMappingsType<T>
{
  /**
   * Technical entity name for DestinationAndUrlMappings.
   */
  static _entityName = 'DestinationAndUrlMappings';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the DestinationAndUrlMappings entity
   */
  static _keys = ['id'];
  /**
   * Destination.
   * Maximum length: 256.
   */
  destination!: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Url.
   * Maximum length: 2048.
   */
  url!: DeserializedType<T, 'Edm.String'>;

  constructor(readonly _entityApi: DestinationAndUrlMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface DestinationAndUrlMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  destination: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  url: DeserializedType<T, 'Edm.String'>;
}
