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
import type { ConditionalFlowRulesApi } from './ConditionalFlowRulesApi';
import { ApiResources, ApiResourcesType } from './ApiResources';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import { Streams, StreamsType } from './Streams';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';

/**
 * This class represents the entity "ConditionalFlowRules" of service "apiportal".
 */
export class ConditionalFlowRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ConditionalFlowRulesType<T>
{
  /**
   * Technical entity name for ConditionalFlowRules.
   */
  static _entityName = 'ConditionalFlowRules';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ConditionalFlowRules entity
   */
  static _keys = ['id'];
  /**
   * Fk Apiresource Id.
   * Maximum length: 36.
   * @nullable
   */
  fkApiresourceId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Maximum length: 1024.
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
   * Read Only.
   * @nullable
   */
  readOnly?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Fk Request Id.
   * Maximum length: 36.
   * @nullable
   */
  fkRequestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Response Id.
   * Maximum length: 36.
   * @nullable
   */
  fkResponseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fk Targetendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiResources} entity.
   */
  apiResource?: ApiResources<T> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxyEndPoints} entity.
   */
  proxyEndPoint?: ApiProxyEndPoints<T> | null;
  /**
   * One-to-one navigation property to the {@link Streams} entity.
   */
  request?: Streams<T> | null;
  /**
   * One-to-one navigation property to the {@link Streams} entity.
   */
  response?: Streams<T> | null;
  /**
   * One-to-one navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoint?: ApiTargetEndPoints<T> | null;

  constructor(readonly _entityApi: ConditionalFlowRulesApi<T>) {
    super(_entityApi);
  }
}

export interface ConditionalFlowRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkApiresourceId?: DeserializedType<T, 'Edm.String'> | null;
  conditions?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  readOnly?: DeserializedType<T, 'Edm.Boolean'> | null;
  fkRequestId?: DeserializedType<T, 'Edm.String'> | null;
  fkResponseId?: DeserializedType<T, 'Edm.String'> | null;
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  fkTargetendpointId?: DeserializedType<T, 'Edm.String'> | null;
  apiResource?: ApiResourcesType<T> | null;
  proxyEndPoint?: ApiProxyEndPointsType<T> | null;
  request?: StreamsType<T> | null;
  response?: StreamsType<T> | null;
  targetEndPoint?: ApiTargetEndPointsType<T> | null;
}
