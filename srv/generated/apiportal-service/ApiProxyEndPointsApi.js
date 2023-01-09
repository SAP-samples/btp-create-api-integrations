"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxyEndPointsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProxyEndPoints_1 = require("./ApiProxyEndPoints");
const ApiProxyEndPointsRequestBuilder_1 = require("./ApiProxyEndPointsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProxyEndPointsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProxyEndPoints_1.ApiProxyEndPoints;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PROXY: new odata_v2_1.OneToOneLink('apiProxy', this, linkedApis[0]),
            API_RESOURCES: new odata_v2_1.Link('apiResources', this, linkedApis[1]),
            CONDITIONAL_FLOWS: new odata_v2_1.Link('conditionalFlows', this, linkedApis[2]),
            DEFAULT_FAULT_RULE: new odata_v2_1.OneToOneLink('defaultFaultRule', this, linkedApis[3]),
            FAULT_RULES: new odata_v2_1.Link('faultRules', this, linkedApis[4]),
            POST_CLIENT_FLOW: new odata_v2_1.OneToOneLink('postClientFlow', this, linkedApis[5]),
            POST_FLOW: new odata_v2_1.OneToOneLink('postFlow', this, linkedApis[6]),
            PRE_FLOW: new odata_v2_1.OneToOneLink('preFlow', this, linkedApis[7]),
            PROPERTIES: new odata_v2_1.Link('properties', this, linkedApis[8]),
            ROUTE_RULES: new odata_v2_1.Link('routeRules', this, linkedApis[9]),
            VIRTUALHOSTS: new odata_v2_1.Link('virtualhosts', this, linkedApis[10])
        };
        return this;
    }
    requestBuilder() {
        return new ApiProxyEndPointsRequestBuilder_1.ApiProxyEndPointsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProxyEndPoints_1.ApiProxyEndPoints, this.deSerializers);
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
                 * Static representation of the {@link basePath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BASE_PATH: fieldBuilder.buildEdmTypeField('base_path', 'Edm.String', true),
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
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkPostclientflowId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_POSTCLIENTFLOW_ID: fieldBuilder.buildEdmTypeField('FK_POSTCLIENTFLOW_ID', 'Edm.String', true),
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
                 * Static representation of the {@link publishUrl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PUBLISH_URL: fieldBuilder.buildEdmTypeField('publishUrl', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProxyEndPoints_1.ApiProxyEndPoints)
            };
        }
        return this._schema;
    }
}
exports.ApiProxyEndPointsApi = ApiProxyEndPointsApi;
//# sourceMappingURL=ApiProxyEndPointsApi.js.map