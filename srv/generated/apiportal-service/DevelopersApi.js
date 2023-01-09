"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Developers_1 = require("./Developers");
const DevelopersRequestBuilder_1 = require("./DevelopersRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DevelopersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Developers_1.Developers;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            APPLICATIONS: new odata_v2_1.Link('applications', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new DevelopersRequestBuilder_1.DevelopersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Developers_1.Developers, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link country} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRY: fieldBuilder.buildEdmTypeField('country', 'Edm.String', true),
                /**
                 * Static representation of the {@link emailId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EMAIL_ID: fieldBuilder.buildEdmTypeField('emailId', 'Edm.String', false),
                /**
                 * Static representation of the {@link firstName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FIRST_NAME: fieldBuilder.buildEdmTypeField('firstName', 'Edm.String', false),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_NAME: fieldBuilder.buildEdmTypeField('lastName', 'Edm.String', false),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Developers_1.Developers)
            };
        }
        return this._schema;
    }
}
exports.DevelopersApi = DevelopersApi;
//# sourceMappingURL=DevelopersApi.js.map