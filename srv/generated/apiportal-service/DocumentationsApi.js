"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Documentations_1 = require("./Documentations");
const DocumentationsRequestBuilder_1 = require("./DocumentationsRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DocumentationsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Documentations_1.Documentations;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_RESOURCE: new odata_v2_1.OneToOneLink('apiResource', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new DocumentationsRequestBuilder_1.DocumentationsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Documentations_1.Documentations, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkApiresourceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_APIRESOURCE_ID: fieldBuilder.buildEdmTypeField('FK_APIRESOURCE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link apiResourceName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                API_RESOURCE_NAME: fieldBuilder.buildEdmTypeField('apiResourceName', 'Edm.String', true),
                /**
                 * Static representation of the {@link content} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.String', true),
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
                 * Static representation of the {@link locale} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
                /**
                 * Static representation of the {@link mimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIME_TYPE: fieldBuilder.buildEdmTypeField('mime_type', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Documentations_1.Documentations)
            };
        }
        return this._schema;
    }
}
exports.DocumentationsApi = DocumentationsApi;
//# sourceMappingURL=DocumentationsApi.js.map