"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Applications_1 = require("./Applications");
const ApplicationsRequestBuilder_1 = require("./ApplicationsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApplicationsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Applications_1.Applications;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PRODUCTS: new odata_v2_1.Link('apiProducts', this, linkedApis[0]),
            ATTRIBUTES: new odata_v2_1.Link('attributes', this, linkedApis[1]),
            DEVELOPER: new odata_v2_1.OneToOneLink('developer', this, linkedApis[2]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new ApplicationsRequestBuilder_1.ApplicationsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Applications_1.Applications, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link callbackurl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALLBACKURL: fieldBuilder.buildEdmTypeField('callbackurl', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkDeveloperId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_DEVELOPER_ID: fieldBuilder.buildEdmTypeField('FK_DEVELOPER_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link statusCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS_CODE: fieldBuilder.buildEdmTypeField('status_code', 'Edm.String', true),
                /**
                 * Static representation of the {@link validFrom} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_FROM: fieldBuilder.buildEdmTypeField('valid_from', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link validTo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_TO: fieldBuilder.buildEdmTypeField('valid_to', 'Edm.DateTime', true),
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
                /**
                 * Static representation of the {@link appKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APP_KEY: fieldBuilder.buildEdmTypeField('app_key', 'Edm.String', true),
                /**
                 * Static representation of the {@link appSecret} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APP_SECRET: fieldBuilder.buildEdmTypeField('app_secret', 'Edm.String', true),
                /**
                 * Static representation of the {@link subscribedRatePlan} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSCRIBED_RATE_PLAN: fieldBuilder.buildEdmTypeField('subscribedRatePlan', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Applications_1.Applications)
            };
        }
        return this._schema;
    }
}
exports.ApplicationsApi = ApplicationsApi;
//# sourceMappingURL=ApplicationsApi.js.map