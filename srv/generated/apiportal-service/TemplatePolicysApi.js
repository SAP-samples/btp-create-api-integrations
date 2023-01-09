"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatePolicysApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TemplatePolicys_1 = require("./TemplatePolicys");
const TemplatePolicysRequestBuilder_1 = require("./TemplatePolicysRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TemplatePolicysApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TemplatePolicys_1.TemplatePolicys;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            POLICY_TEMPLATE_CONTAINER: new odata_v2_1.OneToOneLink('policyTemplateContainer', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TemplatePolicysRequestBuilder_1.TemplatePolicysRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TemplatePolicys_1.TemplatePolicys, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link policyContent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POLICY_CONTENT: fieldBuilder.buildEdmTypeField('policy_content', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', TemplatePolicys_1.TemplatePolicys)
            };
        }
        return this._schema;
    }
}
exports.TemplatePolicysApi = TemplatePolicysApi;
//# sourceMappingURL=TemplatePolicysApi.js.map