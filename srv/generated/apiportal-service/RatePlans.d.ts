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
import type { RatePlansApi } from './RatePlansApi';
import { ApiProducts, ApiProductsType } from './ApiProducts';
import { Resources, ResourcesType } from './Resources';
/**
 * This class represents the entity "RatePlans" of service "apiportal".
 */
export declare class RatePlans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RatePlansType<T>
{
  readonly _entityApi: RatePlansApi<T>;
  /**
   * Technical entity name for RatePlans.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the RatePlans entity
   */
  static _keys: string[];
  /**
   * Currency.
   * Maximum length: 50.
   */
  currency: DeserializedType<T, 'Edm.String'>;
  /**
   * Frequency.
   * Maximum length: 255.
   */
  frequency: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Active.
   */
  isActive: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Published.
   */
  isPublished: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Is Seasonal.
   * @nullable
   */
  isSeasonal?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Rate.
   * @nullable
   */
  rate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 255.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
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
   * Description.
   * Maximum length: 16000.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProducts} entity.
   */
  apiProducts: ApiProducts<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources: Resources<T>[];
  constructor(_entityApi: RatePlansApi<T>);
}
export interface RatePlansType<T extends DeSerializers = DefaultDeSerializers> {
  currency: DeserializedType<T, 'Edm.String'>;
  frequency: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  isActive: DeserializedType<T, 'Edm.Boolean'>;
  isPublished: DeserializedType<T, 'Edm.Boolean'>;
  isSeasonal?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  rate?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  validFrom?: DeserializedType<T, 'Edm.DateTime'> | null;
  validTo?: DeserializedType<T, 'Edm.DateTime'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  apiProducts: ApiProductsType<T>[];
  resources: ResourcesType<T>[];
}
//# sourceMappingURL=RatePlans.d.ts.map
