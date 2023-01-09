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
import { SslInfo, SslInfoField } from './SslInfo';
import type { ApiProvidersApi } from './ApiProvidersApi';
import {
  ApiProviderAdditionalPropertys,
  ApiProviderAdditionalPropertysType
} from './ApiProviderAdditionalPropertys';
import { ApiProxies, ApiProxiesType } from './ApiProxies';
import { KeyMapEntries, KeyMapEntriesType } from './KeyMapEntries';
import { Resources, ResourcesType } from './Resources';
import {
  ApiTargetEndPoints,
  ApiTargetEndPointsType
} from './ApiTargetEndPoints';

/**
 * This class represents the entity "APIProviders" of service "apiportal".
 */
export class ApiProviders<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApiProvidersType<T>
{
  /**
   * Technical entity name for ApiProviders.
   */
  static _entityName = 'APIProviders';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/apiportal/api/1.0/Management.svc';
  /**
   * All key fields of the ApiProviders entity
   */
  static _keys = ['name'];
  /**
   * Dest Type.
   * Maximum length: 30.
   * @nullable
   */
  destType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is On Premise.
   * @nullable
   */
  isOnPremise?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 200.
   */
  name!: DeserializedType<T, 'Edm.String'>;
  /**
   * Region.
   * Maximum length: 100.
   * @nullable
   */
  region?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rt Auth.
   * Maximum length: 255.
   * @nullable
   */
  rtAuth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Ssl Info.
   * @nullable
   */
  sslInfo?: SslInfo<T> | null;
  /**
   * Url.
   * @nullable
   */
  url?: DeserializedType<T, 'Edm.String'> | null;
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
   * Host.
   * Maximum length: 2048.
   * @nullable
   */
  host?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Port.
   * @nullable
   */
  port?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Use Ssl.
   * @nullable
   */
  useSsl?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Trust All.
   * @nullable
   */
  trustAll?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * User Name.
   * Maximum length: 2048.
   * @nullable
   */
  userName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Password.
   * Maximum length: 126.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Client Secret.
   * @nullable
   */
  clientSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Client Id.
   * @nullable
   */
  clientId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Token Url.
   * @nullable
   */
  tokenUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auth Type.
   * Maximum length: 126.
   * @nullable
   */
  authType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Path Prefix.
   * Maximum length: 2048.
   * @nullable
   */
  pathPrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timeout.
   * @nullable
   */
  timeout?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cockpit Url.
   * @nullable
   */
  cockpitUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cloud Connector Location.
   * Maximum length: 2048.
   * @nullable
   */
  cloudConnectorLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Org Secret.
   * @nullable
   */
  orgSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Secret.
   * @nullable
   */
  userSecret?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keystore Password.
   * @nullable
   */
  keystorePassword?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keystore Location.
   * @nullable
   */
  keystoreLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ApiProviderAdditionalPropertys} entity.
   */
  additionalProperties!: ApiProviderAdditionalPropertys<T>[];
  /**
   * One-to-many navigation property to the {@link ApiProxies} entity.
   */
  apiProxies!: ApiProxies<T>[];
  /**
   * One-to-many navigation property to the {@link KeyMapEntries} entity.
   */
  envKvMs!: KeyMapEntries<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  resources!: Resources<T>[];
  /**
   * One-to-many navigation property to the {@link ApiTargetEndPoints} entity.
   */
  targetEndPoints!: ApiTargetEndPoints<T>[];

  constructor(readonly _entityApi: ApiProvidersApi<T>) {
    super(_entityApi);
  }
}

export interface ApiProvidersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  destType?: DeserializedType<T, 'Edm.String'> | null;
  isOnPremise?: DeserializedType<T, 'Edm.Boolean'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  region?: DeserializedType<T, 'Edm.String'> | null;
  rtAuth?: DeserializedType<T, 'Edm.String'> | null;
  sslInfo?: SslInfo<T> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  host?: DeserializedType<T, 'Edm.String'> | null;
  port?: DeserializedType<T, 'Edm.Int32'> | null;
  useSsl?: DeserializedType<T, 'Edm.Boolean'> | null;
  trustAll?: DeserializedType<T, 'Edm.Boolean'> | null;
  userName?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  clientSecret?: DeserializedType<T, 'Edm.String'> | null;
  clientId?: DeserializedType<T, 'Edm.String'> | null;
  tokenUrl?: DeserializedType<T, 'Edm.String'> | null;
  authType?: DeserializedType<T, 'Edm.String'> | null;
  pathPrefix?: DeserializedType<T, 'Edm.String'> | null;
  timeout?: DeserializedType<T, 'Edm.Int32'> | null;
  cockpitUrl?: DeserializedType<T, 'Edm.String'> | null;
  cloudConnectorLocation?: DeserializedType<T, 'Edm.String'> | null;
  orgSecret?: DeserializedType<T, 'Edm.String'> | null;
  userSecret?: DeserializedType<T, 'Edm.String'> | null;
  keystorePassword?: DeserializedType<T, 'Edm.String'> | null;
  keystoreLocation?: DeserializedType<T, 'Edm.String'> | null;
  additionalProperties: ApiProviderAdditionalPropertysType<T>[];
  apiProxies: ApiProxiesType<T>[];
  envKvMs: KeyMapEntriesType<T>[];
  resources: ResourcesType<T>[];
  targetEndPoints: ApiTargetEndPointsType<T>[];
}
