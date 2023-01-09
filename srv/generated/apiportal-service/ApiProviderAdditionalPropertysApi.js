"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProviderAdditionalPropertysApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProviderAdditionalPropertys_1 = require("./ApiProviderAdditionalPropertys");
const ApiProviderAdditionalPropertysRequestBuilder_1 = require("./ApiProviderAdditionalPropertysRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProviderAdditionalPropertysApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProviderAdditionalPropertys_1.ApiProviderAdditionalPropertys;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ApiProviderAdditionalPropertysRequestBuilder_1.ApiProviderAdditionalPropertysRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProviderAdditionalPropertys_1.ApiProviderAdditionalPropertys, this.deSerializers);
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProviderAdditionalPropertys_1.ApiProviderAdditionalPropertys)
            };
        }
        return this._schema;
    }
}
exports.ApiProviderAdditionalPropertysApi = ApiProviderAdditionalPropertysApi;
//# sourceMappingURL=ApiProviderAdditionalPropertysApi.js.map