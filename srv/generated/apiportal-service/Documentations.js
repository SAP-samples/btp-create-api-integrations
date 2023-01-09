"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documentations = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Documentations" of service "apiportal".
 */
class Documentations extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Documentations = Documentations;
/**
 * Technical entity name for Documentations.
 */
Documentations._entityName = 'Documentations';
/**
 * Default url path for the according service.
 */
Documentations._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Documentations entity
 */
Documentations._keys = ['id', 'locale'];
//# sourceMappingURL=Documentations.js.map