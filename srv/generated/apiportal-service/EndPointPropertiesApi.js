"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPointPropertiesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const EndPointProperties_1 = require("./EndPointProperties");
const EndPointPropertiesRequestBuilder_1 = require("./EndPointPropertiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class EndPointPropertiesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = EndPointProperties_1.EndPointProperties;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROXY_END_POINT: new odata_v2_1.OneToOneLink('proxyEndPoint', this, linkedApis[0]),
            TARGET_END_POINT: new odata_v2_1.OneToOneLink('targetEndPoint', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new EndPointPropertiesRequestBuilder_1.EndPointPropertiesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(EndPointProperties_1.EndPointProperties, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkProxyendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_PROXYENDPOINT_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link fkTargetendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_TARGETENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_TARGETENDPOINT_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('value', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', EndPointProperties_1.EndPointProperties)
            };
        }
        return this._schema;
    }
}
exports.EndPointPropertiesApi = EndPointPropertiesApi;
//# sourceMappingURL=EndPointPropertiesApi.js.map