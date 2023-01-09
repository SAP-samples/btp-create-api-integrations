"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificates = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Certificates" of service "apiportal".
 */
class Certificates extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Certificates = Certificates;
/**
 * Technical entity name for Certificates.
 */
Certificates._entityName = 'Certificates';
/**
 * Default url path for the according service.
 */
Certificates._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Certificates entity
 */
Certificates._keys = ['name', 'storeName'];
//# sourceMappingURL=Certificates.js.map