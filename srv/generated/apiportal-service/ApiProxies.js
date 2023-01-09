"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxies = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIProxies" of service "apiportal".
 */
class ApiProxies extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiProxies = ApiProxies;
/**
 * Technical entity name for ApiProxies.
 */
ApiProxies._entityName = 'APIProxies';
/**
 * Default url path for the according service.
 */
ApiProxies._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiProxies entity
 */
ApiProxies._keys = ['name'];
//# sourceMappingURL=ApiProxies.js.map