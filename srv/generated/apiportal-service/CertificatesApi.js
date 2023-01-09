"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Certificates_1 = require("./Certificates");
const CertificatesRequestBuilder_1 = require("./CertificatesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CertificatesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Certificates_1.Certificates;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CERTIFICATE_STORE: new odata_v2_1.OneToOneLink('certificateStore', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new CertificatesRequestBuilder_1.CertificatesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Certificates_1.Certificates, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link certName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CERT_NAME: fieldBuilder.buildEdmTypeField('certName', 'Edm.String', true),
                /**
                 * Static representation of the {@link csKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CS_KEY: fieldBuilder.buildEdmTypeField('csKey', 'Edm.String', true),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                /**
                 * Static representation of the {@link format} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FORMAT: fieldBuilder.buildEdmTypeField('format', 'Edm.String', true),
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
                 * Static representation of the {@link storeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORE_NAME: fieldBuilder.buildEdmTypeField('storeName', 'Edm.String', false),
                /**
                 * Static representation of the {@link password} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PASSWORD: fieldBuilder.buildEdmTypeField('password', 'Edm.String', true),
                /**
                 * Static representation of the {@link storeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STORE_TYPE: fieldBuilder.buildEdmTypeField('storeType', 'Edm.String', true),
                /**
                 * Static representation of the {@link expiryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRY_DATE: fieldBuilder.buildEdmTypeField('expiryDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link issuerEmail} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ISSUER_EMAIL: fieldBuilder.buildEdmTypeField('issuerEmail', 'Edm.String', true),
                /**
                 * Static representation of the {@link subjectEmail} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBJECT_EMAIL: fieldBuilder.buildEdmTypeField('subjectEmail', 'Edm.String', true),
                /**
                 * Static representation of the {@link signAlgName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SIGN_ALG_NAME: fieldBuilder.buildEdmTypeField('signAlgName', 'Edm.String', true),
                /**
                 * Static representation of the {@link isValid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_VALID: fieldBuilder.buildEdmTypeField('isValid', 'Edm.String', true),
                /**
                 * Static representation of the {@link validFrom} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALID_FROM: fieldBuilder.buildEdmTypeField('validFrom', 'Edm.String', true),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
                /**
                 * Static representation of the {@link content} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.Binary', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Certificates_1.Certificates)
            };
        }
        return this._schema;
    }
}
exports.CertificatesApi = CertificatesApi;
//# sourceMappingURL=CertificatesApi.js.map