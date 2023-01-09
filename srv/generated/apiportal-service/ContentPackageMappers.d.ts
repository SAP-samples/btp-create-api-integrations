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
import type { ContentPackageMappersApi } from './ContentPackageMappersApi';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
/**
 * This class represents the entity "ContentPackageMappers" of service "apiportal".
 */
export declare class ContentPackageMappers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ContentPackageMappersType<T>
{
  readonly _entityApi: ContentPackageMappersApi<T>;
  /**
   * Technical entity name for ContentPackageMappers.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ContentPackageMappers entity
   */
  static _keys: string[];
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
  targetId: DeserializedType<T, 'Edm.String'>;
  /**
   * Target Type.
   * Maximum length: 255.
   */
  targetType: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  apiProxy?: ApiProxies<T> | null;
  constructor(_entityApi: ContentPackageMappersApi<T>);
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
//# sourceMappingURL=ContentPackageMappers.d.ts.map
