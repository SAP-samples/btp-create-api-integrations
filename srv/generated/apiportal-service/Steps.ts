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
import type { StepsApi } from './StepsApi';
import { DefaultFaultRules, DefaultFaultRulesType } from './DefaultFaultRules';
import { FaultRules, FaultRulesType } from './FaultRules';
import { Streams, StreamsType } from './Streams';

/**
 * This class represents the entity "Steps" of service "apiportal".
 */
export class Steps<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StepsType<T>
{
  /**
   * Technical entity name for Steps.
   */
  static _entityName = 'Steps';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the Steps entity
   */
  static _keys = ['id'];
  /**
   * Condition.
   * @nullable
   */
  condition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Defaultfaultrule Id.
   * Maximum length: 36.
   * @nullable
   */
  fkDefaultfaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Faultrule Id.
   * Maximum length: 36.
   * @nullable
   */
  fkFaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Policy Name.
   * Maximum length: 255.
   * @nullable
   */
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Fk Stream Id.
   * Maximum length: 36.
   * @nullable
   */
  fkStreamId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DefaultFaultRules} entity.
   */
  defaultFaultRule?: DefaultFaultRules<T> | null;
  /**
   * One-to-one navigation property to the {@link FaultRules} entity.
   */
  faultRule?: FaultRules<T> | null;
  /**
   * One-to-one navigation property to the {@link Streams} entity.
   */
  stream?: Streams<T> | null;

  constructor(readonly _entityApi: StepsApi<T>) {
    super(_entityApi);
  }
}

export interface StepsType<T extends DeSerializers = DefaultDeSerializers> {
  condition?: DeserializedType<T, 'Edm.String'> | null;
  fkDefaultfaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  fkFaultruleId?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  policyName?: DeserializedType<T, 'Edm.String'> | null;
  sequence?: DeserializedType<T, 'Edm.Int32'> | null;
  fkStreamId?: DeserializedType<T, 'Edm.String'> | null;
  defaultFaultRule?: DefaultFaultRulesType<T> | null;
  faultRule?: FaultRulesType<T> | null;
  stream?: StreamsType<T> | null;
}
