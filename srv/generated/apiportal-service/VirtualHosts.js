"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualHosts = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "VirtualHosts" of service "apiportal".
 */
class VirtualHosts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.VirtualHosts = VirtualHosts;
/**
 * Technical entity name for VirtualHosts.
 */
VirtualHosts._entityName = 'VirtualHosts';
/**
 * Default url path for the according service.
 */
VirtualHosts._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the VirtualHosts entity
 */
VirtualHosts._keys = ['id'];
//# sourceMappingURL=VirtualHosts.js.map