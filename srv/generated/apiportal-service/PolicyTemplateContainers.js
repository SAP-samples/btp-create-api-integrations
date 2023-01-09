"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyTemplateContainers = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PolicyTemplateContainers" of service "apiportal".
 */
class PolicyTemplateContainers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PolicyTemplateContainers = PolicyTemplateContainers;
/**
 * Technical entity name for PolicyTemplateContainers.
 */
PolicyTemplateContainers._entityName = 'PolicyTemplateContainers';
/**
 * Default url path for the according service.
 */
PolicyTemplateContainers._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the PolicyTemplateContainers entity
 */
PolicyTemplateContainers._keys = ['name'];
//# sourceMappingURL=PolicyTemplateContainers.js.map