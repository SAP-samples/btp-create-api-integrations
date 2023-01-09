"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntryValuesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const GenericKeyMapEntryValues_1 = require("./GenericKeyMapEntryValues");
const GenericKeyMapEntryValuesRequestBuilder_1 = require("./GenericKeyMapEntryValuesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class GenericKeyMapEntryValuesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = GenericKeyMapEntryValues_1.GenericKeyMapEntryValues;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            GENERIC_KEY_MAP_ENTRY: new odata_v2_1.OneToOneLink('genericKeyMapEntry', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new GenericKeyMapEntryValuesRequestBuilder_1.GenericKeyMapEntryValuesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(GenericKeyMapEntryValues_1.GenericKeyMapEntryValues, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link mapName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAP_NAME: fieldBuilder.buildEdmTypeField('mapName', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
                /**
                 * Static representation of the {@link scope} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', false),
                /**
                 * Static representation of the {@link scopeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE_ID: fieldBuilder.buildEdmTypeField('scopeId', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('value', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', GenericKeyMapEntryValues_1.GenericKeyMapEntryValues)
            };
        }
        return this._schema;
    }
}
exports.GenericKeyMapEntryValuesApi = GenericKeyMapEntryValuesApi;
//# sourceMappingURL=GenericKeyMapEntryValuesApi.js.map