"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowRulesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const FlowRules_1 = require("./FlowRules");
const FlowRulesRequestBuilder_1 = require("./FlowRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class FlowRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = FlowRules_1.FlowRules;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            REQUEST: new odata_v2_1.OneToOneLink('request', this, linkedApis[0]),
            RESPONSE: new odata_v2_1.OneToOneLink('response', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new FlowRulesRequestBuilder_1.FlowRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(FlowRules_1.FlowRules, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
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
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', FlowRules_1.FlowRules)
            };
        }
        return this._schema;
    }
}
exports.FlowRulesApi = FlowRulesApi;
//# sourceMappingURL=FlowRulesApi.js.map