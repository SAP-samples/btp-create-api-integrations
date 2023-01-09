"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualHostsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const VirtualHosts_1 = require("./VirtualHosts");
const VirtualHostsRequestBuilder_1 = require("./VirtualHostsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class VirtualHostsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = VirtualHosts_1.VirtualHosts;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new VirtualHostsRequestBuilder_1.VirtualHostsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(VirtualHosts_1.VirtualHosts, this.deSerializers);
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
                 * Static representation of the {@link isDefault} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DEFAULT: fieldBuilder.buildEdmTypeField('isDefault', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isSsl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_SSL: fieldBuilder.buildEdmTypeField('isSSL', 'Edm.Boolean', true),
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
                 * Static representation of the {@link projectPath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROJECT_PATH: fieldBuilder.buildEdmTypeField('projectPath', 'Edm.String', true),
                /**
                 * Static representation of the {@link virtualHost} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VIRTUAL_HOST: fieldBuilder.buildEdmTypeField('virtual_host', 'Edm.String', true),
                /**
                 * Static representation of the {@link virtualPort} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VIRTUAL_PORT: fieldBuilder.buildEdmTypeField('virtual_port', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', VirtualHosts_1.VirtualHosts)
            };
        }
        return this._schema;
    }
}
exports.VirtualHostsApi = VirtualHostsApi;
//# sourceMappingURL=VirtualHostsApi.js.map