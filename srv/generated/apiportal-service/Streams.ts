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
import type { StreamsApi } from './StreamsApi';
import { FlowRules, FlowRulesType } from './FlowRules';
import { Steps, StepsType } from './Steps';

/**
 * This class represents the entity "Streams" of service "apiportal".
 */
export class Streams<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StreamsType<T>
{
  /**
   * Technical entity name for Streams.
   */
  static _entityName = 'Streams';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Streams entity
   */
  static _keys = ['id'];
  /**
   * Fk Flow Id.
   * Maximum length: 36.
   * @nullable
   */
  fkFlowId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Request.
   * @nullable
   */
  isRequest?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link FlowRules} entity.
   */
  flow?: FlowRules<T> | null;
  /**
   * One-to-many navigation property to the {@link Steps} entity.
   */
  steps!: Steps<T>[];

  constructor(readonly _entityApi: StreamsApi<T>) {
    super(_entityApi);
  }
}

export interface StreamsType<T extends DeSerializers = DefaultDeSerializers> {
  fkFlowId?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  isRequest?: DeserializedType<T, 'Edm.Boolean'> | null;
  flow?: FlowRulesType<T> | null;
  steps: StepsType<T>[];
}
