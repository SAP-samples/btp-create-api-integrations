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
import type { ApplicationAdditionalPropertysApi } from './ApplicationAdditionalPropertysApi';

/**
 * This class represents the entity "ApplicationAdditionalPropertys" of service "apiportal".
 */
export class ApplicationAdditionalPropertys<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicationAdditionalPropertysType<T>
{
  /**
   * Technical entity name for ApplicationAdditionalPropertys.
   */
  static _entityName = 'ApplicationAdditionalPropertys';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApplicationAdditionalPropertys entity
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

  constructor(readonly _entityApi: ApplicationAdditionalPropertysApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationAdditionalPropertysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
