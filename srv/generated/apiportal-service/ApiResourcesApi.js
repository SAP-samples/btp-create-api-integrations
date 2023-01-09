"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResourcesApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiResources_1 = require("./ApiResources");
const ApiResourcesRequestBuilder_1 = require("./ApiResourcesRequestBuilder");
const History_1 = require("./History");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiResourcesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ApiResources_1.ApiResources;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            API_PROXY_END_POINT: new odata_v2_1.OneToOneLink('apiProxyEndPoint', this, linkedApis[0]),
            DOCUMENTATIONS: new odata_v2_1.Link('documentations', this, linkedApis[1]),
            RESOURCES: new odata_v2_1.Link('resources', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new ApiResourcesRequestBuilder_1.ApiResourcesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiResources_1.ApiResources, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkProxyendpointId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField('FK_PROXYENDPOINT_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link canShowDelete} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_DELETE: fieldBuilder.buildEdmTypeField('canShowDelete', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowGet} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_GET: fieldBuilder.buildEdmTypeField('canShowGet', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowHead} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_HEAD: fieldBuilder.buildEdmTypeField('canShowHead', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowOption} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_OPTION: fieldBuilder.buildEdmTypeField('canShowOption', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowPatch} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_PATCH: fieldBuilder.buildEdmTypeField('canShowPatch', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowPost} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_POST: fieldBuilder.buildEdmTypeField('canShowPost', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link canShowPut} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CAN_SHOW_PUT: fieldBuilder.buildEdmTypeField('canShowPut', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link isDeleteChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_DELETE_CHECKED: fieldBuilder.buildEdmTypeField('isDeleteChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isGetChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_GET_CHECKED: fieldBuilder.buildEdmTypeField('isGetChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isHeadChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_HEAD_CHECKED: fieldBuilder.buildEdmTypeField('isHeadChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isOptionChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_OPTION_CHECKED: fieldBuilder.buildEdmTypeField('isOptionChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isPatchChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PATCH_CHECKED: fieldBuilder.buildEdmTypeField('isPatchChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isPostChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_POST_CHECKED: fieldBuilder.buildEdmTypeField('isPostChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link isPutChecked} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_PUT_CHECKED: fieldBuilder.buildEdmTypeField('isPutChecked', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link lifeCycle} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIFE_CYCLE: fieldBuilder.buildComplexTypeField('life_cycle', History_1.HistoryField, true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link proxyEndPointName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROXY_END_POINT_NAME: fieldBuilder.buildEdmTypeField('proxyEndPointName', 'Edm.String', true),
                /**
                 * Static representation of the {@link resourcePath} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESOURCE_PATH: fieldBuilder.buildEdmTypeField('resource_path', 'Edm.String', true),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiResources_1.ApiResources)
            };
        }
        return this._schema;
    }
}
exports.ApiResourcesApi = ApiResourcesApi;
//# sourceMappingURL=ApiResourcesApi.js.map