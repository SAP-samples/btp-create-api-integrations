"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTargetEndPointsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiTargetEndPoints_1 = require("./ApiTargetEndPoints");
const ApiTargetEndPointsRequestBuilder_1 = require("./ApiTargetEndPointsRequestBuilder");
const History_1 = require("./History");
const LoadBalancerConfigurations_1 = require("./LoadBalancerConfigurations");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiTargetEndPointsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiTargetEndPoints_1.ApiTargetEndPoints;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ADDITIONAL_API_PROVIDERS: new odata_v2_1.Link('additionalApiProviders', this, linkedApis[0]),
            API_PROXY: new odata_v2_1.OneToOneLink('apiProxy', this, linkedApis[1]),
            CONDITIONAL_FLOWS: new odata_v2_1.Link('conditionalFlows', this, linkedApis[2]),
            DEFAULT_FAULT_RULE: new odata_v2_1.OneToOneLink('defaultFaultRule', this, linkedApis[3]),
            FAULT_RULES: new odata_v2_1.Link('faultRules', this, linkedApis[4]),
            POST_FLOW: new odata_v2_1.OneToOneLink('postFlow', this, linkedApis[5]),
            PRE_FLOW: new odata_v2_1.OneToOneLink('preFlow', this, linkedApis[6]),
            PROPERTIES: new odata_v2_1.Link('properties', this, linkedApis[7]),
            TARGET_API_PROXY: new odata_v2_1.OneToOneLink('targetAPIProxy', this, linkedApis[8])
        };
        return this;
    }
    requestBuilder() {
        return new ApiTargetEndPointsRequestBuilder_1.ApiTargetEndPointsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiTargetEndPoints_1.ApiTargetEndPoints, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkApiName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_API_NAME: fieldBuilder.buildEdmTypeField('FK_API_NAME', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkDefaultfaultruleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_DEFAULTFAULTRULE_ID: fieldBuilder.buildEdmTypeField('FK_DEFAULTFAULTRULE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link isDefault} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT: fieldBuilder.buildEdmTypeField('isDefault', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link loadBalancerConfigurations} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOAD_BALANCER_CONFIGURATIONS: fieldBuilder.buildComplexTypeField('loadBalancerConfigurations', LoadBalancerConfigurations_1.LoadBalancerConfigurationsField, true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkPostflowId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_POSTFLOW_ID: fieldBuilder.buildEdmTypeField('FK_POSTFLOW_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkPreflowId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_PREFLOW_ID: fieldBuilder.buildEdmTypeField('FK_PREFLOW_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link providerId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROVIDER_ID: fieldBuilder.buildEdmTypeField('provider_id', 'Edm.String', true),
                /**
                 * Static representation of the {@link relativePath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELATIVE_PATH: fieldBuilder.buildEdmTypeField('relativePath', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkTargetApiProxy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_TARGET_API_PROXY: fieldBuilder.buildEdmTypeField('FK_TARGET_API_PROXY', 'Edm.String', true),
                /**
                 * Static representation of the {@link targetApiProxyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_API_PROXY_NAME: fieldBuilder.buildEdmTypeField('targetAPIProxyName', 'Edm.String', true),
                /**
                 * Static representation of the {@link url} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiTargetEndPoints_1.ApiTargetEndPoints)
            };
        }
        return this._schema;
    }
}
exports.ApiTargetEndPointsApi = ApiTargetEndPointsApi;
//# sourceMappingURL=ApiTargetEndPointsApi.js.map