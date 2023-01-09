"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProvidersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiProviders_1 = require("./ApiProviders");
const ApiProvidersRequestBuilder_1 = require("./ApiProvidersRequestBuilder");
const History_1 = require("./History");
const SslInfo_1 = require("./SslInfo");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiProvidersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiProviders_1.ApiProviders;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ADDITIONAL_PROPERTIES: new odata_v2_1.Link('additionalProperties', this, linkedApis[0]),
            API_PROXIES: new odata_v2_1.Link('apiProxies', this, linkedApis[1]),
            ENV_KV_MS: new odata_v2_1.Link('envKVMs', this, linkedApis[2]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[3]),
            TARGET_END_POINTS: new odata_v2_1.Link('targetEndPoints', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new ApiProvidersRequestBuilder_1.ApiProvidersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiProviders_1.ApiProviders, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link destType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEST_TYPE: fieldBuilder.buildEdmTypeField('destType', 'Edm.String', true),
                /**
                 * Static representation of the {@link isOnPremise} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_ON_PREMISE: fieldBuilder.buildEdmTypeField('isOnPremise', 'Edm.Boolean', true),
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
                 * Static representation of the {@link region} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REGION: fieldBuilder.buildEdmTypeField('region', 'Edm.String', true),
                /**
                 * Static representation of the {@link rtAuth} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RT_AUTH: fieldBuilder.buildEdmTypeField('rt_auth', 'Edm.String', true),
                /**
                 * Static representation of the {@link sslInfo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SSL_INFO: fieldBuilder.buildComplexTypeField('sslInfo', SslInfo_1.SslInfoField, true),
                /**
                 * Static representation of the {@link url} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', true),
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
                 * Static representation of the {@link host} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HOST: fieldBuilder.buildEdmTypeField('host', 'Edm.String', true),
                /**
                 * Static representation of the {@link port} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PORT: fieldBuilder.buildEdmTypeField('port', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link useSsl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USE_SSL: fieldBuilder.buildEdmTypeField('useSSL', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link trustAll} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRUST_ALL: fieldBuilder.buildEdmTypeField('trustAll', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link userName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_NAME: fieldBuilder.buildEdmTypeField('userName', 'Edm.String', true),
                /**
                 * Static representation of the {@link password} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PASSWORD: fieldBuilder.buildEdmTypeField('password', 'Edm.String', true),
                /**
                 * Static representation of the {@link clientSecret} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLIENT_SECRET: fieldBuilder.buildEdmTypeField('clientSecret', 'Edm.String', true),
                /**
                 * Static representation of the {@link clientId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLIENT_ID: fieldBuilder.buildEdmTypeField('clientId', 'Edm.String', true),
                /**
                 * Static representation of the {@link tokenUrl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOKEN_URL: fieldBuilder.buildEdmTypeField('tokenUrl', 'Edm.String', true),
                /**
                 * Static representation of the {@link authType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                AUTH_TYPE: fieldBuilder.buildEdmTypeField('authType', 'Edm.String', true),
                /**
                 * Static representation of the {@link pathPrefix} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PATH_PREFIX: fieldBuilder.buildEdmTypeField('pathPrefix', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeout} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIMEOUT: fieldBuilder.buildEdmTypeField('timeout', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link cockpitUrl} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COCKPIT_URL: fieldBuilder.buildEdmTypeField('cockpit_url', 'Edm.String', true),
                /**
                 * Static representation of the {@link cloudConnectorLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CLOUD_CONNECTOR_LOCATION: fieldBuilder.buildEdmTypeField('cloudConnectorLocation', 'Edm.String', true),
                /**
                 * Static representation of the {@link orgSecret} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORG_SECRET: fieldBuilder.buildEdmTypeField('orgSecret', 'Edm.String', true),
                /**
                 * Static representation of the {@link userSecret} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                USER_SECRET: fieldBuilder.buildEdmTypeField('userSecret', 'Edm.String', true),
                /**
                 * Static representation of the {@link keystorePassword} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                KEYSTORE_PASSWORD: fieldBuilder.buildEdmTypeField('keystorePassword', 'Edm.String', true),
                /**
                 * Static representation of the {@link keystoreLocation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                KEYSTORE_LOCATION: fieldBuilder.buildEdmTypeField('keystoreLocation', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiProviders_1.ApiProviders)
            };
        }
        return this._schema;
    }
}
exports.ApiProvidersApi = ApiProvidersApi;
//# sourceMappingURL=ApiProvidersApi.js.map