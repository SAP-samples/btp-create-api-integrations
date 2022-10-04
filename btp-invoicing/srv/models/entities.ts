export namespace InvoicingServiceTypes {
    export enum ActionCreateStripeInvoicesUnofficial {
        name = "createStripeInvoicesUnofficial",
        paramMonth = "month",
        paramYear = "year"
    }

    export interface IActionCreateStripeInvoicesUnofficialParams {
        month: string;
        year: string;
    }

    export type ActionCreateStripeInvoicesUnofficialReturn = string;

    export enum ActionCreateStripeInvoices {
        name = "createStripeInvoices",
        paramMonth = "month",
        paramYear = "year"
    }

    export interface IActionCreateStripeInvoicesParams {
        month: string;
        year: string;
    }

    export type ActionCreateStripeInvoicesReturn = string;

    export enum Entity {
    }

    export enum SanitizedEntity {
    }
}

export namespace apiportal {
    export interface IHistory {
        changed_at: Date;
        changed_by: string;
        created_at: Date;
        created_by: string;
    }

    export interface ISSLInfo {
        ciphers: string;
        clientAuthEnabled: boolean;
        enabled: boolean;
        ignoreValidationErrors: boolean;
        keyAlias: string;
        keyStore: string;
        protocols: string;
        trustStore: string;
    }

    export interface IExpirySettings {
        expiry_date: Date;
        expiry_settings_override_disabled: boolean;
        time_out: number;
        time_out_day: string;
    }

    export interface IKeyMapEntries {
        name: string;
        encrypted: boolean;
        life_cycle: IHistory;
        keyMapEntryValues?: IKeyMapEntryValues[];
    }

    export interface IVirtualHosts {
        id: string;
        isDefault: boolean;
        isSSL: boolean;
        life_cycle: IHistory;
        name: string;
        projectPath: string;
        virtual_host: string;
        virtual_port: number;
    }

    export interface IFlowRules {
        id: string;
        FK_REQUEST_ID: string;
        FK_RESPONSE_ID: string;
        request?: IStreams;
        response?: IStreams;
    }

    export interface ITemplateFileResources {
        id: string;
        content: string;
        name: string;
        FK_TEMPLATE_NAME: string;
        scope: string;
        type: string;
        policyTemplateContainer?: IPolicyTemplateContainers;
    }

    export interface IACLProductLinkages {
        ruleId: string;
        devportalRuleId: string;
        entityId: string;
        entityType: string;
        isPublished: boolean;
        operation: string;
        permissionSet: string;
    }

    export interface IAPIProxyEndPoints {
        id: string;
        FK_API_NAME: string;
        base_path: string;
        FK_DEFAULTFAULTRULE_ID: string;
        isDefault: boolean;
        life_cycle: IHistory;
        name: string;
        FK_POSTCLIENTFLOW_ID: string;
        FK_POSTFLOW_ID: string;
        FK_PREFLOW_ID: string;
        publishUrl: string;
        apiProxy?: IAPIProxies;
        apiResources?: IAPIResources[];
        conditionalFlows?: IConditionalFlowRules[];
        defaultFaultRule?: IDefaultFaultRules;
        faultRules?: IFaultRules[];
        postClientFlow?: IFlowRules;
        postFlow?: IFlowRules;
        preFlow?: IFlowRules;
        properties?: IEndPointProperties[];
        routeRules?: IRouteRules[];
        virtualhosts?: IVirtualHosts[];
    }

    export interface ICertificateStores {
        name: string;
        life_cycle: IHistory;
        storeType: string;
        certificates?: ICertificates[];
    }

    export interface ITemplatePolicys {
        id: string;
        life_cycle: IHistory;
        name: string;
        FK_TEMPLATE_NAME: string;
        policy_content: string;
        type: string;
        policyTemplateContainer?: IPolicyTemplateContainers;
    }

    export interface IAPIProxies {
        name: string;
        FK_PROVIDERNAME: string;
        cfBindingId: string;
        isCopy: boolean;
        isPublished: boolean;
        life_cycle: IHistory;
        provider_name: string;
        service_code: string;
        state: string;
        status_code: string;
        version: string;
        title: string;
        description: string;
        apiProducts?: IAPIProducts[];
        apiProvider?: IAPIProviders;
        contentPackage?: IContentPackageMappers;
        fileResources?: IFileResources[];
        policies?: IPolicies[];
        proxyEndPoints?: IAPIProxyEndPoints[];
        resources?: IResources[];
        targetAPIProxies?: IAPITargetEndPoints[];
        targetEndPoints?: IAPITargetEndPoints[];
    }

    export interface IEndPointProperties {
        id: string;
        name: string;
        FK_PROXYENDPOINT_ID: string;
        FK_TARGETENDPOINT_ID: string;
        value: string;
        proxyEndPoint?: IAPIProxyEndPoints;
        targetEndPoint?: IAPITargetEndPoints;
    }

    export interface IApplications {
        id: string;
        callbackurl: string;
        FK_DEVELOPER_ID: string;
        life_cycle: IHistory;
        status_code: string;
        valid_from: Date;
        valid_to: Date;
        version: string;
        title: string;
        description: string;
        app_key: string;
        app_secret: string;
        subscribedRatePlan: string;
        apiProducts?: IAPIProducts[];
        developer?: IDevelopers;
        resources?: IResources[];
    }

    export interface ISteps {
        id: string;
        condition: string;
        FK_DEFAULTFAULTRULE_ID: string;
        FK_FAULTRULE_ID: string;
        policy_name: string;
        sequence: number;
        FK_STREAM_ID: string;
        defaultFaultRule?: IDefaultFaultRules;
        faultRule?: IFaultRules;
        stream?: IStreams;
    }

    export interface IAPIProviders {
        name: string;
        isOnPremise: boolean;
        life_cycle: IHistory;
        rt_auth: string;
        sslInfo: ISSLInfo;
        url: string;
        title: string;
        description: string;
        destType: string;
        host: string;
        port: number;
        useSSL: boolean;
        trustAll: boolean;
        userName: string;
        password: string;
        authType: string;
        pathPrefix: string;
        timeout: number;
        cockpit_url: string;
        cloudConnectorLocation: string;
        apiProxies?: IAPIProxies[];
        resources?: IResources[];
    }

    export interface IDestinationAndUrlMappings {
        id: string;
        destination: string;
        url: string;
    }

    export interface IResources {
        locale: string;
        object_id: string;
        type: string;
        long_text: string;
        medium_text: string;
        short_text: string;
    }

    export interface IContentPackageMappers {
        targetId: string;
        targetType: string;
        content: string;
        life_cycle: IHistory;
        srcArtifactName: string;
        srcArtifactType: string;
        srcPackageID: string;
        srcRepo: string;
        apiProxy?: IAPIProxies;
    }

    export interface IConditionalFlowRules {
        id: string;
        conditions: string;
        name: string;
        readOnly: boolean;
        FK_REQUEST_ID: string;
        FK_RESPONSE_ID: string;
        sequence: number;
        apiResource?: IAPIResources;
        proxyEndPoint?: IAPIProxyEndPoints;
        request?: IStreams;
        response?: IStreams;
        targetEndPoint?: IAPITargetEndPoints;
    }

    export interface IDefaultFaultRules {
        id: string;
        alwaysEnforce: boolean;
        name: string;
        FK_PROXYENDPOINT_ID: string;
        FK_TARGETENDPOINT_ID: string;
        proxyEndPoint?: IAPIProxyEndPoints;
        steps?: ISteps[];
        targetEndPoint?: IAPITargetEndPoints;
    }

    export interface IAPIResources {
        id: string;
        FK_PROXYENDPOINT_ID: string;
        canShowDelete: boolean;
        canShowGet: boolean;
        canShowHead: boolean;
        canShowOption: boolean;
        canShowPatch: boolean;
        canShowPost: boolean;
        canShowPut: boolean;
        isDeleteChecked: boolean;
        isGetChecked: boolean;
        isHeadChecked: boolean;
        isOptionChecked: boolean;
        isPatchChecked: boolean;
        isPostChecked: boolean;
        isPutChecked: boolean;
        life_cycle: IHistory;
        name: string;
        proxyEndPointName: string;
        resource_path: string;
        title: string;
        description: string;
        apiProxyEndPoint?: IAPIProxyEndPoints;
        documentations?: IDocumentations[];
        resources?: IResources[];
    }

    export interface IAPITargetEndPoints {
        id: string;
        FK_API_NAME: string;
        FK_DEFAULTFAULTRULE_ID: string;
        isDefault: boolean;
        life_cycle: IHistory;
        name: string;
        FK_POSTFLOW_ID: string;
        FK_PREFLOW_ID: string;
        provider_id: string;
        relativePath: string;
        FK_TARGET_API_PROXY: string;
        targetAPIProxyName: string;
        url: string;
        apiProxy?: IAPIProxies;
        conditionalFlows?: IConditionalFlowRules[];
        defaultFaultRule?: IDefaultFaultRules;
        faultRules?: IFaultRules[];
        postFlow?: IFlowRules;
        preFlow?: IFlowRules;
        properties?: IEndPointProperties[];
        targetAPIProxy?: IAPIProxies;
    }

    export interface IFaultRules {
        id: string;
        condition: string;
        name: string;
        FK_PROXYENDPOINT_ID: string;
        FK_ROUTERULE_ID: string;
        FK_TARGETENDPOINT_ID: string;
        proxyEndPoint?: IAPIProxyEndPoints;
        routeRule?: IRouteRules;
        steps?: ISteps[];
        targetEndPoint?: IAPITargetEndPoints;
    }

    export interface IAPIProducts {
        name: string;
        isPublished: boolean;
        isRestricted: boolean;
        life_cycle: IHistory;
        published_at: Date;
        published_by: string;
        quotaCount: number;
        quotaInterval: number;
        quotaTimeUnit: string;
        scope: string;
        status_code: string;
        version: string;
        title: string;
        description: string;
        apiProxies?: IAPIProxies[];
        apiResources?: IAPIResources[];
        applications?: IApplications[];
        ratePlans?: IRatePlans[];
        resources?: IResources[];
    }

    export interface IDocumentations {
        id: string;
        locale: string;
        FK_APIRESOURCE_ID: string;
        apiResourceName: string;
        content: string;
        life_cycle: IHistory;
        mime_type: string;
        apiResource?: IAPIResources;
    }

    export interface ICertificates {
        name: string;
        storeName: string;
        certName: string;
        description: string;
        life_cycle: IHistory;
        password: string;
        storeType: string;
        expiryDate: string;
        issuerEmail: string;
        subjectEmail: string;
        signAlgName: string;
        isValid: string;
        validFrom: string;
        version: string;
        content: Buffer;
        certificateStore?: ICertificateStores;
    }

    export interface IRatePlans {
        id: string;
        currency: string;
        frequency: string;
        isActive: boolean;
        isPublished: boolean;
        isSeasonal: boolean;
        life_cycle: IHistory;
        name: string;
        rate: string;
        type: string;
        validFrom: Date;
        validTo: Date;
        description: string;
        apiProducts?: IAPIProducts[];
        resources?: IResources[];
    }

    export interface IPolicyTemplateContainers {
        name: string;
        description: string;
        life_cycle: IHistory;
        proxyEndPointxml: string;
        targetEndPointxml: string;
        title: string;
        version: string;
        fileResources?: ITemplateFileResources[];
        policies?: ITemplatePolicys[];
    }

    export interface IBills {
        entityId: string;
        entityType: string;
        fromDate: Date;
        toDate: Date;
        billDetails: string;
        billGeneratedAt: Date;
        billGeneratedBy: string;
        billId: string;
        currency: string;
        description: string;
        emailId: string;
        entityName: string;
        firstName: string;
        isoffboarded: boolean;
        lastName: string;
        offboardedDate: Date;
        status: string;
        total: number;
    }

    export interface IRouteRules {
        id: string;
        conditions: string;
        name: string;
        FK_PROXYENDPOINT_ID: string;
        sequence: number;
        targetEndPointName: string;
        url: string;
        faultRules?: IFaultRules[];
        proxyEndPoint?: IAPIProxyEndPoints;
    }

    export interface IKeyMapEntryValues {
        map_name: string;
        name: string;
        value: string;
        keyMapEntry?: IKeyMapEntries;
    }

    export interface IFileResources {
        id: string;
        content: string;
        name: string;
        scope: string;
        type: string;
        apiProxies?: IAPIProxies[];
    }

    export interface ICacheResources {
        name: string;
        compression_enabled: boolean;
        disk_size: number;
        expirySettings: IExpirySettings;
        in_memory_size: number;
        life_cycle: IHistory;
        max_element_disk: number;
        max_element_memory: number;
        min_compression_size: number;
        over_flow_to_disk: boolean;
        persistent_cache: boolean;
        skip_cache_element_size: number;
    }

    export interface IDevelopers {
        id: string;
        country: string;
        emailId: string;
        firstName: string;
        lastName: string;
        life_cycle: IHistory;
        applications?: IApplications[];
    }

    export interface IStreams {
        id: string;
        FK_FLOW_ID: string;
        isRequest: boolean;
        flow?: IFlowRules;
        steps?: ISteps[];
    }

    export interface IPolicies {
        id: string;
        FK_API_NAME: string;
        life_cycle: IHistory;
        name: string;
        policy_content: string;
        type: string;
        apiProxy?: IAPIProxies;
    }

    export enum Entity {
        History = "apiportal.History",
        SSLInfo = "apiportal.SSLInfo",
        ExpirySettings = "apiportal.ExpirySettings",
        KeyMapEntries = "apiportal.KeyMapEntries",
        VirtualHosts = "apiportal.VirtualHosts",
        FlowRules = "apiportal.FlowRules",
        TemplateFileResources = "apiportal.TemplateFileResources",
        ACLProductLinkages = "apiportal.ACLProductLinkages",
        APIProxyEndPoints = "apiportal.APIProxyEndPoints",
        CertificateStores = "apiportal.CertificateStores",
        TemplatePolicys = "apiportal.TemplatePolicys",
        APIProxies = "apiportal.APIProxies",
        EndPointProperties = "apiportal.EndPointProperties",
        Applications = "apiportal.Applications",
        Steps = "apiportal.Steps",
        APIProviders = "apiportal.APIProviders",
        DestinationAndUrlMappings = "apiportal.DestinationAndUrlMappings",
        Resources = "apiportal.Resources",
        ContentPackageMappers = "apiportal.ContentPackageMappers",
        ConditionalFlowRules = "apiportal.ConditionalFlowRules",
        DefaultFaultRules = "apiportal.DefaultFaultRules",
        APIResources = "apiportal.APIResources",
        APITargetEndPoints = "apiportal.APITargetEndPoints",
        FaultRules = "apiportal.FaultRules",
        APIProducts = "apiportal.APIProducts",
        Documentations = "apiportal.Documentations",
        Certificates = "apiportal.Certificates",
        RatePlans = "apiportal.RatePlans",
        PolicyTemplateContainers = "apiportal.PolicyTemplateContainers",
        Bills = "apiportal.Bills",
        RouteRules = "apiportal.RouteRules",
        KeyMapEntryValues = "apiportal.KeyMapEntryValues",
        FileResources = "apiportal.FileResources",
        CacheResources = "apiportal.CacheResources",
        Developers = "apiportal.Developers",
        Streams = "apiportal.Streams",
        Policies = "apiportal.Policies"
    }

    export enum SanitizedEntity {
        History = "History",
        SSLInfo = "SSLInfo",
        ExpirySettings = "ExpirySettings",
        KeyMapEntries = "KeyMapEntries",
        VirtualHosts = "VirtualHosts",
        FlowRules = "FlowRules",
        TemplateFileResources = "TemplateFileResources",
        ACLProductLinkages = "ACLProductLinkages",
        APIProxyEndPoints = "APIProxyEndPoints",
        CertificateStores = "CertificateStores",
        TemplatePolicys = "TemplatePolicys",
        APIProxies = "APIProxies",
        EndPointProperties = "EndPointProperties",
        Applications = "Applications",
        Steps = "Steps",
        APIProviders = "APIProviders",
        DestinationAndUrlMappings = "DestinationAndUrlMappings",
        Resources = "Resources",
        ContentPackageMappers = "ContentPackageMappers",
        ConditionalFlowRules = "ConditionalFlowRules",
        DefaultFaultRules = "DefaultFaultRules",
        APIResources = "APIResources",
        APITargetEndPoints = "APITargetEndPoints",
        FaultRules = "FaultRules",
        APIProducts = "APIProducts",
        Documentations = "Documentations",
        Certificates = "Certificates",
        RatePlans = "RatePlans",
        PolicyTemplateContainers = "PolicyTemplateContainers",
        Bills = "Bills",
        RouteRules = "RouteRules",
        KeyMapEntryValues = "KeyMapEntryValues",
        FileResources = "FileResources",
        CacheResources = "CacheResources",
        Developers = "Developers",
        Streams = "Streams",
        Policies = "Policies"
    }
}

export enum Entity {
}

export enum SanitizedEntity {
}
