"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Resources_1 = require("./Resources");
const ResourcesRequestBuilder_1 = require("./ResourcesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ResourcesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Resources_1.Resources;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ResourcesRequestBuilder_1.ResourcesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Resources_1.Resources, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link locale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
                /**
                 * Static representation of the {@link longText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LONG_TEXT: fieldBuilder.buildEdmTypeField('long_text', 'Edm.String', true),
                /**
                 * Static representation of the {@link mediumText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MEDIUM_TEXT: fieldBuilder.buildEdmTypeField('medium_text', 'Edm.String', true),
                /**
                 * Static representation of the {@link objectId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OBJECT_ID: fieldBuilder.buildEdmTypeField('object_id', 'Edm.String', false),
                /**
                 * Static representation of the {@link shortText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHORT_TEXT: fieldBuilder.buildEdmTypeField('short_text', 'Edm.String', true),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Resources_1.Resources)
            };
        }
        return this._schema;
    }
}
exports.ResourcesApi = ResourcesApi;
//# sourceMappingURL=ResourcesApi.js.map