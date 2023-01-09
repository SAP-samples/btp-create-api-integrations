"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyMapEntriesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const KeyMapEntries_1 = require("./KeyMapEntries");
const KeyMapEntriesRequestBuilder_1 = require("./KeyMapEntriesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class KeyMapEntriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = KeyMapEntries_1.KeyMapEntries;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            KEY_MAP_ENTRY_VALUES: new odata_v2_1.Link('keyMapEntryValues', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new KeyMapEntriesRequestBuilder_1.KeyMapEntriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(KeyMapEntries_1.KeyMapEntries, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link encrypted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENCRYPTED: fieldBuilder.buildEdmTypeField('encrypted', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
                /**
                 * Static representation of the {@link scope} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', KeyMapEntries_1.KeyMapEntries)
            };
        }
        return this._schema;
    }
}
exports.KeyMapEntriesApi = KeyMapEntriesApi;
//# sourceMappingURL=KeyMapEntriesApi.js.map