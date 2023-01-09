"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadBalancerConfigurations = exports.LoadBalancerConfigurationsField = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const HealthMonitor_1 = require("./HealthMonitor");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * LoadBalancerConfigurationsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class LoadBalancerConfigurationsField extends odata_v2_1.ComplexTypeField {
    /**
     * Creates an instance of LoadBalancerConfigurationsField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, LoadBalancerConfigurations, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        /**
         * Representation of the {@link LoadBalancerConfigurations.algorithm} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.algorithm = this._fieldBuilder.buildEdmTypeField('algorithm', 'Edm.String', true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.fallBackServer} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.fallBackServer = this._fieldBuilder.buildEdmTypeField('fallBackServer', 'Edm.String', true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.healthMonitor} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.healthMonitor = this._fieldBuilder.buildComplexTypeField('HealthMonitor', HealthMonitor_1.HealthMonitorField, true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.isRetry} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.isRetry = this._fieldBuilder.buildEdmTypeField('isRetry', 'Edm.Boolean', true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.maxFailures} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.maxFailures = this._fieldBuilder.buildEdmTypeField('maxFailures', 'Edm.Int32', true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.serverUnhealthyResponseCode} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.serverUnhealthyResponseCode = this._fieldBuilder.buildEdmTypeField('serverUnhealthyResponseCode', 'Edm.String', true);
        /**
         * Representation of the {@link LoadBalancerConfigurations.weigths} property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        this.weigths = this._fieldBuilder.buildEdmTypeField('weigths', 'Edm.String', true);
    }
}
exports.LoadBalancerConfigurationsField = LoadBalancerConfigurationsField;
var LoadBalancerConfigurations;
(function (LoadBalancerConfigurations) {
    /**
     * Metadata information on all properties of the `LoadBalancerConfigurations` complex type.
     */
    LoadBalancerConfigurations._propertyMetadata = [
        {
            originalName: 'algorithm',
            name: 'algorithm',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'fallBackServer',
            name: 'fallBackServer',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'HealthMonitor',
            name: 'healthMonitor',
            type: HealthMonitor_1.HealthMonitor,
            isCollection: false
        },
        {
            originalName: 'isRetry',
            name: 'isRetry',
            type: 'Edm.Boolean',
            isCollection: false
        },
        {
            originalName: 'maxFailures',
            name: 'maxFailures',
            type: 'Edm.Int32',
            isCollection: false
        },
        {
            originalName: 'serverUnhealthyResponseCode',
            name: 'serverUnhealthyResponseCode',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'weigths',
            name: 'weigths',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(LoadBalancerConfigurations = exports.LoadBalancerConfigurations || (exports.LoadBalancerConfigurations = {}));
//# sourceMappingURL=LoadBalancerConfigurations.js.map