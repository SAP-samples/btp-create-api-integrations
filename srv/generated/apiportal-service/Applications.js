"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Applications = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Applications" of service "apiportal".
 */
class Applications extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Applications = Applications;
/**
 * Technical entity name for Applications.
 */
Applications._entityName = 'Applications';
/**
 * Default url path for the according service.
 */
Applications._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Applications entity
 */
Applications._keys = ['id'];
//# sourceMappingURL=Applications.js.map