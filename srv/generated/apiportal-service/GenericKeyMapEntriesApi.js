"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntriesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const GenericKeyMapEntries_1 = require("./GenericKeyMapEntries");
const GenericKeyMapEntriesRequestBuilder_1 = require("./GenericKeyMapEntriesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class GenericKeyMapEntriesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = GenericKeyMapEntries_1.GenericKeyMapEntries;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            GENERIC_KEY_MAP_ENTRY_VALUES: new odata_v2_1.Link('genericKeyMapEntryValues', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new GenericKeyMapEntriesRequestBuilder_1.GenericKeyMapEntriesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(GenericKeyMapEntries_1.GenericKeyMapEntries, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link isEncrypted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_ENCRYPTED: fieldBuilder.buildEdmTypeField('isEncrypted', 'Edm.Boolean', true),
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
                SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', false),
                /**
                 * Static representation of the {@link scopeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE_ID: fieldBuilder.buildEdmTypeField('scopeId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', GenericKeyMapEntries_1.GenericKeyMapEntries)
            };
        }
        return this._schema;
    }
}
exports.GenericKeyMapEntriesApi = GenericKeyMapEntriesApi;
//# sourceMappingURL=GenericKeyMapEntriesApi.js.map