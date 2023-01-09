"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationAdditionalPropertys = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ApplicationAdditionalPropertys" of service "apiportal".
 */
class ApplicationAdditionalPropertys extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApplicationAdditionalPropertys = ApplicationAdditionalPropertys;
/**
 * Technical entity name for ApplicationAdditionalPropertys.
 */
ApplicationAdditionalPropertys._entityName = 'ApplicationAdditionalPropertys';
/**
 * Default url path for the according service.
 */
ApplicationAdditionalPropertys._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApplicationAdditionalPropertys entity
 */
ApplicationAdditionalPropertys._keys = ['entityId', 'name'];
//# sourceMappingURL=ApplicationAdditionalPropertys.js.map