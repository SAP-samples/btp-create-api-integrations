"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclProductLinkages = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ACLProductLinkages" of service "apiportal".
 */
class AclProductLinkages extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AclProductLinkages = AclProductLinkages;
/**
 * Technical entity name for AclProductLinkages.
 */
AclProductLinkages._entityName = 'ACLProductLinkages';
/**
 * Default url path for the according service.
 */
AclProductLinkages._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the AclProductLinkages entity
 */
AclProductLinkages._keys = ['ruleId'];
//# sourceMappingURL=AclProductLinkages.js.map