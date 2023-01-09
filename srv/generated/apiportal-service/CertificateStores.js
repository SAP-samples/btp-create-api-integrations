"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStores = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CertificateStores" of service "apiportal".
 */
class CertificateStores extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CertificateStores = CertificateStores;
/**
 * Technical entity name for CertificateStores.
 */
CertificateStores._entityName = 'CertificateStores';
/**
 * Default url path for the according service.
 */
CertificateStores._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the CertificateStores entity
 */
CertificateStores._keys = ['name'];
//# sourceMappingURL=CertificateStores.js.map