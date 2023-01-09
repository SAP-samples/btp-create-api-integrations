"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProviders = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIProviders" of service "apiportal".
 */
class ApiProviders extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiProviders = ApiProviders;
/**
 * Technical entity name for ApiProviders.
 */
ApiProviders._entityName = 'APIProviders';
/**
 * Default url path for the according service.
 */
ApiProviders._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiProviders entity
 */
ApiProviders._keys = ['name'];
//# sourceMappingURL=ApiProviders.js.map