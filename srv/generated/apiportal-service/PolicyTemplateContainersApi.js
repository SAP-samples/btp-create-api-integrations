"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyTemplateContainersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PolicyTemplateContainers_1 = require("./PolicyTemplateContainers");
const PolicyTemplateContainersRequestBuilder_1 = require("./PolicyTemplateContainersRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PolicyTemplateContainersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PolicyTemplateContainers_1.PolicyTemplateContainers;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            FILE_RESOURCES: new odata_v2_1.Link('fileResources', this, linkedApis[0]),
            POLICIES: new odata_v2_1.Link('policies', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new PolicyTemplateContainersRequestBuilder_1.PolicyTemplateContainersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PolicyTemplateContainers_1.PolicyTemplateContainers, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
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
                 * Static representation of the {@link proxyEndPointxml} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROXY_END_POINTXML: fieldBuilder.buildEdmTypeField('proxyEndPointxml', 'Edm.String', true),
                /**
                 * Static representation of the {@link targetEndPointxml} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TARGET_END_POINTXML: fieldBuilder.buildEdmTypeField('targetEndPointxml', 'Edm.String', true),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PolicyTemplateContainers_1.PolicyTemplateContainers)
            };
        }
        return this._schema;
    }
}
exports.PolicyTemplateContainersApi = PolicyTemplateContainersApi;
//# sourceMappingURL=PolicyTemplateContainersApi.js.map