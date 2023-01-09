"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streams = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Streams" of service "apiportal".
 */
class Streams extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Streams = Streams;
/**
 * Technical entity name for Streams.
 */
Streams._entityName = 'Streams';
/**
 * Default url path for the according service.
 */
Streams._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Streams entity
 */
Streams._keys = ['id'];
//# sourceMappingURL=Streams.js.map