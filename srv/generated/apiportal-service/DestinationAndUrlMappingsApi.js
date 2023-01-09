"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationAndUrlMappingsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DestinationAndUrlMappings_1 = require("./DestinationAndUrlMappings");
const DestinationAndUrlMappingsRequestBuilder_1 = require("./DestinationAndUrlMappingsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DestinationAndUrlMappingsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = DestinationAndUrlMappings_1.DestinationAndUrlMappings;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new DestinationAndUrlMappingsRequestBuilder_1.DestinationAndUrlMappingsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DestinationAndUrlMappings_1.DestinationAndUrlMappings, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link destination} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESTINATION: fieldBuilder.buildEdmTypeField('destination', 'Edm.String', false),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link url} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DestinationAndUrlMappings_1.DestinationAndUrlMappings)
            };
        }
        return this._schema;
    }
}
exports.DestinationAndUrlMappingsApi = DestinationAndUrlMappingsApi;
//# sourceMappingURL=DestinationAndUrlMappingsApi.js.map