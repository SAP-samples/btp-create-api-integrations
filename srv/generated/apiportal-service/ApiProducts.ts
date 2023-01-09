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
import { History, HistoryField } from './History';
import type { ApiProductsApi } from './ApiProductsApi';
import {
  ApiProductAdditionalProperties,
  ApiProductAdditionalPropertiesType
} from './ApiProductAdditionalProperties';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
import { ApiResources, ApiResourcesType } from './ApiResources';
import { Applications, ApplicationsType } from './Applications';
import { RatePlans, RatePlansType } from './RatePlans';
import { Resources, ResourcesType } from './Resources';

/**
 * This class represents the entity "APIProducts" of service "apiportal".
 */
export class ApiProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiProductsType<T>
{
  /**
   * Technical entity name for ApiProducts.
   */
  static _entityName = 'APIProducts';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiProducts entity
   */
  static _keys = ['name'];
  /**
   * Is Published.
   * @nullable
   */
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Restricted.
   * @nullable
   */
  isRestricted?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * Published At.
   * @nullable
   */
  publishedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Published By.
   * Maximum length: 256.
   * @nullable
   */
  publishedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quota Count.
   * @nullable
   */
  quotaCount?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quota Interval.
   * @nullable
   */
  quotaInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Quota Time Unit.
   * Maximum length: 10.
   * @nullable
   */
  quotaTimeUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scope.
   * Maximum length: 255.
   * @nullable
   */
  scope?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ApiProductAdditionalProperties} entity.
   */
  additionalProperties!: ApiProductAdditionalProperties<T>[];
  /**
   * One-to-many navigation property to the {@link ApiProxies} entity.
   */
  apiProxies!: ApiProxies<T>[];
  /**
   * One-to-many navigation property to the {@link ApiResources} entity.
   */
  apiResources!: ApiResources<T>[];
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  applications!: Applications<T>[];
  /**
   * One-to-many navigation property to the {@link RatePlans} entity.
   */
  ratePlans!: RatePlans<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];

  constructor(readonly _entityApi: ApiProductsApi<T>) {
    super(_entityApi);
  }
}

export interface ApiProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  isRestricted?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  publishedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  publishedBy?: DeserializedType<T, 'Edm.String'> | null;
  quotaCount?: DeserializedType<T, 'Edm.Int32'> | null;
  quotaInterval?: DeserializedType<T, 'Edm.Int32'> | null;
  quotaTimeUnit?: DeserializedType<T, 'Edm.String'> | null;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  additionalProperties: ApiProductAdditionalPropertiesType<T>[];
  apiProxies: ApiProxiesType<T>[];
  apiResources: ApiResourcesType<T>[];
  applications: ApplicationsType<T>[];
  ratePlans: RatePlansType<T>[];
  resources: ResourcesType<T>[];
}
