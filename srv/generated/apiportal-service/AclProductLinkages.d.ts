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
import type { AclProductLinkagesApi } from './AclProductLinkagesApi';
/**
 * This class represents the entity "ACLProductLinkages" of service "apiportal".
 */
export declare class AclProductLinkages<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AclProductLinkagesType<T>
{
  readonly _entityApi: AclProductLinkagesApi<T>;
  /**
   * Technical entity name for AclProductLinkages.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the AclProductLinkages entity
   */
  static _keys: string[];
  /**
   * Devportal Rule Id.
   * Maximum length: 255.
   * @nullable
   */
  devportalRuleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Id.
   * Maximum length: 255.
   * @nullable
   */
  entityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entity Type.
   * Maximum length: 64.
   * @nullable
   */
  entityType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Published.
   * @nullable
   */
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Operation.
   * Maximum length: 64.
   * @nullable
   */
  operation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Permission Set.
   * Maximum length: 1024.
   * @nullable
   */
  permissionSet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rule Id.
   * Maximum length: 255.
   */
  ruleId: DeserializedType<T, 'Edm.String'>;
  constructor(_entityApi: AclProductLinkagesApi<T>);
}
export interface AclProductLinkagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  devportalRuleId?: DeserializedType<T, 'Edm.String'> | null;
  entityId?: DeserializedType<T, 'Edm.String'> | null;
  entityType?: DeserializedType<T, 'Edm.String'> | null;
  isPublished?: DeserializedType<T, 'Edm.Boolean'> | null;
  operation?: DeserializedType<T, 'Edm.String'> | null;
  permissionSet?: DeserializedType<T, 'Edm.String'> | null;
  ruleId: DeserializedType<T, 'Edm.String'>;
}
//# sourceMappingURL=AclProductLinkages.d.ts.map
