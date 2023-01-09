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
import { History } from './History';
import type { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
import {
  TemplateFileResources,
  TemplateFileResourcesType
} from './TemplateFileResources';
import { TemplatePolicys, TemplatePolicysType } from './TemplatePolicys';
/**
 * This class represents the entity "PolicyTemplateContainers" of service "apiportal".
 */
export declare class PolicyTemplateContainers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PolicyTemplateContainersType<T>
{
  readonly _entityApi: PolicyTemplateContainersApi<T>;
  /**
   * Technical entity name for PolicyTemplateContainers.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the PolicyTemplateContainers entity
   */
  static _keys: string[];
  /**
   * Description.
   * Maximum length: 4096.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 255.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Proxy End Pointxml.
   * @nullable
   */
  proxyEndPointxml?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Target End Pointxml.
   * @nullable
   */
  targetEndPointxml?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * Maximum length: 255.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * Maximum length: 10.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link TemplateFileResources} entity.
   */
  fileResources: TemplateFileResources<T>[];
  /**
   * One-to-many navigation property to the {@link TemplatePolicys} entity.
   */
  policies: TemplatePolicys<T>[];
  constructor(_entityApi: PolicyTemplateContainersApi<T>);
}
export interface PolicyTemplateContainersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  description?: DeserializedType<T, 'Edm.String'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  proxyEndPointxml?: DeserializedType<T, 'Edm.String'> | null;
  targetEndPointxml?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  fileResources: TemplateFileResourcesType<T>[];
  policies: TemplatePolicysType<T>[];
}
//# sourceMappingURL=PolicyTemplateContainers.d.ts.map
