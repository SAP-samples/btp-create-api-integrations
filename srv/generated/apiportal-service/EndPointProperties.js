"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndPointProperties = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EndPointProperties" of service "apiportal".
 */
class EndPointProperties extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.EndPointProperties = EndPointProperties;
/**
 * Technical entity name for EndPointProperties.
 */
EndPointProperties._entityName = 'EndPointProperties';
/**
 * Default url path for the according service.
 */
EndPointProperties._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the EndPointProperties entity
 */
EndPointProperties._keys = ['id'];
//# sourceMappingURL=EndPointProperties.js.map