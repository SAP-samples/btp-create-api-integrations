"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyMapEntryValues = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "KeyMapEntryValues" of service "apiportal".
 */
class KeyMapEntryValues extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.KeyMapEntryValues = KeyMapEntryValues;
/**
 * Technical entity name for KeyMapEntryValues.
 */
KeyMapEntryValues._entityName = 'KeyMapEntryValues';
/**
 * Default url path for the according service.
 */
KeyMapEntryValues._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the KeyMapEntryValues entity
 */
KeyMapEntryValues._keys = ['map_name', 'name'];
//# sourceMappingURL=KeyMapEntryValues.js.map