"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRulesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const RouteRules_1 = require("./RouteRules");
const RouteRulesRequestBuilder_1 = require("./RouteRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class RouteRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = RouteRules_1.RouteRules;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            FAULT_RULES: new odata_v2_1.Link('faultRules', this, linkedApis[0]),
            PROXY_END_POINT: new odata_v2_1.OneToOneLink('proxyEndPoint', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new RouteRulesRequestBuilder_1.RouteRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(RouteRules_1.RouteRules, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link sequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link targetEndPointName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_END_POINT_NAME: fieldBuilder.buildEdmTypeField('targetEndPointName', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', RouteRules_1.RouteRules)
            };
        }
        return this._schema;
    }
}
exports.RouteRulesApi = RouteRulesApi;
//# sourceMappingURL=RouteRulesApi.js.map