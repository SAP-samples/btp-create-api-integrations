"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developers = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Developers" of service "apiportal".
 */
class Developers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Developers = Developers;
/**
 * Technical entity name for Developers.
 */
Developers._entityName = 'Developers';
/**
 * Default url path for the according service.
 */
Developers._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Developers entity
 */
Developers._keys = ['id'];
//# sourceMappingURL=Developers.js.map