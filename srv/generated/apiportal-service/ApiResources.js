"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResources = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIResources" of service "apiportal".
 */
class ApiResources extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiResources = ApiResources;
/**
 * Technical entity name for ApiResources.
 */
ApiResources._entityName = 'APIResources';
/**
 * Default url path for the according service.
 */
ApiResources._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiResources entity
 */
ApiResources._keys = ['id'];
//# sourceMappingURL=ApiResources.js.map