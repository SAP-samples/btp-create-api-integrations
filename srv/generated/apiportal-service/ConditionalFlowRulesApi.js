"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalFlowRulesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ConditionalFlowRules_1 = require("./ConditionalFlowRules");
const ConditionalFlowRulesRequestBuilder_1 = require("./ConditionalFlowRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ConditionalFlowRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ConditionalFlowRules_1.ConditionalFlowRules;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_RESOURCE: new odata_v2_1.OneToOneLink('apiResource', this, linkedApis[0]),
            PROXY_END_POINT: new odata_v2_1.OneToOneLink('proxyEndPoint', this, linkedApis[1]),
            REQUEST: new odata_v2_1.OneToOneLink('request', this, linkedApis[2]),
            RESPONSE: new odata_v2_1.OneToOneLink('response', this, linkedApis[3]),
            TARGET_END_POINT: new odata_v2_1.OneToOneLink('targetEndPoint', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new ConditionalFlowRulesRequestBuilder_1.ConditionalFlowRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ConditionalFlowRules_1.ConditionalFlowRules, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkApiresourceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_APIRESOURCE_ID: fieldBuilder.buildEdmTypeField('FK_APIRESOURCE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link conditions} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITIONS: fieldBuilder.buildEdmTypeField('conditions', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkProxyendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_PROXYENDPOINT_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link readOnly} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                READ_ONLY: fieldBuilder.buildEdmTypeField('readOnly', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link fkRequestId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_REQUEST_ID: fieldBuilder.buildEdmTypeField('FK_REQUEST_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkResponseId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_RESPONSE_ID: fieldBuilder.buildEdmTypeField('FK_RESPONSE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link sequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link fkTargetendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_TARGETENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_TARGETENDPOINT_ID', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ConditionalFlowRules_1.ConditionalFlowRules)
            };
        }
        return this._schema;
    }
}
exports.ConditionalFlowRulesApi = ConditionalFlowRulesApi;
//# sourceMappingURL=ConditionalFlowRulesApi.js.map