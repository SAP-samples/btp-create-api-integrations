"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = exports.HistoryField = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * HistoryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class HistoryField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of HistoryField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, History, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link History.changedAt} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.changedAt = this._fieldBuilder.buildEdmTypeField('changed_at', 'Edm.DateTime', true);
        /**
         * Representation of the {@link History.changedBy} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.changedBy = this._fieldBuilder.buildEdmTypeField('changed_by', 'Edm.String', true);
        /**
         * Representation of the {@link History.createdAt} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.createdAt = this._fieldBuilder.buildEdmTypeField('created_at', 'Edm.DateTime', true);
        /**
         * Representation of the {@link History.createdBy} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.createdBy = this._fieldBuilder.buildEdmTypeField('created_by', 'Edm.String', true);
    }
}
exports.HistoryField = HistoryField;
var History;
(function (History) {
    /**
     * Metadata information on all properties of the `History` complex type.
     */
    History._propertyMetadata = [
        {
            originalName: 'changed_at',
            name: 'changedAt',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'changed_by',
            name: 'changedBy',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'created_at',
            name: 'createdAt',
            type: 'Edm.DateTime',
            isCollection: false
        },
        {
            originalName: 'created_by',
            name: 'createdBy',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(History = exports.History || (exports.History = {}));
//# sourceMappingURL=History.js.map