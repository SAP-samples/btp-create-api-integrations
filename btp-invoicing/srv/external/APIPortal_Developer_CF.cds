/* checksum : 59c27d5cab0235e07e2b69ba46fa2471 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
service apiportal {};

type apiportal.History {
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  changed_at : DateTime;
  changed_by : String(255);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  created_at : DateTime;
  created_by : String(255);
};

type apiportal.SSLInfo {
  ciphers : String(255);
  clientAuthEnabled : Boolean;
  enabled : Boolean;
  ignoreValidationErrors : Boolean;
  keyAlias : String(255);
  keyStore : String(255);
  protocols : String(255);
  trustStore : String(255);
};

type apiportal.ExpirySettings {
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  expiry_date : DateTime;
  expiry_settings_override_disabled : Boolean;
  time_out : Integer;
  time_out_day : String(255);
};

@cds.persistence.skip : true
entity apiportal.KeyMapEntries {
  key name : String(255);
  encrypted : Boolean;
  life_cycle : apiportal.History;
  @cds.ambiguous : 'missing on condition?'
  keyMapEntryValues : Association to many apiportal.KeyMapEntryValues on keyMapEntryValues.map_name = name;
};

@cds.persistence.skip : true
entity apiportal.VirtualHosts {
  key id : String(36);
  isDefault : Boolean;
  isSSL : Boolean;
  life_cycle : apiportal.History;
  name : String(255);
  projectPath : String(255);
  virtual_host : String(2048);
  virtual_port : Integer;
};

@cds.persistence.skip : true
entity apiportal.FlowRules {
  key id : String(36);
  FK_REQUEST_ID : String(36);
  FK_RESPONSE_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  request : Association to apiportal.Streams on request.id = FK_REQUEST_ID;
  @cds.ambiguous : 'missing on condition?'
  response : Association to apiportal.Streams on response.id = FK_RESPONSE_ID;
};

@cds.persistence.skip : true
entity apiportal.TemplateFileResources {
  key id : String(36);
  content : LargeString;
  name : String(255);
  FK_TEMPLATE_NAME : String(255);
  scope : String(20);
  type : String(10);
  @cds.ambiguous : 'missing on condition?'
  policyTemplateContainer : Association to apiportal.PolicyTemplateContainers on policyTemplateContainer.name = FK_TEMPLATE_NAME;
};

@cds.persistence.skip : true
entity apiportal.ACLProductLinkages {
  key ruleId : String(255);
  devportalRuleId : String(255);
  entityId : String(255);
  entityType : String(64);
  isPublished : Boolean;
  operation : String(64);
  permissionSet : String(1024);
};

@cds.persistence.skip : true
entity apiportal.APIProxyEndPoints {
  key id : String(36);
  FK_API_NAME : String(255);
  base_path : LargeString;
  FK_DEFAULTFAULTRULE_ID : String(36);
  isDefault : Boolean;
  life_cycle : apiportal.History;
  name : String(255);
  FK_POSTCLIENTFLOW_ID : String(36);
  FK_POSTFLOW_ID : String(36);
  FK_PREFLOW_ID : String(36);
  publishUrl : LargeString;
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apiportal.APIProxies on apiProxy.name = FK_API_NAME;
  @cds.ambiguous : 'missing on condition?'
  apiResources : Association to many apiportal.APIResources on apiResources.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  conditionalFlows : Association to many apiportal.ConditionalFlowRules {  };
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apiportal.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apiportal.FaultRules on faultRules.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  postClientFlow : Association to apiportal.FlowRules on postClientFlow.id = FK_POSTCLIENTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  postFlow : Association to apiportal.FlowRules on postFlow.id = FK_POSTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  preFlow : Association to apiportal.FlowRules on preFlow.id = FK_PREFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  properties : Association to many apiportal.EndPointProperties on properties.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  routeRules : Association to many apiportal.RouteRules on routeRules.FK_PROXYENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  virtualhosts : Association to many apiportal.VirtualHosts {  };
};

@cds.persistence.skip : true
entity apiportal.CertificateStores {
  key name : String(200);
  life_cycle : apiportal.History;
  storeType : String(20);
  @cds.ambiguous : 'missing on condition?'
  certificates : Association to many apiportal.Certificates on certificates.storeName = name;
};

@cds.persistence.skip : true
entity apiportal.TemplatePolicys {
  key id : String(36);
  life_cycle : apiportal.History;
  name : String(255);
  FK_TEMPLATE_NAME : String(255);
  policy_content : LargeString;
  type : String(40);
  @cds.ambiguous : 'missing on condition?'
  policyTemplateContainer : Association to apiportal.PolicyTemplateContainers on policyTemplateContainer.name = FK_TEMPLATE_NAME;
};

@cds.persistence.skip : true
entity apiportal.APIProxies {
  key name : String(255);
  FK_PROVIDERNAME : String(200);
  cfBindingId : String(36);
  isCopy : Boolean;
  isPublished : Boolean;
  life_cycle : apiportal.History;
  provider_name : String(200);
  service_code : String(20);
  state : String(10);
  status_code : String(20);
  version : String(10);
  title : String(255);
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apiportal.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  apiProvider : Association to apiportal.APIProviders on apiProvider.name = FK_PROVIDERNAME;
  @cds.ambiguous : 'missing on condition?'
  contentPackage : Association to apiportal.ContentPackageMappers {  };
  @cds.ambiguous : 'missing on condition?'
  fileResources : Association to many apiportal.FileResources {  };
  @cds.ambiguous : 'missing on condition?'
  policies : Association to many apiportal.Policies on policies.FK_API_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoints : Association to many apiportal.APIProxyEndPoints on proxyEndPoints.FK_API_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
  @cds.ambiguous : 'missing on condition?'
  targetAPIProxies : Association to many apiportal.APITargetEndPoints {  };
  @cds.ambiguous : 'missing on condition?'
  targetEndPoints : Association to many apiportal.APITargetEndPoints on targetEndPoints.FK_API_NAME = name;
};

@cds.persistence.skip : true
entity apiportal.EndPointProperties {
  key id : String(36);
  name : String(512);
  FK_PROXYENDPOINT_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  value : LargeString;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apiportal.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apiportal.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.persistence.skip : true
entity apiportal.Applications {
  key id : String(36);
  callbackurl : String(255);
  FK_DEVELOPER_ID : String(256);
  life_cycle : apiportal.History;
  status_code : String(20);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  valid_from : DateTime;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  valid_to : DateTime;
  version : String(10);
  title : String(255);
  description : String(16000);
  app_key : String(256);
  app_secret : String(1000);
  subscribedRatePlan : LargeString;
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apiportal.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  developer : Association to apiportal.Developers on developer.id = FK_DEVELOPER_ID;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
};

@cds.persistence.skip : true
entity apiportal.Steps {
  key id : String(36);
  condition : LargeString;
  FK_DEFAULTFAULTRULE_ID : String(36);
  FK_FAULTRULE_ID : String(36);
  policy_name : String(255);
  sequence : Integer;
  FK_STREAM_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apiportal.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRule : Association to apiportal.FaultRules on faultRule.id = FK_FAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  stream : Association to apiportal.Streams on stream.id = FK_STREAM_ID;
};

@cds.persistence.skip : true
entity apiportal.APIProviders {
  key name : String(200);
  isOnPremise : Boolean;
  life_cycle : apiportal.History;
  rt_auth : String(255);
  sslInfo : apiportal.SSLInfo;
  url : LargeString;
  title : String(255);
  description : String(16000);
  destType : String(10);
  host : String(2048);
  port : Integer;
  useSSL : Boolean;
  trustAll : Boolean;
  userName : String(2048);
  password : String(126);
  authType : String(126);
  pathPrefix : String(2048);
  timeout : Integer;
  cockpit_url : LargeString;
  cloudConnectorLocation : String(2048);
  @cds.ambiguous : 'missing on condition?'
  apiProxies : Association to many apiportal.APIProxies on apiProxies.FK_PROVIDERNAME = name;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
};

@cds.persistence.skip : true
entity apiportal.DestinationAndUrlMappings {
  key id : String(36);
  destination : String(256);
  url : String(2048);
};

@cds.persistence.skip : true
entity apiportal.Resources {
  key locale : String(5);
  key object_id : String(255);
  key type : String(2);
  long_text : String(16000);
  medium_text : String(255);
  short_text : String(255);
};

@cds.persistence.skip : true
entity apiportal.ContentPackageMappers {
  key targetId : String(255);
  key targetType : String(255);
  content : String(255);
  life_cycle : apiportal.History;
  srcArtifactName : String(255);
  srcArtifactType : String(255);
  srcPackageID : String(255);
  srcRepo : String(255);
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apiportal.APIProxies {  };
};

@cds.persistence.skip : true
entity apiportal.ConditionalFlowRules {
  key id : String(36);
  conditions : LargeString;
  name : String(255);
  readOnly : Boolean;
  FK_REQUEST_ID : String(36);
  FK_RESPONSE_ID : String(36);
  sequence : Integer;
  @cds.ambiguous : 'missing on condition?'
  apiResource : Association to apiportal.APIResources {  };
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apiportal.APIProxyEndPoints {  };
  @cds.ambiguous : 'missing on condition?'
  request : Association to apiportal.Streams on request.id = FK_REQUEST_ID;
  @cds.ambiguous : 'missing on condition?'
  response : Association to apiportal.Streams on response.id = FK_RESPONSE_ID;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apiportal.APITargetEndPoints {  };
};

@cds.persistence.skip : true
entity apiportal.DefaultFaultRules {
  key id : String(36);
  alwaysEnforce : Boolean;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apiportal.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apiportal.Steps on steps.FK_DEFAULTFAULTRULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apiportal.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.persistence.skip : true
entity apiportal.APIResources {
  key id : String(36);
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
  life_cycle : apiportal.History;
  name : String(1024);
  proxyEndPointName : LargeString;
  resource_path : LargeString;
  title : String(255);
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProxyEndPoint : Association to apiportal.APIProxyEndPoints on apiProxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  documentations : Association to many apiportal.Documentations on documentations.FK_APIRESOURCE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
};

@cds.persistence.skip : true
entity apiportal.APITargetEndPoints {
  key id : String(36);
  FK_API_NAME : String(255);
  FK_DEFAULTFAULTRULE_ID : String(36);
  isDefault : Boolean;
  life_cycle : apiportal.History;
  name : String(255);
  FK_POSTFLOW_ID : String(36);
  FK_PREFLOW_ID : String(36);
  provider_id : String(200);
  relativePath : String(255);
  FK_TARGET_API_PROXY : String(255);
  targetAPIProxyName : String(255);
  url : String(2083);
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apiportal.APIProxies on apiProxy.name = FK_API_NAME;
  @cds.ambiguous : 'missing on condition?'
  conditionalFlows : Association to many apiportal.ConditionalFlowRules {  };
  @cds.ambiguous : 'missing on condition?'
  defaultFaultRule : Association to apiportal.DefaultFaultRules on defaultFaultRule.id = FK_DEFAULTFAULTRULE_ID;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apiportal.FaultRules on faultRules.FK_TARGETENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  postFlow : Association to apiportal.FlowRules on postFlow.id = FK_POSTFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  preFlow : Association to apiportal.FlowRules on preFlow.id = FK_PREFLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  properties : Association to many apiportal.EndPointProperties on properties.FK_TARGETENDPOINT_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetAPIProxy : Association to apiportal.APIProxies on targetAPIProxy.name = FK_TARGET_API_PROXY;
};

@cds.persistence.skip : true
entity apiportal.FaultRules {
  key id : String(36);
  condition : LargeString;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  FK_ROUTERULE_ID : String(36);
  FK_TARGETENDPOINT_ID : String(36);
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apiportal.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
  @cds.ambiguous : 'missing on condition?'
  routeRule : Association to apiportal.RouteRules on routeRule.id = FK_ROUTERULE_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apiportal.Steps on steps.FK_FAULTRULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  targetEndPoint : Association to apiportal.APITargetEndPoints on targetEndPoint.id = FK_TARGETENDPOINT_ID;
};

@cds.persistence.skip : true
entity apiportal.APIProducts {
  key name : String(255);
  isPublished : Boolean;
  isRestricted : Boolean;
  life_cycle : apiportal.History;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
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
  apiProxies : Association to many apiportal.APIProxies {  };
  @cds.ambiguous : 'missing on condition?'
  apiResources : Association to many apiportal.APIResources {  };
  @cds.ambiguous : 'missing on condition?'
  applications : Association to many apiportal.Applications {  };
  @cds.ambiguous : 'missing on condition?'
  ratePlans : Association to many apiportal.RatePlans {  };
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
};

@cds.persistence.skip : true
entity apiportal.Documentations {
  key id : String(36);
  key locale : String(5);
  FK_APIRESOURCE_ID : String(36);
  apiResourceName : LargeString;
  content : LargeString;
  life_cycle : apiportal.History;
  mime_type : String(256);
  @cds.ambiguous : 'missing on condition?'
  apiResource : Association to apiportal.APIResources on apiResource.id = FK_APIRESOURCE_ID;
};

@cds.persistence.skip : true
entity apiportal.Certificates {
  key name : String(200);
  key storeName : String(200);
  certName : String(256);
  description : String(2048);
  life_cycle : apiportal.History;
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
  certificateStore : Association to apiportal.CertificateStores on certificateStore.name = storeName;
};

@cds.persistence.skip : true
entity apiportal.RatePlans {
  key id : LargeString;
  currency : String(50);
  frequency : String(255);
  isActive : Boolean;
  isPublished : Boolean;
  isSeasonal : Boolean;
  life_cycle : apiportal.History;
  name : String(255);
  rate : LargeString;
  type : String(255);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  validFrom : DateTime;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  validTo : DateTime;
  description : String(16000);
  @cds.ambiguous : 'missing on condition?'
  apiProducts : Association to many apiportal.APIProducts {  };
  @cds.ambiguous : 'missing on condition?'
  resources : Association to many apiportal.Resources {  };
};

@cds.persistence.skip : true
entity apiportal.PolicyTemplateContainers {
  key name : String(255);
  description : String(4096);
  life_cycle : apiportal.History;
  proxyEndPointxml : LargeString;
  targetEndPointxml : LargeString;
  title : String(255);
  version : String(10);
  @cds.ambiguous : 'missing on condition?'
  fileResources : Association to many apiportal.TemplateFileResources on fileResources.FK_TEMPLATE_NAME = name;
  @cds.ambiguous : 'missing on condition?'
  policies : Association to many apiportal.TemplatePolicys on policies.FK_TEMPLATE_NAME = name;
};

@cds.persistence.skip : true
entity apiportal.Bills {
  key entityId : String(256);
  key entityType : String(32);
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  key fromDate : DateTime;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
  key toDate : DateTime;
  billDetails : LargeString;
  @odata.Type : 'Edm.DateTime'
  @odata.Precision : 0
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
  @odata.Precision : 0
  offboardedDate : DateTime;
  status : String(64);
  total : Double;
};

@cds.persistence.skip : true
entity apiportal.RouteRules {
  key id : String(36);
  conditions : LargeString;
  name : String(255);
  FK_PROXYENDPOINT_ID : String(36);
  sequence : Integer;
  targetEndPointName : String(255);
  url : LargeString;
  @cds.ambiguous : 'missing on condition?'
  faultRules : Association to many apiportal.FaultRules on faultRules.FK_ROUTERULE_ID = id;
  @cds.ambiguous : 'missing on condition?'
  proxyEndPoint : Association to apiportal.APIProxyEndPoints on proxyEndPoint.id = FK_PROXYENDPOINT_ID;
};

@cds.persistence.skip : true
entity apiportal.KeyMapEntryValues {
  key map_name : String(255);
  key name : String(255);
  value : String(4096);
  @cds.ambiguous : 'missing on condition?'
  keyMapEntry : Association to apiportal.KeyMapEntries on keyMapEntry.name = map_name;
};

@cds.persistence.skip : true
entity apiportal.FileResources {
  key id : String(36);
  content : LargeString;
  name : String(255);
  scope : String(20);
  type : String(10);
  @cds.ambiguous : 'missing on condition?'
  apiProxies : Association to many apiportal.APIProxies {  };
};

@cds.persistence.skip : true
entity apiportal.CacheResources {
  key name : String(255);
  compression_enabled : Boolean;
  disk_size : Integer;
  expirySettings : apiportal.ExpirySettings;
  in_memory_size : Integer;
  life_cycle : apiportal.History;
  max_element_disk : Integer;
  max_element_memory : Integer;
  min_compression_size : Integer;
  over_flow_to_disk : Boolean;
  persistent_cache : Boolean;
  skip_cache_element_size : Integer;
};

@cds.persistence.skip : true
entity apiportal.Developers {
  key id : String(256);
  country : LargeString;
  emailId : String(255);
  firstName : String(255);
  lastName : String(255);
  life_cycle : apiportal.History;
  @cds.ambiguous : 'missing on condition?'
  applications : Association to many apiportal.Applications {  };
};

@cds.persistence.skip : true
entity apiportal.Streams {
  key id : String(36);
  FK_FLOW_ID : String(36);
  isRequest : Boolean;
  @cds.ambiguous : 'missing on condition?'
  flow : Association to apiportal.FlowRules on flow.id = FK_FLOW_ID;
  @cds.ambiguous : 'missing on condition?'
  steps : Association to many apiportal.Steps on steps.FK_STREAM_ID = id;
};

@cds.persistence.skip : true
entity apiportal.Policies {
  key id : String(36);
  FK_API_NAME : String(255);
  life_cycle : apiportal.History;
  name : String(255);
  policy_content : LargeString;
  type : String(40);
  @cds.ambiguous : 'missing on condition?'
  apiProxy : Association to apiportal.APIProxies on apiProxy.name = FK_API_NAME;
};

