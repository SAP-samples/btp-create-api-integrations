"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Resources" of service "apiportal".
 */
class Resources extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Resources = Resources;
/**
 * Technical entity name for Resources.
 */
Resources._entityName = 'Resources';
/**
 * Default url path for the according service.
 */
Resources._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Resources entity
 */
Resources._keys = ['locale', 'object_id', 'type'];
//# sourceMappingURL=Resources.js.map