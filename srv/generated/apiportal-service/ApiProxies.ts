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
import type { ApiProxiesApi } from './ApiProxiesApi';
import { ApiProducts, ApiProductsType } from './ApiProducts';
import { ApiProviders, ApiProvidersType } from './ApiProviders';
import {
  ContentPackageMappers,
  ContentPackageMappersType
} from './ContentPackageMappers';
import { FileResources, FileResourcesType } from './FileResources';
import { Policies, PoliciesType } from './Policies';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import { Resources, ResourcesType } from './Resources';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';

/**
 * This class represents the entity "APIProxies" of service "apiportal".
 */
export class ApiProxies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiProxiesType<T>
{
  /**
   * Technical entity name for ApiProxies.
   */
  static _entityName = 'APIProxies';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiProxies entity
   */
  static _keys = ['name'];
  /**
   * Fk Providername.
   * Maximum length: 200.
   * @nullable
   */
  fkProvidername?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Api Version Group.
   * Maximum length: 255.
   * @nullable
   */
  apiVersionGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cf Binding Id.
   * Maximum length: 36.
   * @nullable
   */
  cfBindingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Has Changes.
   * @nullable
   */
  hasChanges?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Copy.
   * @nullable
   */
  isCopy?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Published.
   * @nullable
   */
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Unmanaged.
   * @nullable
   */
  isUnmanaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Versioned.
   * @nullable
   */
  isVersioned?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Provider Name.
   * Maximum length: 200.
   * @nullable
   */
  providerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Metadata.
   * Maximum length: 2048.
   * @nullable
   */
  releaseMetadata?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Release Status.
   * Maximum length: 15.
   * @nullable
   */
  releaseStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Service Code.
   * Maximum length: 20.
   * @nullable
   */
  serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * Maximum length: 10.
   * @nullable
   */
  state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Status Code.
   * Maximum length: 20.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * Maximum length: 10.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Template Names.
   * @nullable
   */
  policyTemplateNames?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * Maximum length: 255.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 16000.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProducts} entity.
   */
  apiProducts!: ApiProducts<T>[];
  /**
   * One-to-one navigation property to the {@link ApiProviders} entity.
   */
  apiProvider?: ApiProviders<T> | null;
  /**
   * One-to-one navigation property to the {@link ContentPackageMappers} entity.
   */
  contentPackage?: ContentPackageMappers<T> | null;
  /**
   * One-to-many navigation property to the {@link FileResources} entity.
   */
  fileResources!: FileResources<T>[];
  /**
   * One-to-many navigation property to the {@link Policies} entity.
   */
  policies!: Policies<T>[];
  /**
   * One-to-many navigation property to the {@link ApiProxyEndPoints} entity.
   */
  proxyEndPoints!: ApiProxyEndPoints<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];
  /**
   * One-to-one navigation property to the {@link ApiProxies} entity.
   */
  successorApi?: ApiProxies<T> | null;
  /**
   * One-to-many navigation property to the {@link ApiProxies} entity.
   */
  successorApiReferences!: ApiProxies<T>[];
  /**
   * One-to-many navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetApiProxies!: ApiTargetEndPoints<T>[];
  /**
   * One-to-many navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoints!: ApiTargetEndPoints<T>[];

  constructor(readonly _entityApi: ApiProxiesApi<T>) {
    super(_entityApi);
  }
}

export interface ApiProxiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkProvidername?: DeserializedType<T, 'Edm.String'> | null;
  apiVersionGroup?: DeserializedType<T, 'Edm.String'> | null;
  cfBindingId?: DeserializedType<T, 'Edm.String'> | null;
  hasChanges?: DeserializedType<T, 'Edm.Boolean'> | null;
  isCopy?: DeserializedType<T, 'Edm.Boolean'> | null;
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  isUnmanaged?: DeserializedType<T, 'Edm.Boolean'> | null;
  isVersioned?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  providerName?: DeserializedType<T, 'Edm.String'> | null;
  releaseMetadata?: DeserializedType<T, 'Edm.String'> | null;
  releaseStatus?: DeserializedType<T, 'Edm.String'> | null;
  serviceCode?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  policyTemplateNames?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  apiProducts: ApiProductsType<T>[];
  apiProvider?: ApiProvidersType<T> | null;
  contentPackage?: ContentPackageMappersType<T> | null;
  fileResources: FileResourcesType<T>[];
  policies: PoliciesType<T>[];
  proxyEndPoints: ApiProxyEndPointsType<T>[];
  resources: ResourcesType<T>[];
  successorApi?: ApiProxiesType<T> | null;
  successorApiReferences: ApiProxiesType<T>[];
  targetApiProxies: ApiTargetEndPointsType<T>[];
  targetEndPoints: ApiTargetEndPointsType<T>[];
}
