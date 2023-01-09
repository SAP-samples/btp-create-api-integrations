"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyMapEntries = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "KeyMapEntries" of service "apiportal".
 */
class KeyMapEntries extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.KeyMapEntries = KeyMapEntries;
/**
 * Technical entity name for KeyMapEntries.
 */
KeyMapEntries._entityName = 'KeyMapEntries';
/**
 * Default url path for the according service.
 */
KeyMapEntries._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the KeyMapEntries entity
 */
KeyMapEntries._keys = ['name'];
//# sourceMappingURL=KeyMapEntries.js.map