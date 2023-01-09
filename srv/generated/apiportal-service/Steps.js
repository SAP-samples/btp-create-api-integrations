"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Steps = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Steps" of service "apiportal".
 */
class Steps extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Steps = Steps;
/**
 * Technical entity name for Steps.
 */
Steps._entityName = 'Steps';
/**
 * Default url path for the according service.
 */
Steps._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Steps entity
 */
Steps._keys = ['id'];
//# sourceMappingURL=Steps.js.map