"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheResourcesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CacheResources_1 = require("./CacheResources");
const CacheResourcesRequestBuilder_1 = require("./CacheResourcesRequestBuilder");
const ExpirySettings_1 = require("./ExpirySettings");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CacheResourcesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CacheResources_1.CacheResources;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new CacheResourcesRequestBuilder_1.CacheResourcesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CacheResources_1.CacheResources, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link compressionEnabled} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPRESSION_ENABLED: fieldBuilder.buildEdmTypeField('compression_enabled', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link diskSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISK_SIZE: fieldBuilder.buildEdmTypeField('disk_size', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link expirySettings} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRY_SETTINGS: fieldBuilder.buildComplexTypeField('expirySettings', ExpirySettings_1.ExpirySettingsField, true),
                /**
                 * Static representation of the {@link inMemorySize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IN_MEMORY_SIZE: fieldBuilder.buildEdmTypeField('in_memory_size', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link maxElementDisk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAX_ELEMENT_DISK: fieldBuilder.buildEdmTypeField('max_element_disk', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link maxElementMemory} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAX_ELEMENT_MEMORY: fieldBuilder.buildEdmTypeField('max_element_memory', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link minCompressionSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIN_COMPRESSION_SIZE: fieldBuilder.buildEdmTypeField('min_compression_size', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
                /**
                 * Static representation of the {@link overFlowToDisk} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVER_FLOW_TO_DISK: fieldBuilder.buildEdmTypeField('over_flow_to_disk', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link persistentCache} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERSISTENT_CACHE: fieldBuilder.buildEdmTypeField('persistent_cache', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link skipCacheElementSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SKIP_CACHE_ELEMENT_SIZE: fieldBuilder.buildEdmTypeField('skip_cache_element_size', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CacheResources_1.CacheResources)
            };
        }
        return this._schema;
    }
}
exports.CacheResourcesApi = CacheResourcesApi;
//# sourceMappingURL=CacheResourcesApi.js.map