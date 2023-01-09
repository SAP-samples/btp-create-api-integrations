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
import type { CertificateStoresApi } from './CertificateStoresApi';
import { Certificates, CertificatesType } from './Certificates';

/**
 * This class represents the entity "CertificateStores" of service "apiportal".
 */
export class CertificateStores<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CertificateStoresType<T>
{
  /**
   * Technical entity name for CertificateStores.
   */
  static _entityName = 'CertificateStores';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the CertificateStores entity
   */
  static _keys = ['name'];
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 200.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Type.
   * Maximum length: 20.
   * @nullable
   */
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Certificates} entity.
   */
  certificates!: Certificates<T>[];

  constructor(readonly _entityApi: CertificateStoresApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  certificates: CertificatesType<T>[];
}
