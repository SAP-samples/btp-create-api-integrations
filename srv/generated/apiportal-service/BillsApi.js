"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Bills_1 = require("./Bills");
const BillsRequestBuilder_1 = require("./BillsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BillsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Bills_1.Bills;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BillsRequestBuilder_1.BillsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Bills_1.Bills, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link billDetails} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_DETAILS: fieldBuilder.buildEdmTypeField('billDetails', 'Edm.String', true),
                /**
                 * Static representation of the {@link billGeneratedAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_GENERATED_AT: fieldBuilder.buildEdmTypeField('billGeneratedAt', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link billGeneratedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_GENERATED_BY: fieldBuilder.buildEdmTypeField('billGeneratedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link billId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BILL_ID: fieldBuilder.buildEdmTypeField('billId', 'Edm.String', true),
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('currency', 'Edm.String', true),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                /**
                 * Static representation of the {@link emailId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_ID: fieldBuilder.buildEdmTypeField('emailId', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_ID: fieldBuilder.buildEdmTypeField('entityId', 'Edm.String', false),
                /**
                 * Static representation of the {@link entityName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_NAME: fieldBuilder.buildEdmTypeField('entityName', 'Edm.String', true),
                /**
                 * Static representation of the {@link entityType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY_TYPE: fieldBuilder.buildEdmTypeField('entityType', 'Edm.String', false),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('firstName', 'Edm.String', true),
                /**
                 * Static representation of the {@link fromDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FROM_DATE: fieldBuilder.buildEdmTypeField('fromDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link isoffboarded} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISOFFBOARDED: fieldBuilder.buildEdmTypeField('isoffboarded', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('lastName', 'Edm.String', true),
                /**
                 * Static representation of the {@link offboardedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OFFBOARDED_DATE: fieldBuilder.buildEdmTypeField('offboardedDate', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('status', 'Edm.String', true),
                /**
                 * Static representation of the {@link toDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TO_DATE: fieldBuilder.buildEdmTypeField('toDate', 'Edm.DateTime', false),
                /**
                 * Static representation of the {@link total} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TOTAL: fieldBuilder.buildEdmTypeField('total', 'Edm.Double', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Bills_1.Bills)
            };
        }
        return this._schema;
    }
}
exports.BillsApi = BillsApi;
//# sourceMappingURL=BillsApi.js.map