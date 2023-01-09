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
import type { EndPointPropertiesApi } from './EndPointPropertiesApi';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';
/**
 * This class represents the entity "EndPointProperties" of service "apiportal".
 */
export declare class EndPointProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EndPointPropertiesType<T>
{
  readonly _entityApi: EndPointPropertiesApi<T>;
  /**
   * Technical entity name for EndPointProperties.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the EndPointProperties entity
   */
  static _keys: string[];
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 512.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Proxyendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Targetendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Value.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxyEndPoints} entity.
   */
  proxyEndPoint?: ApiProxyEndPoints<T> | null;
  /**
   * One-to-one navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoint?: ApiTargetEndPoints<T> | null;
  constructor(_entityApi: EndPointPropertiesApi<T>);
}
export interface EndPointPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  value?: DeserializedType<T, 'Edm.String'> | null;
  proxyEndPoint?: ApiProxyEndPointsType<T> | null;
  targetEndPoint?: ApiTargetEndPointsType<T> | null;
}
//# sourceMappingURL=EndPointProperties.d.ts.map
