/* checksum : b50f14d7bf42efd2bf9875f1bb6d89b8 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
service apim_metadata {};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Developers {
  key id : String(256) not null;
  country : LargeString;
  emailId : String(255) not null;
  firstName : String(255) not null;
  lastName : String(255) not null;
  life_cycle : apim_metadata.History;
  @cds.ambiguous : 'missing on condition?'
  applications : Association to many apim_metadata.Applications {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.EndPointProperties {
  key id : String(36) not null;
  name : String(512);
  FK_PROXYENDPOINT_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  value : LargeString;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apim_metadata.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apim_metadata.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProviderAdditionalPropertys {
  key entityId : String(255) not null;
  key name : String(255) not null;
  value : String(1024);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.KeyMapEntries {
  key name : String(255) not null;
  encrypted : Boolean;
  life_cycle : apim_metadata.History;
  scope : String(255);
  @cds.ambiguous : 'missing on condition?'
  keyMapEntryValues : Association to many apim_metadata.KeyMapEntryValues on keyMapEntryValues.map_name = name;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.FileResources {
  key id : String(36) not null;
  content : LargeString;
  name : String(255);
  scope : String(20);
  type : String(10);
  @cds.ambiguous : 'missing on condition?'
  apiProxies : Association to many apim_metadata.APIProxies {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.ApplicationAdditionalPropertys {
  key entityId : String(255) not null;
  key name : String(255) not null;
  value : String(1024);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.FlowRules {
  key id : String(36) not null;
  FK_REQUEST_ID : String(36);
  FK_RESPONSE_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  request : Association to apim_metadata.Streams on request.id = FK_REQUEST_ID;
  @cds.ambiguous : 'missing on condition?'
  response : Association to apim_metadata.Streams on response.id = FK_RESPONSE_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Documentations {
  key id : String(36) not null;
  key locale : String(5) not null;
  FK_APIRESOURCE_ID : String(36);
  apiResourceName : String(1024);
  content : LargeString;
  life_cycle : apim_metadata.History;
  mime_type : String(256);
  @cds.ambiguous : 'missing on condition?'
  apiResource : Association to apim_metadata.APIResources on apiResource.id = FK_APIRESOURCE_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Resources {
  key locale : String(5) not null;
  key object_id : String(255) not null;
  key type : String(2) not null;
  long_text : String(16000);
  medium_text : String(255);
  short_text : String(255);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.GenericKeyMapEntryValues {
  key mapName : String(255) not null;
  key name : String(255) not null;
  key scope : String(60) not null;
  key scopeId : String(255) not null;
  life_cycle : apim_metadata.History;
  value : String(10240);
  @cds.ambiguous : 'missing on condition?'
  genericKeyMapEntry : Association to apim_metadata.GenericKeyMapEntries on genericKeyMapEntry.name = mapName and genericKeyMapEntry.scope = scope and genericKeyMapEntry.scopeId = scopeId;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.RouteRules {
  key id : String(36) not null;
  conditions : LargeString;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  sequence : Integer;
  targetEndPointName : String(255);
  url : LargeString;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apim_metadata.FaultRules on faultRules.FK_ROUTERULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apim_metadata.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.TemplatePolicys {
  key id : String(36) not null;
  life_cycle : apim_metadata.History;
  name : String(255);
  FK_TEMPLATE_NAME : String(255);
  policy_content : LargeString;
  type : String(40);
  @cds.ambiguous : 'missing on condition?'
  policyTemplateContainer : Association to apim_metadata.PolicyTemplateContainers on policyTemplateContainer.name = FK_TEMPLATE_NAME;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProxyEndPoints {
  key id : String(36) not null;
  FK_API_NAME : String(255);
  base_path : LargeString;
  FK_DEFAULTFAULTRULE_ID : String(36);
  isDefault : Boolean;
  life_cycle : apim_metadata.History;
  name : String(255);
  FK_POSTCLIENTFLOW_ID : String(36);
  FK_POSTFLOW_ID : String(36);
  FK_PREFLOW_ID : String(36);
  publishUrl : LargeString;
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apim_metadata.APIProxies on apiProxy.name = FK_API_NAME;
  @cds.ambiguous : 'missing on condition?'
  apiResources : Association to many apim_metadata.APIResources on apiResources.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  conditionalFlows : Association to many apim_metadata.ConditionalFlowRules on conditionalFlows.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apim_metadata.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apim_metadata.FaultRules on faultRules.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  postClientFlow : Association to apim_metadata.FlowRules on postClientFlow.id = FK_POSTCLIENTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  postFlow : Association to apim_metadata.FlowRules on postFlow.id = FK_POSTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  preFlow : Association to apim_metadata.FlowRules on preFlow.id = FK_PREFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  properties : Association to many apim_metadata.EndPointProperties on properties.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  routeRules : Association to many apim_metadata.RouteRules on routeRules.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  virtualhosts : Association to many apim_metadata.VirtualHosts {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProviders {
  key name : String(200) not null;
  destType : String(30);
  isOnPremise : Boolean;
  life_cycle : apim_metadata.History;
  region : String(100);
  rt_auth : String(255);
  sslInfo : apim_metadata.SSLInfo;
  url : LargeString;
  title : String(255);
  description : String(16000);
  host : String(2048);
  port : Integer;
  useSSL : Boolean;
  trustAll : Boolean;
  userName : String(2048);
  password : String(126);
  clientSecret : LargeString;
  clientId : LargeString;
  tokenUrl : LargeString;
  authType : String(126);
  pathPrefix : String(2048);
  timeout : Integer;
  cockpit_url : LargeString;
  cloudConnectorLocation : String(2048);
  orgSecret : LargeString;
  userSecret : LargeString;
  keystorePassword : LargeString;
  keystoreLocation : LargeString;
  @cds.ambiguous : 'missing on condition?'
  additionalProperties : Association to many apim_metadata.APIProviderAdditionalPropertys {  };
  @cds.ambiguous : 'missing on condition?'
  apiProxies : Association to many apim_metadata.APIProxies on apiProxies.FK_PROVIDERNAME = name;
  @cds.ambiguous : 'missing on condition?'
  envKVMs : Association to many apim_metadata.KeyMapEntries {  };
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
  @cds.ambiguous : 'missing on condition?'
  targetEndPoints : Association to many apim_metadata.APITargetEndPoints {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProxies {
  key name : String(255) not null;
  FK_PROVIDERNAME : String(200);
  apiVersionGroup : String(255);
  cfBindingId : String(36);
  hasChanges : Boolean;
  isCopy : Boolean;
  isPublished : Boolean;
  isUnmanaged : Boolean;
  isVersioned : Boolean;
  life_cycle : apim_metadata.History;
  provider_name : String(200);
  releaseMetadata : String(2048);
  releaseStatus : String(15);
  service_code : String(20);
  state : String(10);
  status_code : String(20);
  version : String(10);
  policyTemplateNames : LargeString;
  title : String(255);
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apim_metadata.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  apiProvider : Association to apim_metadata.APIProviders on apiProvider.name = FK_PROVIDERNAME;
  @cds.ambiguous : 'missing on condition?'
  contentPackage : Association to apim_metadata.ContentPackageMappers {  };
  @cds.ambiguous : 'missing on condition?'
  fileResources : Association to many apim_metadata.FileResources {  };
  @cds.ambiguous : 'missing on condition?'
  policies : Association to many apim_metadata.Policies on policies.FK_API_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoints : Association to many apim_metadata.APIProxyEndPoints on proxyEndPoints.FK_API_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
  @cds.ambiguous : 'missing on condition?'
  successorAPI : Association to apim_metadata.APIProxies {  };
  @cds.ambiguous : 'missing on condition?'
  successorAPIReferences : Association to many apim_metadata.APIProxies {  };
  @cds.ambiguous : 'missing on condition?'
  targetAPIProxies : Association to many apim_metadata.APITargetEndPoints {  };
  @cds.ambiguous : 'missing on condition?'
  targetEndPoints : Association to many apim_metadata.APITargetEndPoints on targetEndPoints.FK_API_NAME = name;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Steps {
  key id : String(36) not null;
  condition : LargeString;
  FK_DEFAULTFAULTRULE_ID : String(36);
  FK_FAULTRULE_ID : String(36);
  policy_name : String(255);
  sequence : Integer;
  FK_STREAM_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apim_metadata.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRule : Association to apim_metadata.FaultRules on faultRule.id = FK_FAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  stream : Association to apim_metadata.Streams on stream.id = FK_STREAM_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Policies {
  key id : String(36) not null;
  FK_API_NAME : String(255);
  life_cycle : apim_metadata.History;
  name : String(255);
  policy_content : LargeString;
  type : String(40);
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apim_metadata.APIProxies on apiProxy.name = FK_API_NAME;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.RatePlans {
  key id : LargeString not null;
  currency : String(50) not null;
  frequency : String(255) not null;
  isActive : Boolean not null;
  isPublished : Boolean not null;
  isSeasonal : Boolean;
  life_cycle : apim_metadata.History;
  name : String(255) not null;
  rate : LargeString;
  type : String(255);
  @odata.Type : 'Edm.DateTime'
  validFrom : DateTime;
  @odata.Type : 'Edm.DateTime'
  validTo : DateTime;
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apim_metadata.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.ApiportalCloneMappings {
  key subaccountId : String(512) not null;
  apiportalClientId : String(512);
  devportalTenantId : String(512);
  life_cycle : apim_metadata.History;
  newServiceInstanceId : String(512);
  serviceInstanceId : String(512);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Applications {
  key id : String(36) not null;
  callbackurl : String(255);
  FK_DEVELOPER_ID : String(256);
  life_cycle : apim_metadata.History;
  status_code : String(20);
  @odata.Type : 'Edm.DateTime'
  valid_from : DateTime;
  @odata.Type : 'Edm.DateTime'
  valid_to : DateTime;
  version : String(10);
  title : String(255);
  description : String(16000);
  app_key : String(256);
  app_secret : String(1000);
  subscribedRatePlan : LargeString;
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apim_metadata.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  attributes : Association to many apim_metadata.ApplicationAdditionalPropertys {  };
  @cds.ambiguous : 'missing on condition?'
  developer : Association to apim_metadata.Developers on developer.id = FK_DEVELOPER_ID;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APITargetEndPoints {
  key id : String(36) not null;
  FK_API_NAME : String(255);
  FK_DEFAULTFAULTRULE_ID : String(36);
  isDefault : Boolean;
  life_cycle : apim_metadata.History;
  loadBalancerConfigurations : apim_metadata.LoadBalancerConfigurations;
  name : String(255);
  FK_POSTFLOW_ID : String(36);
  FK_PREFLOW_ID : String(36);
  provider_id : String(200);
  relativePath : String(255);
  FK_TARGET_API_PROXY : String(255);
  targetAPIProxyName : String(255);
  url : String(2083);
  @cds.ambiguous : 'missing on condition?'
  additionalApiProviders : Association to many apim_metadata.APIProviders {  };
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apim_metadata.APIProxies on apiProxy.name = FK_API_NAME;
  @cds.ambiguous : 'missing on condition?'
  conditionalFlows : Association to many apim_metadata.ConditionalFlowRules on conditionalFlows.FK_TARGETENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apim_metadata.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apim_metadata.FaultRules on faultRules.FK_TARGETENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  postFlow : Association to apim_metadata.FlowRules on postFlow.id = FK_POSTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  preFlow : Association to apim_metadata.FlowRules on preFlow.id = FK_PREFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  properties : Association to many apim_metadata.EndPointProperties on properties.FK_TARGETENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetAPIProxy : Association to apim_metadata.APIProxies on targetAPIProxy.name = FK_TARGET_API_PROXY;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.VirtualHosts {
  key id : String(36) not null;
  isDefault : Boolean;
  isSSL : Boolean;
  life_cycle : apim_metadata.History;
  name : String(255);
  projectPath : String(255);
  virtual_host : String(2048);
  virtual_port : Integer;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.ACLProductLinkages {
  key ruleId : String(255) not null;
  devportalRuleId : String(255);
  entityId : String(255);
  entityType : String(64);
  isPublished : Boolean;
  operation : String(64);
  permissionSet : String(1024);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.TemplateFileResources {
  key id : String(36) not null;
  content : LargeString;
  name : String(255);
  FK_TEMPLATE_NAME : String(255);
  scope : String(20);
  type : String(10);
  @cds.ambiguous : 'missing on condition?'
  policyTemplateContainer : Association to apim_metadata.PolicyTemplateContainers on policyTemplateContainer.name = FK_TEMPLATE_NAME;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.DefaultFaultRules {
  key id : String(36) not null;
  alwaysEnforce : Boolean;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apim_metadata.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apim_metadata.Steps on steps.FK_DEFAULTFAULTRULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apim_metadata.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.CacheResources {
  key name : String(255) not null;
  compression_enabled : Boolean;
  disk_size : Integer;
  expirySettings : apim_metadata.ExpirySettings;
  in_memory_size : Integer;
  life_cycle : apim_metadata.History;
  max_element_disk : Integer;
  max_element_memory : Integer;
  min_compression_size : Integer;
  over_flow_to_disk : Boolean;
  persistent_cache : Boolean;
  skip_cache_element_size : Integer;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Certificates {
  key name : String(200) not null;
  key storeName : String(200) not null;
  certName : String(256);
  csKey : String(255);
  description : String(2048);
  format : String(256);
  life_cycle : apim_metadata.History;
  password : String(256);
  storeType : String(256);
  expiryDate : String(256);
  issuerEmail : String(2048);
  subjectEmail : String(2048);
  signAlgName : String(256);
  isValid : String(256);
  validFrom : String(256);
  version : String(256);
  content : LargeBinary;
  @cds.ambiguous : 'missing on condition?'
  certificateStore : Association to apim_metadata.CertificateStores on certificateStore.name = storeName;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.GenericKeyMapEntries {
  key name : String(255) not null;
  key scope : String(60) not null;
  key scopeId : String(255) not null;
  isEncrypted : Boolean;
  life_cycle : apim_metadata.History;
  @cds.ambiguous : 'missing on condition?'
  genericKeyMapEntryValues : Association to many apim_metadata.GenericKeyMapEntryValues on genericKeyMapEntryValues.mapName = name and genericKeyMapEntryValues.scope = scope and genericKeyMapEntryValues.scopeId = scopeId;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProductAdditionalProperties {
  key entityId : String(255) not null;
  key name : String(255) not null;
  value : String(1024);
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.ContentPackageMappers {
  key targetId : String(255) not null;
  key targetType : String(255) not null;
  content : String(255);
  life_cycle : apim_metadata.History;
  srcArtifactName : String(255);
  srcArtifactType : String(255);
  srcPackageID : String(255);
  srcRepo : String(255);
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apim_metadata.APIProxies {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIProducts {
  key name : String(255) not null;
  isPublished : Boolean;
  isRestricted : Boolean;
  life_cycle : apim_metadata.History;
  @odata.Type : 'Edm.DateTime'
  published_at : DateTime;
  published_by : String(256);
  quotaCount : Integer;
  quotaInterval : Integer;
  quotaTimeUnit : String(10);
  scope : String(255);
  status_code : String(20);
  version : String(10);
  title : String(255);
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  additionalProperties : Association to many apim_metadata.APIProductAdditionalProperties {  };
  @cds.ambiguous : 'missing on condition?'
  apiProxies : Association to many apim_metadata.APIProxies {  };
  @cds.ambiguous : 'missing on condition?'
  apiResources : Association to many apim_metadata.APIResources {  };
  @cds.ambiguous : 'missing on condition?'
  applications : Association to many apim_metadata.Applications {  };
  @cds.ambiguous : 'missing on condition?'
  ratePlans : Association to many apim_metadata.RatePlans {  };
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.PolicyTemplateContainers {
  key name : String(255) not null;
  description : String(4096);
  life_cycle : apim_metadata.History;
  proxyEndPointxml : LargeString;
  targetEndPointxml : LargeString;
  title : String(255);
  version : String(10);
  @cds.ambiguous : 'missing on condition?'
  fileResources : Association to many apim_metadata.TemplateFileResources on fileResources.FK_TEMPLATE_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  policies : Association to many apim_metadata.TemplatePolicys on policies.FK_TEMPLATE_NAME = name;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.FaultRules {
  key id : String(36) not null;
  condition : LargeString;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  FK_ROUTERULE_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apim_metadata.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  routeRule : Association to apim_metadata.RouteRules on routeRule.id = FK_ROUTERULE_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apim_metadata.Steps on steps.FK_FAULTRULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apim_metadata.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.KeyMapEntryValues {
  key map_name : String(255) not null;
  key name : String(255) not null;
  life_cycle : apim_metadata.History;
  value : String(10240);
  @cds.ambiguous : 'missing on condition?'
  keyMapEntry : Association to apim_metadata.KeyMapEntries on keyMapEntry.name = map_name;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Bills {
  key entityId : String(256) not null;
  key entityType : String(32) not null;
  @odata.Type : 'Edm.DateTime'
  key fromDate : DateTime not null;
  @odata.Type : 'Edm.DateTime'
  key toDate : DateTime not null;
  billDetails : LargeString;
  @odata.Type : 'Edm.DateTime'
  billGeneratedAt : DateTime;
  billGeneratedBy : String(255);
  billId : String(64);
  currency : String(32);
  description : String(2048);
  emailId : String(255);
  entityName : String(256);
  firstName : String(255);
  isoffboarded : Boolean;
  lastName : String(255);
  @odata.Type : 'Edm.DateTime'
  offboardedDate : DateTime;
  status : String(64);
  total : Double;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.APIResources {
  key id : String(36) not null;
  FK_PROXYENDPOINT_ID : String(36);
  canShowDelete : Boolean;
  canShowGet : Boolean;
  canShowHead : Boolean;
  canShowOption : Boolean;
  canShowPatch : Boolean;
  canShowPost : Boolean;
  canShowPut : Boolean;
  isDeleteChecked : Boolean;
  isGetChecked : Boolean;
  isHeadChecked : Boolean;
  isOptionChecked : Boolean;
  isPatchChecked : Boolean;
  isPostChecked : Boolean;
  isPutChecked : Boolean;
  life_cycle : apim_metadata.History;
  name : String(1024);
  proxyEndPointName : LargeString;
  resource_path : LargeString;
  title : String(255);
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProxyEndPoint : Association to apim_metadata.APIProxyEndPoints on apiProxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  documentations : Association to many apim_metadata.Documentations on documentations.FK_APIRESOURCE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apim_metadata.Resources {  };
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.ConditionalFlowRules {
  key id : String(36) not null;
  FK_APIRESOURCE_ID : String(36);
  conditions : LargeString;
  name : String(1024);
  FK_PROXYENDPOINT_ID : String(36);
  readOnly : Boolean;
  FK_REQUEST_ID : String(36);
  FK_RESPONSE_ID : String(36);
  sequence : Integer;
  FK_TARGETENDPOINT_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  apiResource : Association to apim_metadata.APIResources on apiResource.id = FK_APIRESOURCE_ID;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apim_metadata.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  request : Association to apim_metadata.Streams on request.id = FK_REQUEST_ID;
  @cds.ambiguous : 'missing on condition?'
  response : Association to apim_metadata.Streams on response.id = FK_RESPONSE_ID;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apim_metadata.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.CertificateStores {
  key name : String(200) not null;
  life_cycle : apim_metadata.History;
  storeType : String(20);
  @cds.ambiguous : 'missing on condition?'
  certificates : Association to many apim_metadata.Certificates on certificates.storeName = name;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.DestinationAndUrlMappings {
  key id : String(36) not null;
  destination : String(256) not null;
  url : String(2048) not null;
};

@cds.external : true
@cds.persistence.skip : true
entity apim_metadata.Streams {
  key id : String(36) not null;
  FK_FLOW_ID : String(36);
  isRequest : Boolean;
  @cds.ambiguous : 'missing on condition?'
  flow : Association to apim_metadata.FlowRules on flow.id = FK_FLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apim_metadata.Steps on steps.FK_STREAM_ID = id;
};

@cds.external : true
type apim_metadata.ExpirySettings {
  @odata.Type : 'Edm.DateTime'
  expiry_date : DateTime;
  expiry_settings_override_disabled : Boolean;
  time_out : Integer;
  time_out_day : String(255);
};

@cds.external : true
type apim_metadata.HealthMonitor {
  httpMonitor : String(2048);
  intervalInSec : Integer;
  isEnabled : Boolean;
  tcpMonitor : String(2048);
};

@cds.external : true
type apim_metadata.LoadBalancerConfigurations {
  algorithm : String(255);
  fallBackServer : String(255);
  HealthMonitor : apim_metadata.HealthMonitor;
  isRetry : Boolean;
  maxFailures : Integer;
  serverUnhealthyResponseCode : String(255);
  weigths : String(255);
};

@cds.external : true
type apim_metadata.History {
  @odata.Type : 'Edm.DateTime'
  changed_at : DateTime;
  changed_by : String(255);
  @odata.Type : 'Edm.DateTime'
  created_at : DateTime;
  created_by : String(255);
};

@cds.external : true
type apim_metadata.SSLInfo {
  ciphers : String(255);
  clientAuthEnabled : Boolean;
  enabled : Boolean;
  ignoreValidationErrors : Boolean;
  keyAlias : String(255);
  keyStore : String(255);
  protocols : String(255);
  trustStore : String(255);
};

