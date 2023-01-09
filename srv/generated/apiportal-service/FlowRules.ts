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
import type { FlowRulesApi } from './FlowRulesApi';
import { Streams, StreamsType } from './Streams';

/**
 * This class represents the entity "FlowRules" of service "apiportal".
 */
export class FlowRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FlowRulesType<T>
{
  /**
   * Technical entity name for FlowRules.
   */
  static _entityName = 'FlowRules';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the FlowRules entity
   */
  static _keys = ['id'];
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link Streams} entity.
   */
  request?: Streams<T> | null;
  /**
   * One-to-one navigation property to the {@link Streams} entity.
   */
  response?: Streams<T> | null;

  constructor(readonly _entityApi: FlowRulesApi<T>) {
    super(_entityApi);
  }
}

export interface FlowRulesType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.String'>;
  fkRequestId?: DeserializedType<T, 'Edm.String'> | null;
  fkResponseId?: DeserializedType<T, 'Edm.String'> | null;
  request?: StreamsType<T> | null;
  response?: StreamsType<T> | null;
}
