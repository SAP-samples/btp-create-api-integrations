"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxyEndPoints = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIProxyEndPoints" of service "apiportal".
 */
class ApiProxyEndPoints extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiProxyEndPoints = ApiProxyEndPoints;
/**
 * Technical entity name for ApiProxyEndPoints.
 */
ApiProxyEndPoints._entityName = 'APIProxyEndPoints';
/**
 * Default url path for the according service.
 */
ApiProxyEndPoints._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiProxyEndPoints entity
 */
ApiProxyEndPoints._keys = ['id'];
//# sourceMappingURL=ApiProxyEndPoints.js.map