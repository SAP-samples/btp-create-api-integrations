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
import type { BillsApi } from './BillsApi';

/**
 * This class represents the entity "Bills" of service "apiportal".
 */
export class Bills<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BillsType<T>
{
  /**
   * Technical entity name for Bills.
   */
  static _entityName = 'Bills';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Bills entity
   */
  static _keys = ['entityId', 'entityType', 'fromDate', 'toDate'];
  /**
   * Bill Details.
   * @nullable
   */
  billDetails?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Generated At.
   * @nullable
   */
  billGeneratedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Bill Generated By.
   * Maximum length: 255.
   * @nullable
   */
  billGeneratedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bill Id.
   * Maximum length: 64.
   * @nullable
   */
  billId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 32.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 2048.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Id.
   * Maximum length: 255.
   * @nullable
   */
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Id.
   * Maximum length: 256.
   */
  entityId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Name.
   * Maximum length: 256.
   * @nullable
   */
  entityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Type.
   * Maximum length: 32.
   */
  entityType!: DeserializedType<T, 'Edm.String'>;
  /**
   * First Name.
   * Maximum length: 255.
   * @nullable
   */
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * From Date.
   */
  fromDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Isoffboarded.
   * @nullable
   */
  isoffboarded?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Last Name.
   * Maximum length: 255.
   * @nullable
   */
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Offboarded Date.
   * @nullable
   */
  offboardedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Status.
   * Maximum length: 64.
   * @nullable
   */
  status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Date.
   */
  toDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Total.
   * @nullable
   */
  total?: DeserializedType<T, 'Edm.Double'> | null;

  constructor(readonly _entityApi: BillsApi<T>) {
    super(_entityApi);
  }
}

export interface BillsType<T extends DeSerializers = DefaultDeSerializers> {
  billDetails?: DeserializedType<T, 'Edm.String'> | null;
  billGeneratedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  billGeneratedBy?: DeserializedType<T, 'Edm.String'> | null;
  billId?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  emailId?: DeserializedType<T, 'Edm.String'> | null;
  entityId: DeserializedType<T, 'Edm.String'>;
  entityName?: DeserializedType<T, 'Edm.String'> | null;
  entityType: DeserializedType<T, 'Edm.String'>;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  fromDate: DeserializedType<T, 'Edm.DateTime'>;
  isoffboarded?: DeserializedType<T, 'Edm.Boolean'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  offboardedDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  status?: DeserializedType<T, 'Edm.String'> | null;
  toDate: DeserializedType<T, 'Edm.DateTime'>;
  total?: DeserializedType<T, 'Edm.Double'> | null;
}
