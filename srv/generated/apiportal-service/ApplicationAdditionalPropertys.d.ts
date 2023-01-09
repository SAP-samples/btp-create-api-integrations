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
import type { ApplicationAdditionalPropertysApi } from './ApplicationAdditionalPropertysApi';
/**
 * This class represents the entity "ApplicationAdditionalPropertys" of service "apiportal".
 */
export declare class ApplicationAdditionalPropertys<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ApplicationAdditionalPropertysType<T>
{
  readonly _entityApi: ApplicationAdditionalPropertysApi<T>;
  /**
   * Technical entity name for ApplicationAdditionalPropertys.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the ApplicationAdditionalPropertys entity
   */
  static _keys: string[];
  /**
   * Entity Id.
   * Maximum length: 255.
   */
  entityId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 1024.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  constructor(_entityApi: ApplicationAdditionalPropertysApi<T>);
}
export interface ApplicationAdditionalPropertysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
}
//# sourceMappingURL=ApplicationAdditionalPropertys.d.ts.map
