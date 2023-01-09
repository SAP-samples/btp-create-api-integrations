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
import { History, HistoryField } from './History';
import type { TemplatePolicysApi } from './TemplatePolicysApi';
import {
  PolicyTemplateContainers,
  PolicyTemplateContainersType
} from './PolicyTemplateContainers';

/**
 * This class represents the entity "TemplatePolicys" of service "apiportal".
 */
export class TemplatePolicys<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TemplatePolicysType<T>
{
  /**
   * Technical entity name for TemplatePolicys.
   */
  static _entityName = 'TemplatePolicys';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the TemplatePolicys entity
   */
  static _keys = ['id'];
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fk Template Name.
   * Maximum length: 255.
   * @nullable
   */
  fkTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Policy Content.
   * @nullable
   */
  policyContent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 40.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PolicyTemplateContainers} entity.
   */
  policyTemplateContainer?: PolicyTemplateContainers<T> | null;

  constructor(readonly _entityApi: TemplatePolicysApi<T>) {
    super(_entityApi);
  }
}

export interface TemplatePolicysType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  lifeCycle?: History<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  policyContent?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  policyTemplateContainer?: PolicyTemplateContainersType<T> | null;
}
