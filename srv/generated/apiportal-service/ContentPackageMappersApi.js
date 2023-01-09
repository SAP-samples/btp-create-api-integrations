"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentPackageMappersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ContentPackageMappers_1 = require("./ContentPackageMappers");
const ContentPackageMappersRequestBuilder_1 = require("./ContentPackageMappersRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ContentPackageMappersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ContentPackageMappers_1.ContentPackageMappers;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PROXY: new odata_v2_1.OneToOneLink('apiProxy', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ContentPackageMappersRequestBuilder_1.ContentPackageMappersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ContentPackageMappers_1.ContentPackageMappers, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link content} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.String', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link srcArtifactName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_ARTIFACT_NAME: fieldBuilder.buildEdmTypeField('srcArtifactName', 'Edm.String', true),
                /**
                 * Static representation of the {@link srcArtifactType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_ARTIFACT_TYPE: fieldBuilder.buildEdmTypeField('srcArtifactType', 'Edm.String', true),
                /**
                 * Static representation of the {@link srcPackageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_PACKAGE_ID: fieldBuilder.buildEdmTypeField('srcPackageID', 'Edm.String', true),
                /**
                 * Static representation of the {@link srcRepo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_REPO: fieldBuilder.buildEdmTypeField('srcRepo', 'Edm.String', true),
                /**
                 * Static representation of the {@link targetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_ID: fieldBuilder.buildEdmTypeField('targetId', 'Edm.String', false),
                /**
                 * Static representation of the {@link targetType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_TYPE: fieldBuilder.buildEdmTypeField('targetType', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ContentPackageMappers_1.ContentPackageMappers)
            };
        }
        return this._schema;
    }
}
exports.ContentPackageMappersApi = ContentPackageMappersApi;
//# sourceMappingURL=ContentPackageMappersApi.js.map