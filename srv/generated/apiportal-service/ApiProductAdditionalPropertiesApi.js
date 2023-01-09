"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProductAdditionalPropertiesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProductAdditionalProperties_1 = require("./ApiProductAdditionalProperties");
const ApiProductAdditionalPropertiesRequestBuilder_1 = require("./ApiProductAdditionalPropertiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProductAdditionalPropertiesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProductAdditionalProperties_1.ApiProductAdditionalProperties;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ApiProductAdditionalPropertiesRequestBuilder_1.ApiProductAdditionalPropertiesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProductAdditionalProperties_1.ApiProductAdditionalProperties, this.deSerializers);
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProductAdditionalProperties_1.ApiProductAdditionalProperties)
            };
        }
        return this._schema;
    }
}
exports.ApiProductAdditionalPropertiesApi = ApiProductAdditionalPropertiesApi;
//# sourceMappingURL=ApiProductAdditionalPropertiesApi.js.map