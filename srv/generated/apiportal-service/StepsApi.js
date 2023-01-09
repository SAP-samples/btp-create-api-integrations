"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Steps_1 = require("./Steps");
const StepsRequestBuilder_1 = require("./StepsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class StepsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Steps_1.Steps;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            DEFAULT_FAULT_RULE: new odata_v2_1.OneToOneLink('defaultFaultRule', this, linkedApis[0]),
            FAULT_RULE: new odata_v2_1.OneToOneLink('faultRule', this, linkedApis[1]),
            STREAM: new odata_v2_1.OneToOneLink('stream', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new StepsRequestBuilder_1.StepsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Steps_1.Steps, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link condition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONDITION: fieldBuilder.buildEdmTypeField('condition', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkDefaultfaultruleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_DEFAULTFAULTRULE_ID: fieldBuilder.buildEdmTypeField('FK_DEFAULTFAULTRULE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkFaultruleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_FAULTRULE_ID: fieldBuilder.buildEdmTypeField('FK_FAULTRULE_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link policyName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                POLICY_NAME: fieldBuilder.buildEdmTypeField('policy_name', 'Edm.String', true),
                /**
                 * Static representation of the {@link sequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link fkStreamId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_STREAM_ID: fieldBuilder.buildEdmTypeField('FK_STREAM_ID', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Steps_1.Steps)
            };
        }
        return this._schema;
    }
}
exports.StepsApi = StepsApi;
//# sourceMappingURL=StepsApi.js.map