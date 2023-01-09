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
import type { CertificateStoresApi } from './CertificateStoresApi';
import { Certificates, CertificatesType } from './Certificates';
/**
 * This class represents the entity "CertificateStores" of service "apiportal".
 */
export declare class CertificateStores<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificateStoresType<T>
{
  readonly _entityApi: CertificateStoresApi<T>;
  /**
   * Technical entity name for CertificateStores.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the CertificateStores entity
   */
  static _keys: string[];
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 200.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Type.
   * Maximum length: 20.
   * @nullable
   */
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Certificates} entity.
   */
  certificates: Certificates<T>[];
  constructor(_entityApi: CertificateStoresApi<T>);
}
export interface CertificateStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  certificates: CertificatesType<T>[];
}
//# sourceMappingURL=CertificateStores.d.ts.map
