"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowRules = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "FlowRules" of service "apiportal".
 */
class FlowRules extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.FlowRules = FlowRules;
/**
 * Technical entity name for FlowRules.
 */
FlowRules._entityName = 'FlowRules';
/**
 * Default url path for the according service.
 */
FlowRules._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the FlowRules entity
 */
FlowRules._keys = ['id'];
//# sourceMappingURL=FlowRules.js.map