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
import type { ApplicationsApi } from './ApplicationsApi';
import { ApiProducts, ApiProductsType } from './ApiProducts';
import {
  ApplicationAdditionalPropertys,
  ApplicationAdditionalPropertysType
} from './ApplicationAdditionalPropertys';
import { Developers, DevelopersType } from './Developers';
import { Resources, ResourcesType } from './Resources';

/**
 * This class represents the entity "Applications" of service "apiportal".
 */
export class Applications<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicationsType<T>
{
  /**
   * Technical entity name for Applications.
   */
  static _entityName = 'Applications';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Applications entity
   */
  static _keys = ['id'];
  /**
   * Callbackurl.
   * Maximum length: 255.
   * @nullable
   */
  callbackurl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Developer Id.
   * Maximum length: 256.
   * @nullable
   */
  fkDeveloperId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Status Code.
   * Maximum length: 20.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Valid To.
   * @nullable
   */
  validTo?: DeserializedType<T, 'Edm.DateTime'> | null;
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
   * App Key.
   * Maximum length: 256.
   * @nullable
   */
  appKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * App Secret.
   * Maximum length: 1000.
   * @nullable
   */
  appSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subscribed Rate Plan.
   * @nullable
   */
  subscribedRatePlan?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProducts} entity.
   */
  apiProducts!: ApiProducts<T>[];
  /**
   * One-to-many navigation property to the {@link ApplicationAdditionalPropertys} entity.
   */
  attributes!: ApplicationAdditionalPropertys<T>[];
  /**
   * One-to-one navigation property to the {@link Developers} entity.
   */
  developer?: Developers<T> | null;
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];

  constructor(readonly _entityApi: ApplicationsApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  callbackurl?: DeserializedType<T, 'Edm.String'> | null;
  fkDeveloperId?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  lifeCycle?: History<T> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTime'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  appKey?: DeserializedType<T, 'Edm.String'> | null;
  appSecret?: DeserializedType<T, 'Edm.String'> | null;
  subscribedRatePlan?: DeserializedType<T, 'Edm.String'> | null;
  apiProducts: ApiProductsType<T>[];
  attributes: ApplicationAdditionalPropertysType<T>[];
  developer?: DevelopersType<T> | null;
  resources: ResourcesType<T>[];
}
