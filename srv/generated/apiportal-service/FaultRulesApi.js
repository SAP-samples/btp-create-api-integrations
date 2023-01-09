"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaultRulesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const FaultRules_1 = require("./FaultRules");
const FaultRulesRequestBuilder_1 = require("./FaultRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class FaultRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = FaultRules_1.FaultRules;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROXY_END_POINT: new odata_v2_1.OneToOneLink('proxyEndPoint', this, linkedApis[0]),
            ROUTE_RULE: new odata_v2_1.OneToOneLink('routeRule', this, linkedApis[1]),
            STEPS: new odata_v2_1.Link('steps', this, linkedApis[2]),
            TARGET_END_POINT: new odata_v2_1.OneToOneLink('targetEndPoint', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new FaultRulesRequestBuilder_1.FaultRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(FaultRules_1.FaultRules, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link condition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION: fieldBuilder.buildEdmTypeField('condition', 'Edm.String', true),
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
                 * Static representation of the {@link fkRouteruleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_ROUTERULE_ID: fieldBuilder.buildEdmTypeField('FK_ROUTERULE_ID', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', FaultRules_1.FaultRules)
            };
        }
        return this._schema;
    }
}
exports.FaultRulesApi = FaultRulesApi;
//# sourceMappingURL=FaultRulesApi.js.map