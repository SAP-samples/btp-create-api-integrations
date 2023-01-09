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
import type { ApiResourcesApi } from './ApiResourcesApi';
import { ApiProxyEndPoints, ApiProxyEndPointsType } from './ApiProxyEndPoints';
import { Documentations, DocumentationsType } from './Documentations';
import { Resources, ResourcesType } from './Resources';

/**
 * This class represents the entity "APIResources" of service "apiportal".
 */
export class ApiResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiResourcesType<T>
{
  /**
   * Technical entity name for ApiResources.
   */
  static _entityName = 'APIResources';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiResources entity
   */
  static _keys = ['id'];
  /**
   * Fk Proxyendpoint Id.
   * Maximum length: 36.
   * @nullable
   */
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Can Show Delete.
   * @nullable
   */
  canShowDelete?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Get.
   * @nullable
   */
  canShowGet?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Head.
   * @nullable
   */
  canShowHead?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Option.
   * @nullable
   */
  canShowOption?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Patch.
   * @nullable
   */
  canShowPatch?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Post.
   * @nullable
   */
  canShowPost?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Can Show Put.
   * @nullable
   */
  canShowPut?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Id.
   * Maximum length: 36.
   */
  id!: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Delete Checked.
   * @nullable
   */
  isDeleteChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Get Checked.
   * @nullable
   */
  isGetChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Head Checked.
   * @nullable
   */
  isHeadChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Option Checked.
   * @nullable
   */
  isOptionChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Patch Checked.
   * @nullable
   */
  isPatchChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Post Checked.
   * @nullable
   */
  isPostChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Is Put Checked.
   * @nullable
   */
  isPutChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 1024.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proxy End Point Name.
   * @nullable
   */
  proxyEndPointName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resource Path.
   * @nullable
   */
  resourcePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Title.
   * Maximum length: 255.
   * @nullable
   */
  title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 16000.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ApiProxyEndPoints} entity.
   */
  apiProxyEndPoint?: ApiProxyEndPoints<T> | null;
  /**
   * One-to-many navigation property to the {@link Documentations} entity.
   */
  documentations!: Documentations<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];

  constructor(readonly _entityApi: ApiResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface ApiResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fkProxyendpointId?: DeserializedType<T, 'Edm.String'> | null;
  canShowDelete?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowGet?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowHead?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowOption?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowPatch?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowPost?: DeserializedType<T, 'Edm.Boolean'> | null;
  canShowPut?: DeserializedType<T, 'Edm.Boolean'> | null;
  id: DeserializedType<T, 'Edm.String'>;
  isDeleteChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isGetChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isHeadChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isOptionChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isPatchChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isPostChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  isPutChecked?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  proxyEndPointName?: DeserializedType<T, 'Edm.String'> | null;
  resourcePath?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  apiProxyEndPoint?: ApiProxyEndPointsType<T> | null;
  documentations: DocumentationsType<T>[];
  resources: ResourcesType<T>[];
}
