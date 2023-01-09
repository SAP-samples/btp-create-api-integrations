"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFaultRulesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DefaultFaultRules_1 = require("./DefaultFaultRules");
const DefaultFaultRulesRequestBuilder_1 = require("./DefaultFaultRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DefaultFaultRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = DefaultFaultRules_1.DefaultFaultRules;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROXY_END_POINT: new odata_v2_1.OneToOneLink('proxyEndPoint', this, linkedApis[0]),
            STEPS: new odata_v2_1.Link('steps', this, linkedApis[1]),
            TARGET_END_POINT: new odata_v2_1.OneToOneLink('targetEndPoint', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new DefaultFaultRulesRequestBuilder_1.DefaultFaultRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DefaultFaultRules_1.DefaultFaultRules, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link alwaysEnforce} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALWAYS_ENFORCE: fieldBuilder.buildEdmTypeField('alwaysEnforce', 'Edm.Boolean', true),
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
                 * Static representation of the {@link fkTargetendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_TARGETENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_TARGETENDPOINT_ID', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DefaultFaultRules_1.DefaultFaultRules)
            };
        }
        return this._schema;
    }
}
exports.DefaultFaultRulesApi = DefaultFaultRulesApi;
//# sourceMappingURL=DefaultFaultRulesApi.js.map