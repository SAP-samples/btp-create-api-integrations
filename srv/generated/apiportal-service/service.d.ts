/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DevelopersApi } from './DevelopersApi';
import { EndPointPropertiesApi } from './EndPointPropertiesApi';
import { ApiProviderAdditionalPropertysApi } from './ApiProviderAdditionalPropertysApi';
import { KeyMapEntriesApi } from './KeyMapEntriesApi';
import { FileResourcesApi } from './FileResourcesApi';
import { ApplicationAdditionalPropertysApi } from './ApplicationAdditionalPropertysApi';
import { FlowRulesApi } from './FlowRulesApi';
import { DocumentationsApi } from './DocumentationsApi';
import { ResourcesApi } from './ResourcesApi';
import { GenericKeyMapEntryValuesApi } from './GenericKeyMapEntryValuesApi';
import { RouteRulesApi } from './RouteRulesApi';
import { TemplatePolicysApi } from './TemplatePolicysApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { ApiProvidersApi } from './ApiProvidersApi';
import { ApiProxiesApi } from './ApiProxiesApi';
import { StepsApi } from './StepsApi';
import { PoliciesApi } from './PoliciesApi';
import { RatePlansApi } from './RatePlansApi';
import { ApiportalCloneMappingsApi } from './ApiportalCloneMappingsApi';
import { ApplicationsApi } from './ApplicationsApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
import { VirtualHostsApi } from './VirtualHostsApi';
import { AclProductLinkagesApi } from './AclProductLinkagesApi';
import { TemplateFileResourcesApi } from './TemplateFileResourcesApi';
import { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { CacheResourcesApi } from './CacheResourcesApi';
import { CertificatesApi } from './CertificatesApi';
import { GenericKeyMapEntriesApi } from './GenericKeyMapEntriesApi';
import { ApiProductAdditionalPropertiesApi } from './ApiProductAdditionalPropertiesApi';
import { ContentPackageMappersApi } from './ContentPackageMappersApi';
import { ApiProductsApi } from './ApiProductsApi';
import { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
import { FaultRulesApi } from './FaultRulesApi';
import { KeyMapEntryValuesApi } from './KeyMapEntryValuesApi';
import { BillsApi } from './BillsApi';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ConditionalFlowRulesApi } from './ConditionalFlowRulesApi';
import { CertificateStoresApi } from './CertificateStoresApi';
import { DestinationAndUrlMappingsApi } from './DestinationAndUrlMappingsApi';
import { StreamsApi } from './StreamsApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function apiportalService<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers?: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  >
): ApiportalService<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
>;
declare class ApiportalService<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get developersApi(): DevelopersApi<DeSerializersT>;
  get endPointPropertiesApi(): EndPointPropertiesApi<DeSerializersT>;
  get apiProviderAdditionalPropertysApi(): ApiProviderAdditionalPropertysApi<DeSerializersT>;
  get keyMapEntriesApi(): KeyMapEntriesApi<DeSerializersT>;
  get fileResourcesApi(): FileResourcesApi<DeSerializersT>;
  get applicationAdditionalPropertysApi(): ApplicationAdditionalPropertysApi<DeSerializersT>;
  get flowRulesApi(): FlowRulesApi<DeSerializersT>;
  get documentationsApi(): DocumentationsApi<DeSerializersT>;
  get resourcesApi(): ResourcesApi<DeSerializersT>;
  get genericKeyMapEntryValuesApi(): GenericKeyMapEntryValuesApi<DeSerializersT>;
  get routeRulesApi(): RouteRulesApi<DeSerializersT>;
  get templatePolicysApi(): TemplatePolicysApi<DeSerializersT>;
  get apiProxyEndPointsApi(): ApiProxyEndPointsApi<DeSerializersT>;
  get apiProvidersApi(): ApiProvidersApi<DeSerializersT>;
  get apiProxiesApi(): ApiProxiesApi<DeSerializersT>;
  get stepsApi(): StepsApi<DeSerializersT>;
  get policiesApi(): PoliciesApi<DeSerializersT>;
  get ratePlansApi(): RatePlansApi<DeSerializersT>;
  get apiportalCloneMappingsApi(): ApiportalCloneMappingsApi<DeSerializersT>;
  get applicationsApi(): ApplicationsApi<DeSerializersT>;
  get apiTargetEndPointsApi(): ApiTargetEndPointsApi<DeSerializersT>;
  get virtualHostsApi(): VirtualHostsApi<DeSerializersT>;
  get aclProductLinkagesApi(): AclProductLinkagesApi<DeSerializersT>;
  get templateFileResourcesApi(): TemplateFileResourcesApi<DeSerializersT>;
  get defaultFaultRulesApi(): DefaultFaultRulesApi<DeSerializersT>;
  get cacheResourcesApi(): CacheResourcesApi<DeSerializersT>;
  get certificatesApi(): CertificatesApi<DeSerializersT>;
  get genericKeyMapEntriesApi(): GenericKeyMapEntriesApi<DeSerializersT>;
  get apiProductAdditionalPropertiesApi(): ApiProductAdditionalPropertiesApi<DeSerializersT>;
  get contentPackageMappersApi(): ContentPackageMappersApi<DeSerializersT>;
  get apiProductsApi(): ApiProductsApi<DeSerializersT>;
  get policyTemplateContainersApi(): PolicyTemplateContainersApi<DeSerializersT>;
  get faultRulesApi(): FaultRulesApi<DeSerializersT>;
  get keyMapEntryValuesApi(): KeyMapEntryValuesApi<DeSerializersT>;
  get billsApi(): BillsApi<DeSerializersT>;
  get apiResourcesApi(): ApiResourcesApi<DeSerializersT>;
  get conditionalFlowRulesApi(): ConditionalFlowRulesApi<DeSerializersT>;
  get certificateStoresApi(): CertificateStoresApi<DeSerializersT>;
  get destinationAndUrlMappingsApi(): DestinationAndUrlMappingsApi<DeSerializersT>;
  get streamsApi(): StreamsApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
//# sourceMappingURL=service.d.ts.map
