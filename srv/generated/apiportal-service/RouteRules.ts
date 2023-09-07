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
import type { RouteRulesApi } from './RouteRulesApi';
import { FaultRules, FaultRulesType } from './FaultRules';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';

/**
 * This class represents the entity "RouteRules" of service "apiportal".
 */
export class RouteRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RouteRulesType<T>
{
  /**
   * Technical entity name for RouteRules.
   */
  static _entityName = 'RouteRules';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the RouteRules entity
   */
  static _keys = ['id'];
  /**
   * Conditions.
   * @nullable
   */
  conditions?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
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
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Target End Point Name.
   * Maximum length: 255.
   * @nullable
   */
  targetEndPointName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  url?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link FaultRules} entity.
   */
  faultRules!: FaultRules<T>[];
  /**
   * One-to-one navigation property to the {@link ApiProxyEndPoints} entity.
   */
  proxyEndPoint?: ApiProxyEndPoints<T> | null;

  constructor(readonly _entityApi: RouteRulesApi<T>) {
    super(_entityApi);
  }
}

export interface RouteRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  conditions?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  targetEndPointName?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  faultRules: FaultRulesType<T>[];
  proxyEndPoint?: ApiProxyEndPointsType<T> | null;
}
