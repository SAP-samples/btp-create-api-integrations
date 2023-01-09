"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStoresApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CertificateStores_1 = require("./CertificateStores");
const CertificateStoresRequestBuilder_1 = require("./CertificateStoresRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CertificateStoresApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = CertificateStores_1.CertificateStores;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CERTIFICATES: new odata_v2_1.Link('certificates', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new CertificateStoresRequestBuilder_1.CertificateStoresRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CertificateStores_1.CertificateStores, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link storeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORE_TYPE: fieldBuilder.buildEdmTypeField('storeType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CertificateStores_1.CertificateStores)
            };
        }
        return this._schema;
    }
}
exports.CertificateStoresApi = CertificateStoresApi;
//# sourceMappingURL=CertificateStoresApi.js.map