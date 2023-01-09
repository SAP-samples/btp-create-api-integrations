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
import type { DevelopersApi } from './DevelopersApi';
import { Applications, ApplicationsType } from './Applications';
/**
 * This class represents the entity "Developers" of service "apiportal".
 */
export declare class Developers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DevelopersType<T>
{
  readonly _entityApi: DevelopersApi<T>;
  /**
   * Technical entity name for Developers.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the Developers entity
   */
  static _keys: string[];
  /**
   * Country.
   * @nullable
   */
  country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Id.
   * Maximum length: 255.
   */
  emailId: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * Maximum length: 255.
   */
  firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   * Maximum length: 256.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Name.
   * Maximum length: 255.
   */
  lastName: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * One-to-many navigation property to the {@link Applications} entity.
   */
  applications: Applications<T>[];
  constructor(_entityApi: DevelopersApi<T>);
}
export interface DevelopersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  country?: DeserializedType<T, 'Edm.String'> | null;
  emailId: DeserializedType<T, 'Edm.String'>;
  firstName: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  lastName: DeserializedType<T, 'Edm.String'>;
  lifeCycle?: History<T> | null;
  applications: ApplicationsType<T>[];
}
//# sourceMappingURL=Developers.d.ts.map
