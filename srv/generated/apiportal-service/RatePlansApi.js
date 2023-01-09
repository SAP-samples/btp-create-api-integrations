"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlansApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const RatePlans_1 = require("./RatePlans");
const RatePlansRequestBuilder_1 = require("./RatePlansRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class RatePlansApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = RatePlans_1.RatePlans;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PRODUCTS: new odata_v2_1.Link('apiProducts', this, linkedApis[0]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new RatePlansRequestBuilder_1.RatePlansRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(RatePlans_1.RatePlans, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link currency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY: fieldBuilder.buildEdmTypeField('currency', 'Edm.String', false),
                /**
                 * Static representation of the {@link frequency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FREQUENCY: fieldBuilder.buildEdmTypeField('frequency', 'Edm.String', false),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link isActive} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_ACTIVE: fieldBuilder.buildEdmTypeField('isActive', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isPublished} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PUBLISHED: fieldBuilder.buildEdmTypeField('isPublished', 'Edm.Boolean', false),
                /**
                 * Static representation of the {@link isSeasonal} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_SEASONAL: fieldBuilder.buildEdmTypeField('isSeasonal', 'Edm.Boolean', true),
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
                 * Static representation of the {@link rate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RATE: fieldBuilder.buildEdmTypeField('rate', 'Edm.String', true),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', true),
                /**
                 * Static representation of the {@link validFrom} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_FROM: fieldBuilder.buildEdmTypeField('validFrom', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link validTo} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_TO: fieldBuilder.buildEdmTypeField('validTo', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', RatePlans_1.RatePlans)
            };
        }
        return this._schema;
    }
}
exports.RatePlansApi = RatePlansApi;
//# sourceMappingURL=RatePlansApi.js.map