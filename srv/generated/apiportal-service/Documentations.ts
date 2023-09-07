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
import type { DocumentationsApi } from './DocumentationsApi';
import { ApiResources, ApiResourcesType } from './ApiResources';

/**
 * This class represents the entity "Documentations" of service "apiportal".
 */
export class Documentations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DocumentationsType<T>
{
  /**
   * Technical entity name for Documentations.
   */
  static _entityName = 'Documentations';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Documentations entity
   */
  static _keys = ['id', 'locale'];
  /**
   * Fk Apiresource Id.
   * Maximum length: 36.
   * @nullable
   */
  fkApiresourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Api Resource Name.
   * Maximum length: 1024.
   * @nullable
   */
  apiResourceName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Locale.
   * Maximum length: 5.
   */
  locale!: DeserializedType<T, 'Edm.String'>;
  /**
   * Mime Type.
   * Maximum length: 256.
   * @nullable
   */
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiResources} entity.
   */
  apiResource?: ApiResources<T> | null;

  constructor(readonly _entityApi: DocumentationsApi<T>) {
    super(_entityApi);
  }
}

export interface DocumentationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkApiresourceId?: DeserializedType<T, 'Edm.String'> | null;
  apiResourceName?: DeserializedType<T, 'Edm.String'> | null;
  content?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  lifeCycle?: History<T> | null;
  locale: DeserializedType<T, 'Edm.String'>;
  mimeType?: DeserializedType<T, 'Edm.String'> | null;
  apiResource?: ApiResourcesType<T> | null;
}
