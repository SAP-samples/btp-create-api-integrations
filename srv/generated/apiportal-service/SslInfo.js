"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SslInfo = exports.SslInfoField = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * SslInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class SslInfoField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of SslInfoField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, SslInfo, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link SslInfo.ciphers} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.ciphers = this._fieldBuilder.buildEdmTypeField('ciphers', 'Edm.String', true);
        /**
         * Representation of the {@link SslInfo.clientAuthEnabled} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.clientAuthEnabled = this._fieldBuilder.buildEdmTypeField('clientAuthEnabled', 'Edm.Boolean', true);
        /**
         * Representation of the {@link SslInfo.enabled} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.enabled = this._fieldBuilder.buildEdmTypeField('enabled', 'Edm.Boolean', true);
        /**
         * Representation of the {@link SslInfo.ignoreValidationErrors} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.ignoreValidationErrors = this._fieldBuilder.buildEdmTypeField('ignoreValidationErrors', 'Edm.Boolean', true);
        /**
         * Representation of the {@link SslInfo.keyAlias} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.keyAlias = this._fieldBuilder.buildEdmTypeField('keyAlias', 'Edm.String', true);
        /**
         * Representation of the {@link SslInfo.keyStore} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.keyStore = this._fieldBuilder.buildEdmTypeField('keyStore', 'Edm.String', true);
        /**
         * Representation of the {@link SslInfo.protocols} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.protocols = this._fieldBuilder.buildEdmTypeField('protocols', 'Edm.String', true);
        /**
         * Representation of the {@link SslInfo.trustStore} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.trustStore = this._fieldBuilder.buildEdmTypeField('trustStore', 'Edm.String', true);
    }
}
exports.SslInfoField = SslInfoField;
var SslInfo;
(function (SslInfo) {
    /**
     * Metadata information on all properties of the `SslInfo` complex type.
     */
    SslInfo._propertyMetadata = [
        {
            originalName: 'ciphers',
            name: 'ciphers',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'clientAuthEnabled',
            name: 'clientAuthEnabled',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'enabled',
            name: 'enabled',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'ignoreValidationErrors',
            name: 'ignoreValidationErrors',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'keyAlias',
            name: 'keyAlias',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'keyStore',
            name: 'keyStore',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'protocols',
            name: 'protocols',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'trustStore',
            name: 'trustStore',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(SslInfo = exports.SslInfo || (exports.SslInfo = {}));
//# sourceMappingURL=SslInfo.js.map