"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclProductLinkagesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AclProductLinkages_1 = require("./AclProductLinkages");
const AclProductLinkagesRequestBuilder_1 = require("./AclProductLinkagesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AclProductLinkagesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AclProductLinkages_1.AclProductLinkages;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new AclProductLinkagesRequestBuilder_1.AclProductLinkagesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AclProductLinkages_1.AclProductLinkages, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link devportalRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEVPORTAL_RULE_ID: fieldBuilder.buildEdmTypeField('devportalRuleId', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_ID: fieldBuilder.buildEdmTypeField('entityId', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_TYPE: fieldBuilder.buildEdmTypeField('entityType', 'Edm.String', true),
                /**
                 * Static representation of the {@link isPublished} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PUBLISHED: fieldBuilder.buildEdmTypeField('isPublished', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('operation', 'Edm.String', true),
                /**
                 * Static representation of the {@link permissionSet} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PERMISSION_SET: fieldBuilder.buildEdmTypeField('permissionSet', 'Edm.String', true),
                /**
                 * Static representation of the {@link ruleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RULE_ID: fieldBuilder.buildEdmTypeField('ruleId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', AclProductLinkages_1.AclProductLinkages)
            };
        }
        return this._schema;
    }
}
exports.AclProductLinkagesApi = AclProductLinkagesApi;
//# sourceMappingURL=AclProductLinkagesApi.js.map