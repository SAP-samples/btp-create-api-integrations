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
import type { FileResourcesApi } from './FileResourcesApi';
import { ApiProxies, ApiProxiesType } from './ApiProxies';

/**
 * This class represents the entity "FileResources" of service "apiportal".
 */
export class FileResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FileResourcesType<T>
{
  /**
   * Technical entity name for FileResources.
   */
  static _entityName = 'FileResources';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the FileResources entity
   */
  static _keys = ['id'];
  /**
   * Content.
   * @nullable
   */
  content?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope.
   * Maximum length: 20.
   * @nullable
   */
  scope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 10.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProxies} entity.
   */
  apiProxies!: ApiProxies<T>[];

  constructor(readonly _entityApi: FileResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface FileResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  content?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  apiProxies: ApiProxiesType<T>[];
}
