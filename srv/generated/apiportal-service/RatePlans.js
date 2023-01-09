"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlans = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "RatePlans" of service "apiportal".
 */
class RatePlans extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.RatePlans = RatePlans;
/**
 * Technical entity name for RatePlans.
 */
RatePlans._entityName = 'RatePlans';
/**
 * Default url path for the according service.
 */
RatePlans._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the RatePlans entity
 */
RatePlans._keys = ['id'];
//# sourceMappingURL=RatePlans.js.map