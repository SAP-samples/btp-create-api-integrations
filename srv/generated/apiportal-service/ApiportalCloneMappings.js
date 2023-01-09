"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiportalCloneMappings = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ApiportalCloneMappings" of service "apiportal".
 */
class ApiportalCloneMappings extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiportalCloneMappings = ApiportalCloneMappings;
/**
 * Technical entity name for ApiportalCloneMappings.
 */
ApiportalCloneMappings._entityName = 'ApiportalCloneMappings';
/**
 * Default url path for the according service.
 */
ApiportalCloneMappings._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiportalCloneMappings entity
 */
ApiportalCloneMappings._keys = ['subaccountId'];
//# sourceMappingURL=ApiportalCloneMappings.js.map