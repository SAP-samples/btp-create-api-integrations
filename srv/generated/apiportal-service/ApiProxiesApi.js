"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxiesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProxies_1 = require("./ApiProxies");
const ApiProxiesRequestBuilder_1 = require("./ApiProxiesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProxiesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProxies_1.ApiProxies;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PRODUCTS: new odata_v2_1.Link('apiProducts', this, linkedApis[0]),
            API_PROVIDER: new odata_v2_1.OneToOneLink('apiProvider', this, linkedApis[1]),
            CONTENT_PACKAGE: new odata_v2_1.OneToOneLink('contentPackage', this, linkedApis[2]),
            FILE_RESOURCES: new odata_v2_1.Link('fileResources', this, linkedApis[3]),
            POLICIES: new odata_v2_1.Link('policies', this, linkedApis[4]),
            PROXY_END_POINTS: new odata_v2_1.Link('proxyEndPoints', this, linkedApis[5]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[6]),
            SUCCESSOR_API: new odata_v2_1.OneToOneLink('successorAPI', this, linkedApis[7]),
            SUCCESSOR_API_REFERENCES: new odata_v2_1.Link('successorAPIReferences', this, linkedApis[8]),
            TARGET_API_PROXIES: new odata_v2_1.Link('targetAPIProxies', this, linkedApis[9]),
            TARGET_END_POINTS: new odata_v2_1.Link('targetEndPoints', this, linkedApis[10])
        };
        return this;
    }
    requestBuilder() {
        return new ApiProxiesRequestBuilder_1.ApiProxiesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProxies_1.ApiProxies, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkProvidername} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_PROVIDERNAME: fieldBuilder.buildEdmTypeField('FK_PROVIDERNAME', 'Edm.String', true),
                /**
                 * Static representation of the {@link apiVersionGroup} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                API_VERSION_GROUP: fieldBuilder.buildEdmTypeField('apiVersionGroup', 'Edm.String', true),
                /**
                 * Static representation of the {@link cfBindingId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CF_BINDING_ID: fieldBuilder.buildEdmTypeField('cfBindingId', 'Edm.String', true),
                /**
                 * Static representation of the {@link hasChanges} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_CHANGES: fieldBuilder.buildEdmTypeField('hasChanges', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isCopy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_COPY: fieldBuilder.buildEdmTypeField('isCopy', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isPublished} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PUBLISHED: fieldBuilder.buildEdmTypeField('isPublished', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isUnmanaged} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_UNMANAGED: fieldBuilder.buildEdmTypeField('isUnmanaged', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isVersioned} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_VERSIONED: fieldBuilder.buildEdmTypeField('isVersioned', 'Edm.Boolean', true),
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
                 * Static representation of the {@link providerName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROVIDER_NAME: fieldBuilder.buildEdmTypeField('provider_name', 'Edm.String', true),
                /**
                 * Static representation of the {@link releaseMetadata} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELEASE_METADATA: fieldBuilder.buildEdmTypeField('releaseMetadata', 'Edm.String', true),
                /**
                 * Static representation of the {@link releaseStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RELEASE_STATUS: fieldBuilder.buildEdmTypeField('releaseStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link serviceCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SERVICE_CODE: fieldBuilder.buildEdmTypeField('service_code', 'Edm.String', true),
                /**
                 * Static representation of the {@link state} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATE: fieldBuilder.buildEdmTypeField('state', 'Edm.String', true),
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
                 * Static representation of the {@link policyTemplateNames} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POLICY_TEMPLATE_NAMES: fieldBuilder.buildEdmTypeField('policyTemplateNames', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProxies_1.ApiProxies)
            };
        }
        return this._schema;
    }
}
exports.ApiProxiesApi = ApiProxiesApi;
//# sourceMappingURL=ApiProxiesApi.js.map