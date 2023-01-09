"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthMonitor = exports.HealthMonitorField = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * HealthMonitorField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class HealthMonitorField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of HealthMonitorField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, HealthMonitor, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link HealthMonitor.httpMonitor} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.httpMonitor = this._fieldBuilder.buildEdmTypeField('httpMonitor', 'Edm.String', true);
        /**
         * Representation of the {@link HealthMonitor.intervalInSec} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.intervalInSec = this._fieldBuilder.buildEdmTypeField('intervalInSec', 'Edm.Int32', true);
        /**
         * Representation of the {@link HealthMonitor.isEnabled} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.isEnabled = this._fieldBuilder.buildEdmTypeField('isEnabled', 'Edm.Boolean', true);
        /**
         * Representation of the {@link HealthMonitor.tcpMonitor} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.tcpMonitor = this._fieldBuilder.buildEdmTypeField('tcpMonitor', 'Edm.String', true);
    }
}
exports.HealthMonitorField = HealthMonitorField;
var HealthMonitor;
(function (HealthMonitor) {
    /**
     * Metadata information on all properties of the `HealthMonitor` complex type.
     */
    HealthMonitor._propertyMetadata = [
        {
            originalName: 'httpMonitor',
            name: 'httpMonitor',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'intervalInSec',
            name: 'intervalInSec',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'isEnabled',
            name: 'isEnabled',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'tcpMonitor',
            name: 'tcpMonitor',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(HealthMonitor = exports.HealthMonitor || (exports.HealthMonitor = {}));
//# sourceMappingURL=HealthMonitor.js.map