"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProductAdditionalProperties = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIProductAdditionalProperties" of service "apiportal".
 */
class ApiProductAdditionalProperties extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiProductAdditionalProperties = ApiProductAdditionalProperties;
/**
 * Technical entity name for ApiProductAdditionalProperties.
 */
ApiProductAdditionalProperties._entityName = 'APIProductAdditionalProperties';
/**
 * Default url path for the according service.
 */
ApiProductAdditionalProperties._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiProductAdditionalProperties entity
 */
ApiProductAdditionalProperties._keys = ['entityId', 'name'];
//# sourceMappingURL=ApiProductAdditionalProperties.js.map