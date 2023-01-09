"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheResources = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CacheResources" of service "apiportal".
 */
class CacheResources extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CacheResources = CacheResources;
/**
 * Technical entity name for CacheResources.
 */
CacheResources._entityName = 'CacheResources';
/**
 * Default url path for the according service.
 */
CacheResources._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the CacheResources entity
 */
CacheResources._keys = ['name'];
//# sourceMappingURL=CacheResources.js.map