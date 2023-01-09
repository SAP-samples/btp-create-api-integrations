/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import {
  Developers,
  EndPointProperties,
  ApiProviderAdditionalPropertys,
  KeyMapEntries,
  FileResources,
  ApplicationAdditionalPropertys,
  FlowRules,
  Documentations,
  Resources,
  GenericKeyMapEntryValues,
  RouteRules,
  TemplatePolicys,
  ApiProxyEndPoints,
  ApiProviders,
  ApiProxies,
  Steps,
  Policies,
  RatePlans,
  ApiportalCloneMappings,
  Applications,
  ApiTargetEndPoints,
  VirtualHosts,
  AclProductLinkages,
  TemplateFileResources,
  DefaultFaultRules,
  CacheResources,
  Certificates,
  GenericKeyMapEntries,
  ApiProductAdditionalProperties,
  ContentPackageMappers,
  ApiProducts,
  PolicyTemplateContainers,
  FaultRules,
  KeyMapEntryValues,
  Bills,
  ApiResources,
  ConditionalFlowRules,
  CertificateStores,
  DestinationAndUrlMappings,
  Streams
} from './index';
/**
 * Batch builder for operations supported on the Apiportal Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export declare function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadApiportalServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export declare function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadApiportalServiceRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
/**
 * Change set constructor consists of write operations supported on the Apiportal Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export declare function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteApiportalServiceRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export declare const defaultApiportalServicePath =
  '/apiportal/api/1.0/Management.svc';
export type ReadApiportalServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<Developers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FileResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<FlowRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Documentations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<RouteRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiProviders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiProxies<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Steps<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Policies<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<RatePlans<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiportalCloneMappings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Applications<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TemplateFileResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CacheResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Certificates<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ApiProductAdditionalProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ContentPackageMappers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiProducts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<FaultRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Bills<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiResources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CertificateStores<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      DestinationAndUrlMappings<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Streams<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Developers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FileResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<FlowRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Documentations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<RouteRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiProviders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiProxies<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Steps<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Policies<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<RatePlans<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ApiportalCloneMappings<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Applications<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TemplateFileResources<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CacheResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Certificates<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ApiProductAdditionalProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ContentPackageMappers<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ApiProducts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<FaultRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Bills<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiResources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CertificateStores<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      DestinationAndUrlMappings<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Streams<DeSerializersT>, DeSerializersT>;
export type WriteApiportalServiceRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<Developers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Developers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Developers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ApiProviderAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KeyMapEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FileResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FileResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FileResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ApplicationAdditionalPropertys<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<FlowRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FlowRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FlowRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Documentations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Documentations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Documentations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      GenericKeyMapEntryValues<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<RouteRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RouteRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RouteRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiProxyEndPoints<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiProviders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiProviders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiProviders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiProxies<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiProxies<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiProxies<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Steps<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Steps<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Steps<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Policies<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Policies<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Policies<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<RatePlans<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RatePlans<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RatePlans<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiportalCloneMappings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiportalCloneMappings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiportalCloneMappings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Applications<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Applications<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Applications<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiTargetEndPoints<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<VirtualHosts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TemplateFileResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TemplateFileResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TemplateFileResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CacheResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CacheResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CacheResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Certificates<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Certificates<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Certificates<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<GenericKeyMapEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ApiProductAdditionalProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ApiProductAdditionalProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ApiProductAdditionalProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ContentPackageMappers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ContentPackageMappers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ContentPackageMappers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiProducts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiProducts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiProducts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<FaultRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FaultRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FaultRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KeyMapEntryValues<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Bills<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Bills<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Bills<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiResources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiResources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiResources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CertificateStores<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CertificateStores<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CertificateStores<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      DestinationAndUrlMappings<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      DestinationAndUrlMappings<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      DestinationAndUrlMappings<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Streams<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Streams<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Streams<DeSerializersT>, DeSerializersT>;
//# sourceMappingURL=BatchRequest.d.ts.map
