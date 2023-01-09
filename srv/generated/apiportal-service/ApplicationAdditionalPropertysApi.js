"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationAdditionalPropertysApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApplicationAdditionalPropertys_1 = require("./ApplicationAdditionalPropertys");
const ApplicationAdditionalPropertysRequestBuilder_1 = require("./ApplicationAdditionalPropertysRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApplicationAdditionalPropertysApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApplicationAdditionalPropertys_1.ApplicationAdditionalPropertys;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ApplicationAdditionalPropertysRequestBuilder_1.ApplicationAdditionalPropertysRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApplicationAdditionalPropertys_1.ApplicationAdditionalPropertys, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link entityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_ID: fieldBuilder.buildEdmTypeField('entityId', 'Edm.String', false),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApplicationAdditionalPropertys_1.ApplicationAdditionalPropertys)
            };
        }
        return this._schema;
    }
}
exports.ApplicationAdditionalPropertysApi = ApplicationAdditionalPropertysApi;
//# sourceMappingURL=ApplicationAdditionalPropertysApi.js.map