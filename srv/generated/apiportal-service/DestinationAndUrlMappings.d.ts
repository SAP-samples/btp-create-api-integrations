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
import type { DestinationAndUrlMappingsApi } from './DestinationAndUrlMappingsApi';
/**
 * This class represents the entity "DestinationAndUrlMappings" of service "apiportal".
 */
export declare class DestinationAndUrlMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DestinationAndUrlMappingsType<T>
{
  readonly _entityApi: DestinationAndUrlMappingsApi<T>;
  /**
   * Technical entity name for DestinationAndUrlMappings.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the DestinationAndUrlMappings entity
   */
  static _keys: string[];
  /**
   * Destination.
   * Maximum length: 256.
   */
  destination: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Url.
   * Maximum length: 2048.
   */
  url: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: DestinationAndUrlMappingsApi<T>);
}
export interface DestinationAndUrlMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  destination: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  url: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=DestinationAndUrlMappings.d.ts.map
