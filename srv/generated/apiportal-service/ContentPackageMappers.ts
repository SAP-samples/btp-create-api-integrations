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
import type { ContentPackageMappersApi } from './ContentPackageMappersApi';
import { ApiProxies, ApiProxiesType } from './ApiProxies';

/**
 * This class represents the entity "ContentPackageMappers" of service "apiportal".
 */
export class ContentPackageMappers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ContentPackageMappersType<T>
{
  /**
   * Technical entity name for ContentPackageMappers.
   */
  static _entityName = 'ContentPackageMappers';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ContentPackageMappers entity
   */
  static _keys = ['targetId', 'targetType'];
  /**
   * Content.
   * Maximum length: 255.
   * @nullable
   */
  content?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Src Artifact Name.
   * Maximum length: 255.
   * @nullable
   */
  srcArtifactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Src Artifact Type.
   * Maximum length: 255.
   * @nullable
   */
  srcArtifactType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Src Package Id.
   * Maximum length: 255.
   * @nullable
   */
  srcPackageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Src Repo.
   * Maximum length: 255.
   * @nullable
   */
  srcRepo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target Id.
   * Maximum length: 255.
   */
  targetId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Target Type.
   * Maximum length: 255.
   */
  targetType!: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  apiProxy?: ApiProxies<T> | null;

  constructor(readonly _entityApi: ContentPackageMappersApi<T>) {
    super(_entityApi);
  }
}

export interface ContentPackageMappersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  content?: DeserializedType<T, 'Edm.String'> | null;
  lifeCycle?: History<T> | null;
  srcArtifactName?: DeserializedType<T, 'Edm.String'> | null;
  srcArtifactType?: DeserializedType<T, 'Edm.String'> | null;
  srcPackageId?: DeserializedType<T, 'Edm.String'> | null;
  srcRepo?: DeserializedType<T, 'Edm.String'> | null;
  targetId: DeserializedType<T, 'Edm.String'>;
  targetType: DeserializedType<T, 'Edm.String'>;
  apiProxy?: ApiProxiesType<T> | null;
}
