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
import type { ApiProductAdditionalPropertiesApi } from './ApiProductAdditionalPropertiesApi';

/**
 * This class represents the entity "APIProductAdditionalProperties" of service "apiportal".
 */
export class ApiProductAdditionalProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApiProductAdditionalPropertiesType<T>
{
  /**
   * Technical entity name for ApiProductAdditionalProperties.
   */
  static _entityName = 'APIProductAdditionalProperties';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiProductAdditionalProperties entity
   */
  static _keys = ['entityId', 'name'];
  /**
   * Entity Id.
   * Maximum length: 255.
   */
  entityId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 1024.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: ApiProductAdditionalPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface ApiProductAdditionalPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
