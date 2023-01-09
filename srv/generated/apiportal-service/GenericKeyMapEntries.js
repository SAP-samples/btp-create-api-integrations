"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntries = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "GenericKeyMapEntries" of service "apiportal".
 */
class GenericKeyMapEntries extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.GenericKeyMapEntries = GenericKeyMapEntries;
/**
 * Technical entity name for GenericKeyMapEntries.
 */
GenericKeyMapEntries._entityName = 'GenericKeyMapEntries';
/**
 * Default url path for the according service.
 */
GenericKeyMapEntries._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the GenericKeyMapEntries entity
 */
GenericKeyMapEntries._keys = ['name', 'scope', 'scopeId'];
//# sourceMappingURL=GenericKeyMapEntries.js.map