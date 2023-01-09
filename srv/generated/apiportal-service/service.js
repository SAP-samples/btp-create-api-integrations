"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiportalService = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DevelopersApi_1 = require("./DevelopersApi");
const EndPointPropertiesApi_1 = require("./EndPointPropertiesApi");
const ApiProviderAdditionalPropertysApi_1 = require("./ApiProviderAdditionalPropertysApi");
const KeyMapEntriesApi_1 = require("./KeyMapEntriesApi");
const FileResourcesApi_1 = require("./FileResourcesApi");
const ApplicationAdditionalPropertysApi_1 = require("./ApplicationAdditionalPropertysApi");
const FlowRulesApi_1 = require("./FlowRulesApi");
const DocumentationsApi_1 = require("./DocumentationsApi");
const ResourcesApi_1 = require("./ResourcesApi");
const GenericKeyMapEntryValuesApi_1 = require("./GenericKeyMapEntryValuesApi");
const RouteRulesApi_1 = require("./RouteRulesApi");
const TemplatePolicysApi_1 = require("./TemplatePolicysApi");
const ApiProxyEndPointsApi_1 = require("./ApiProxyEndPointsApi");
const ApiProvidersApi_1 = require("./ApiProvidersApi");
const ApiProxiesApi_1 = require("./ApiProxiesApi");
const StepsApi_1 = require("./StepsApi");
const PoliciesApi_1 = require("./PoliciesApi");
const RatePlansApi_1 = require("./RatePlansApi");
const ApiportalCloneMappingsApi_1 = require("./ApiportalCloneMappingsApi");
const ApplicationsApi_1 = require("./ApplicationsApi");
const ApiTargetEndPointsApi_1 = require("./ApiTargetEndPointsApi");
const VirtualHostsApi_1 = require("./VirtualHostsApi");
const AclProductLinkagesApi_1 = require("./AclProductLinkagesApi");
const TemplateFileResourcesApi_1 = require("./TemplateFileResourcesApi");
const DefaultFaultRulesApi_1 = require("./DefaultFaultRulesApi");
const CacheResourcesApi_1 = require("./CacheResourcesApi");
const CertificatesApi_1 = require("./CertificatesApi");
const GenericKeyMapEntriesApi_1 = require("./GenericKeyMapEntriesApi");
const ApiProductAdditionalPropertiesApi_1 = require("./ApiProductAdditionalPropertiesApi");
const ContentPackageMappersApi_1 = require("./ContentPackageMappersApi");
const ApiProductsApi_1 = require("./ApiProductsApi");
const PolicyTemplateContainersApi_1 = require("./PolicyTemplateContainersApi");
const FaultRulesApi_1 = require("./FaultRulesApi");
const KeyMapEntryValuesApi_1 = require("./KeyMapEntryValuesApi");
const BillsApi_1 = require("./BillsApi");
const ApiResourcesApi_1 = require("./ApiResourcesApi");
const ConditionalFlowRulesApi_1 = require("./ConditionalFlowRulesApi");
const CertificateStoresApi_1 = require("./CertificateStoresApi");
const DestinationAndUrlMappingsApi_1 = require("./DestinationAndUrlMappingsApi");
const StreamsApi_1 = require("./StreamsApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function apiportalService(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new ApiportalService((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.apiportalService = apiportalService;
class ApiportalService {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, ctor) {
        if (!this.apis[key]) {
            this.apis[key] = new ctor(this.deSerializers);
        }
        return this.apis[key];
    }
    get developersApi() {
        const api = this.initApi('developersApi', DevelopersApi_1.DevelopersApi);
        const linkedApis = [this.initApi('applicationsApi', ApplicationsApi_1.ApplicationsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get endPointPropertiesApi() {
        const api = this.initApi('endPointPropertiesApi', EndPointPropertiesApi_1.EndPointPropertiesApi);
        const linkedApis = [
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProviderAdditionalPropertysApi() {
        return this.initApi('apiProviderAdditionalPropertysApi', ApiProviderAdditionalPropertysApi_1.ApiProviderAdditionalPropertysApi);
    }
    get keyMapEntriesApi() {
        const api = this.initApi('keyMapEntriesApi', KeyMapEntriesApi_1.KeyMapEntriesApi);
        const linkedApis = [
            this.initApi('keyMapEntryValuesApi', KeyMapEntryValuesApi_1.KeyMapEntryValuesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get fileResourcesApi() {
        const api = this.initApi('fileResourcesApi', FileResourcesApi_1.FileResourcesApi);
        const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get applicationAdditionalPropertysApi() {
        return this.initApi('applicationAdditionalPropertysApi', ApplicationAdditionalPropertysApi_1.ApplicationAdditionalPropertysApi);
    }
    get flowRulesApi() {
        const api = this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi);
        const linkedApis = [
            this.initApi('streamsApi', StreamsApi_1.StreamsApi),
            this.initApi('streamsApi', StreamsApi_1.StreamsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get documentationsApi() {
        const api = this.initApi('documentationsApi', DocumentationsApi_1.DocumentationsApi);
        const linkedApis = [this.initApi('apiResourcesApi', ApiResourcesApi_1.ApiResourcesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get resourcesApi() {
        return this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi);
    }
    get genericKeyMapEntryValuesApi() {
        const api = this.initApi('genericKeyMapEntryValuesApi', GenericKeyMapEntryValuesApi_1.GenericKeyMapEntryValuesApi);
        const linkedApis = [
            this.initApi('genericKeyMapEntriesApi', GenericKeyMapEntriesApi_1.GenericKeyMapEntriesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get routeRulesApi() {
        const api = this.initApi('routeRulesApi', RouteRulesApi_1.RouteRulesApi);
        const linkedApis = [
            this.initApi('faultRulesApi', FaultRulesApi_1.FaultRulesApi),
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get templatePolicysApi() {
        const api = this.initApi('templatePolicysApi', TemplatePolicysApi_1.TemplatePolicysApi);
        const linkedApis = [
            this.initApi('policyTemplateContainersApi', PolicyTemplateContainersApi_1.PolicyTemplateContainersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProxyEndPointsApi() {
        const api = this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi);
        const linkedApis = [
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('apiResourcesApi', ApiResourcesApi_1.ApiResourcesApi),
            this.initApi('conditionalFlowRulesApi', ConditionalFlowRulesApi_1.ConditionalFlowRulesApi),
            this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi_1.DefaultFaultRulesApi),
            this.initApi('faultRulesApi', FaultRulesApi_1.FaultRulesApi),
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('endPointPropertiesApi', EndPointPropertiesApi_1.EndPointPropertiesApi),
            this.initApi('routeRulesApi', RouteRulesApi_1.RouteRulesApi),
            this.initApi('virtualHostsApi', VirtualHostsApi_1.VirtualHostsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProvidersApi() {
        const api = this.initApi('apiProvidersApi', ApiProvidersApi_1.ApiProvidersApi);
        const linkedApis = [
            this.initApi('apiProviderAdditionalPropertysApi', ApiProviderAdditionalPropertysApi_1.ApiProviderAdditionalPropertysApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('keyMapEntriesApi', KeyMapEntriesApi_1.KeyMapEntriesApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProxiesApi() {
        const api = this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi);
        const linkedApis = [
            this.initApi('apiProductsApi', ApiProductsApi_1.ApiProductsApi),
            this.initApi('apiProvidersApi', ApiProvidersApi_1.ApiProvidersApi),
            this.initApi('contentPackageMappersApi', ContentPackageMappersApi_1.ContentPackageMappersApi),
            this.initApi('fileResourcesApi', FileResourcesApi_1.FileResourcesApi),
            this.initApi('policiesApi', PoliciesApi_1.PoliciesApi),
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get stepsApi() {
        const api = this.initApi('stepsApi', StepsApi_1.StepsApi);
        const linkedApis = [
            this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi_1.DefaultFaultRulesApi),
            this.initApi('faultRulesApi', FaultRulesApi_1.FaultRulesApi),
            this.initApi('streamsApi', StreamsApi_1.StreamsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get policiesApi() {
        const api = this.initApi('policiesApi', PoliciesApi_1.PoliciesApi);
        const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get ratePlansApi() {
        const api = this.initApi('ratePlansApi', RatePlansApi_1.RatePlansApi);
        const linkedApis = [
            this.initApi('apiProductsApi', ApiProductsApi_1.ApiProductsApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiportalCloneMappingsApi() {
        return this.initApi('apiportalCloneMappingsApi', ApiportalCloneMappingsApi_1.ApiportalCloneMappingsApi);
    }
    get applicationsApi() {
        const api = this.initApi('applicationsApi', ApplicationsApi_1.ApplicationsApi);
        const linkedApis = [
            this.initApi('apiProductsApi', ApiProductsApi_1.ApiProductsApi),
            this.initApi('applicationAdditionalPropertysApi', ApplicationAdditionalPropertysApi_1.ApplicationAdditionalPropertysApi),
            this.initApi('developersApi', DevelopersApi_1.DevelopersApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiTargetEndPointsApi() {
        const api = this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi);
        const linkedApis = [
            this.initApi('apiProvidersApi', ApiProvidersApi_1.ApiProvidersApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('conditionalFlowRulesApi', ConditionalFlowRulesApi_1.ConditionalFlowRulesApi),
            this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi_1.DefaultFaultRulesApi),
            this.initApi('faultRulesApi', FaultRulesApi_1.FaultRulesApi),
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('endPointPropertiesApi', EndPointPropertiesApi_1.EndPointPropertiesApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get virtualHostsApi() {
        return this.initApi('virtualHostsApi', VirtualHostsApi_1.VirtualHostsApi);
    }
    get aclProductLinkagesApi() {
        return this.initApi('aclProductLinkagesApi', AclProductLinkagesApi_1.AclProductLinkagesApi);
    }
    get templateFileResourcesApi() {
        const api = this.initApi('templateFileResourcesApi', TemplateFileResourcesApi_1.TemplateFileResourcesApi);
        const linkedApis = [
            this.initApi('policyTemplateContainersApi', PolicyTemplateContainersApi_1.PolicyTemplateContainersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get defaultFaultRulesApi() {
        const api = this.initApi('defaultFaultRulesApi', DefaultFaultRulesApi_1.DefaultFaultRulesApi);
        const linkedApis = [
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('stepsApi', StepsApi_1.StepsApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get cacheResourcesApi() {
        return this.initApi('cacheResourcesApi', CacheResourcesApi_1.CacheResourcesApi);
    }
    get certificatesApi() {
        const api = this.initApi('certificatesApi', CertificatesApi_1.CertificatesApi);
        const linkedApis = [
            this.initApi('certificateStoresApi', CertificateStoresApi_1.CertificateStoresApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get genericKeyMapEntriesApi() {
        const api = this.initApi('genericKeyMapEntriesApi', GenericKeyMapEntriesApi_1.GenericKeyMapEntriesApi);
        const linkedApis = [
            this.initApi('genericKeyMapEntryValuesApi', GenericKeyMapEntryValuesApi_1.GenericKeyMapEntryValuesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProductAdditionalPropertiesApi() {
        return this.initApi('apiProductAdditionalPropertiesApi', ApiProductAdditionalPropertiesApi_1.ApiProductAdditionalPropertiesApi);
    }
    get contentPackageMappersApi() {
        const api = this.initApi('contentPackageMappersApi', ContentPackageMappersApi_1.ContentPackageMappersApi);
        const linkedApis = [this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get apiProductsApi() {
        const api = this.initApi('apiProductsApi', ApiProductsApi_1.ApiProductsApi);
        const linkedApis = [
            this.initApi('apiProductAdditionalPropertiesApi', ApiProductAdditionalPropertiesApi_1.ApiProductAdditionalPropertiesApi),
            this.initApi('apiProxiesApi', ApiProxiesApi_1.ApiProxiesApi),
            this.initApi('apiResourcesApi', ApiResourcesApi_1.ApiResourcesApi),
            this.initApi('applicationsApi', ApplicationsApi_1.ApplicationsApi),
            this.initApi('ratePlansApi', RatePlansApi_1.RatePlansApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get policyTemplateContainersApi() {
        const api = this.initApi('policyTemplateContainersApi', PolicyTemplateContainersApi_1.PolicyTemplateContainersApi);
        const linkedApis = [
            this.initApi('templateFileResourcesApi', TemplateFileResourcesApi_1.TemplateFileResourcesApi),
            this.initApi('templatePolicysApi', TemplatePolicysApi_1.TemplatePolicysApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get faultRulesApi() {
        const api = this.initApi('faultRulesApi', FaultRulesApi_1.FaultRulesApi);
        const linkedApis = [
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('routeRulesApi', RouteRulesApi_1.RouteRulesApi),
            this.initApi('stepsApi', StepsApi_1.StepsApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get keyMapEntryValuesApi() {
        const api = this.initApi('keyMapEntryValuesApi', KeyMapEntryValuesApi_1.KeyMapEntryValuesApi);
        const linkedApis = [this.initApi('keyMapEntriesApi', KeyMapEntriesApi_1.KeyMapEntriesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get billsApi() {
        return this.initApi('billsApi', BillsApi_1.BillsApi);
    }
    get apiResourcesApi() {
        const api = this.initApi('apiResourcesApi', ApiResourcesApi_1.ApiResourcesApi);
        const linkedApis = [
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('documentationsApi', DocumentationsApi_1.DocumentationsApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get conditionalFlowRulesApi() {
        const api = this.initApi('conditionalFlowRulesApi', ConditionalFlowRulesApi_1.ConditionalFlowRulesApi);
        const linkedApis = [
            this.initApi('apiResourcesApi', ApiResourcesApi_1.ApiResourcesApi),
            this.initApi('apiProxyEndPointsApi', ApiProxyEndPointsApi_1.ApiProxyEndPointsApi),
            this.initApi('streamsApi', StreamsApi_1.StreamsApi),
            this.initApi('streamsApi', StreamsApi_1.StreamsApi),
            this.initApi('apiTargetEndPointsApi', ApiTargetEndPointsApi_1.ApiTargetEndPointsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get certificateStoresApi() {
        const api = this.initApi('certificateStoresApi', CertificateStoresApi_1.CertificateStoresApi);
        const linkedApis = [this.initApi('certificatesApi', CertificatesApi_1.CertificatesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get destinationAndUrlMappingsApi() {
        return this.initApi('destinationAndUrlMappingsApi', DestinationAndUrlMappingsApi_1.DestinationAndUrlMappingsApi);
    }
    get streamsApi() {
        const api = this.initApi('streamsApi', StreamsApi_1.StreamsApi);
        const linkedApis = [
            this.initApi('flowRulesApi', FlowRulesApi_1.FlowRulesApi),
            this.initApi('stepsApi', StepsApi_1.StepsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map