"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateFileResourcesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TemplateFileResources_1 = require("./TemplateFileResources");
const TemplateFileResourcesRequestBuilder_1 = require("./TemplateFileResourcesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TemplateFileResourcesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TemplateFileResources_1.TemplateFileResources;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            POLICY_TEMPLATE_CONTAINER: new odata_v2_1.OneToOneLink('policyTemplateContainer', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TemplateFileResourcesRequestBuilder_1.TemplateFileResourcesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TemplateFileResources_1.TemplateFileResources, this.deSerializers);
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
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkTemplateName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField('FK_TEMPLATE_NAME', 'Edm.String', true),
                /**
                 * Static representation of the {@link scope} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TemplateFileResources_1.TemplateFileResources)
            };
        }
        return this._schema;
    }
}
exports.TemplateFileResourcesApi = TemplateFileResourcesApi;
//# sourceMappingURL=TemplateFileResourcesApi.js.map