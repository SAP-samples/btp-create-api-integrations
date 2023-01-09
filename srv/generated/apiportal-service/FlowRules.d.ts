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
export declare class FlowRules<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FlowRulesType<T>
{
  readonly _entityApi: FlowRulesApi<T>;
  /**
   * Technical entity name for FlowRules.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the FlowRules entity
   */
  static _keys: string[];
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
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
  constructor(_entityApi: FlowRulesApi<T>);
}
export interface FlowRulesType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.String'>;
  fkRequestId?: DeserializedType<T, 'Edm.String'> | null;
  fkResponseId?: DeserializedType<T, 'Edm.String'> | null;
  request?: StreamsType<T> | null;
  response?: StreamsType<T> | null;
}
//# sourceMappingURL=FlowRules.d.ts.map
