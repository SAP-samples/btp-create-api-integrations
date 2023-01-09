"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProductsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProducts_1 = require("./ApiProducts");
const ApiProductsRequestBuilder_1 = require("./ApiProductsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProductsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProducts_1.ApiProducts;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ADDITIONAL_PROPERTIES: new odata_v2_1.Link('additionalProperties', this, linkedApis[0]),
            API_PROXIES: new odata_v2_1.Link('apiProxies', this, linkedApis[1]),
            API_RESOURCES: new odata_v2_1.Link('apiResources', this, linkedApis[2]),
            APPLICATIONS: new odata_v2_1.Link('applications', this, linkedApis[3]),
            RATE_PLANS: new odata_v2_1.Link('ratePlans', this, linkedApis[4]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[5])
        };
        return this;
    }
    requestBuilder() {
        return new ApiProductsRequestBuilder_1.ApiProductsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProducts_1.ApiProducts, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link isPublished} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PUBLISHED: fieldBuilder.buildEdmTypeField('isPublished', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isRestricted} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_RESTRICTED: fieldBuilder.buildEdmTypeField('isRestricted', 'Edm.Boolean', true),
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
                 * Static representation of the {@link publishedAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PUBLISHED_AT: fieldBuilder.buildEdmTypeField('published_at', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link publishedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PUBLISHED_BY: fieldBuilder.buildEdmTypeField('published_by', 'Edm.String', true),
                /**
                 * Static representation of the {@link quotaCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUOTA_COUNT: fieldBuilder.buildEdmTypeField('quotaCount', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link quotaInterval} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUOTA_INTERVAL: fieldBuilder.buildEdmTypeField('quotaInterval', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link quotaTimeUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUOTA_TIME_UNIT: fieldBuilder.buildEdmTypeField('quotaTimeUnit', 'Edm.String', true),
                /**
                 * Static representation of the {@link scope} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
                /**
                 * Static representation of the {@link statusCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS_CODE: fieldBuilder.buildEdmTypeField('status_code', 'Edm.String', true),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProducts_1.ApiProducts)
            };
        }
        return this._schema;
    }
}
exports.ApiProductsApi = ApiProductsApi;
//# sourceMappingURL=ApiProductsApi.js.map