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
import type { TemplateFileResourcesApi } from './TemplateFileResourcesApi';
import {
  PolicyTemplateContainers,
  PolicyTemplateContainersType
} from './PolicyTemplateContainers';
/**
 * This class represents the entity "TemplateFileResources" of service "apiportal".
 */
export declare class TemplateFileResources<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TemplateFileResourcesType<T>
{
  readonly _entityApi: TemplateFileResourcesApi<T>;
  /**
   * Technical entity name for TemplateFileResources.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the TemplateFileResources entity
   */
  static _keys: string[];
  /**
   * Content.
   * @nullable
   */
  content?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id: DeserializedType<T, 'Edm.String'>;
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
   * Scope.
   * Maximum length: 20.
   * @nullable
   */
  scope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * Maximum length: 10.
   * @nullable
   */
  type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PolicyTemplateContainers} entity.
   */
  policyTemplateContainer?: PolicyTemplateContainers<T> | null;
  constructor(_entityApi: TemplateFileResourcesApi<T>);
}
export interface TemplateFileResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  content?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  fkTemplateName?: DeserializedType<T, 'Edm.String'> | null;
  scope?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  policyTemplateContainer?: PolicyTemplateContainersType<T> | null;
}
//# sourceMappingURL=TemplateFileResources.d.ts.map
