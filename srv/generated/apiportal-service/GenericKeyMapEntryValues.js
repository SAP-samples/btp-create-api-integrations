"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntryValues = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "GenericKeyMapEntryValues" of service "apiportal".
 */
class GenericKeyMapEntryValues extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.GenericKeyMapEntryValues = GenericKeyMapEntryValues;
/**
 * Technical entity name for GenericKeyMapEntryValues.
 */
GenericKeyMapEntryValues._entityName = 'GenericKeyMapEntryValues';
/**
 * Default url path for the according service.
 */
GenericKeyMapEntryValues._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the GenericKeyMapEntryValues entity
 */
GenericKeyMapEntryValues._keys = ['mapName', 'name', 'scope', 'scopeId'];
//# sourceMappingURL=GenericKeyMapEntryValues.js.map