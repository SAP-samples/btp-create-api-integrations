"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpirySettings = exports.ExpirySettingsField = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * ExpirySettingsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class ExpirySettingsField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of ExpirySettingsField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, ExpirySettings, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link ExpirySettings.expiryDate} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.expiryDate = this._fieldBuilder.buildEdmTypeField('expiry_date', 'Edm.DateTime', true);
        /**
         * Representation of the {@link ExpirySettings.expirySettingsOverrideDisabled} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.expirySettingsOverrideDisabled = this._fieldBuilder.buildEdmTypeField('expiry_settings_override_disabled', 'Edm.Boolean', true);
        /**
         * Representation of the {@link ExpirySettings.timeOut} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.timeOut = this._fieldBuilder.buildEdmTypeField('time_out', 'Edm.Int32', true);
        /**
         * Representation of the {@link ExpirySettings.timeOutDay} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.timeOutDay = this._fieldBuilder.buildEdmTypeField('time_out_day', 'Edm.String', true);
    }
}
exports.ExpirySettingsField = ExpirySettingsField;
var ExpirySettings;
(function (ExpirySettings) {
    /**
     * Metadata information on all properties of the `ExpirySettings` complex type.
     */
    ExpirySettings._propertyMetadata = [
        {
            originalName: 'expiry_date',
            name: 'expiryDate',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'expiry_settings_override_disabled',
            name: 'expirySettingsOverrideDisabled',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'time_out',
            name: 'timeOut',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'time_out_day',
            name: 'timeOutDay',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(ExpirySettings = exports.ExpirySettings || (exports.ExpirySettings = {}));
//# sourceMappingURL=ExpirySettings.js.map