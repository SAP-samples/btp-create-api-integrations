"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiportalCloneMappingsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiportalCloneMappings_1 = require("./ApiportalCloneMappings");
const ApiportalCloneMappingsRequestBuilder_1 = require("./ApiportalCloneMappingsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiportalCloneMappingsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiportalCloneMappings_1.ApiportalCloneMappings;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new ApiportalCloneMappingsRequestBuilder_1.ApiportalCloneMappingsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiportalCloneMappings_1.ApiportalCloneMappings, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link apiportalClientId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APIPORTAL_CLIENT_ID: fieldBuilder.buildEdmTypeField('apiportalClientId', 'Edm.String', true),
                /**
                 * Static representation of the {@link devportalTenantId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEVPORTAL_TENANT_ID: fieldBuilder.buildEdmTypeField('devportalTenantId', 'Edm.String', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link newServiceInstanceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NEW_SERVICE_INSTANCE_ID: fieldBuilder.buildEdmTypeField('newServiceInstanceId', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceInstanceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_INSTANCE_ID: fieldBuilder.buildEdmTypeField('serviceInstanceId', 'Edm.String', true),
                /**
                 * Static representation of the {@link subaccountId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBACCOUNT_ID: fieldBuilder.buildEdmTypeField('subaccountId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiportalCloneMappings_1.ApiportalCloneMappings)
            };
        }
        return this._schema;
    }
}
exports.ApiportalCloneMappingsApi = ApiportalCloneMappingsApi;
//# sourceMappingURL=ApiportalCloneMappingsApi.js.map