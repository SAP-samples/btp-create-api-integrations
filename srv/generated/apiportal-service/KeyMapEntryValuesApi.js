"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyMapEntryValuesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const KeyMapEntryValues_1 = require("./KeyMapEntryValues");
const KeyMapEntryValuesRequestBuilder_1 = require("./KeyMapEntryValuesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class KeyMapEntryValuesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = KeyMapEntryValues_1.KeyMapEntryValues;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            KEY_MAP_ENTRY: new odata_v2_1.OneToOneLink('keyMapEntry', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new KeyMapEntryValuesRequestBuilder_1.KeyMapEntryValuesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(KeyMapEntryValues_1.KeyMapEntryValues, this.deSerializers);
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
                MAP_NAME: fieldBuilder.buildEdmTypeField('map_name', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', KeyMapEntryValues_1.KeyMapEntryValues)
            };
        }
        return this._schema;
    }
}
exports.KeyMapEntryValuesApi = KeyMapEntryValuesApi;
//# sourceMappingURL=KeyMapEntryValuesApi.js.map