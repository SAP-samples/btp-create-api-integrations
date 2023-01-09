"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTargetEndPoints = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APITargetEndPoints" of service "apiportal".
 */
class ApiTargetEndPoints extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiTargetEndPoints = ApiTargetEndPoints;
/**
 * Technical entity name for ApiTargetEndPoints.
 */
ApiTargetEndPoints._entityName = 'APITargetEndPoints';
/**
 * Default url path for the according service.
 */
ApiTargetEndPoints._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiTargetEndPoints entity
 */
ApiTargetEndPoints._keys = ['id'];
//# sourceMappingURL=ApiTargetEndPoints.js.map