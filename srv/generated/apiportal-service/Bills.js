"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bills = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Bills" of service "apiportal".
 */
class Bills extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Bills = Bills;
/**
 * Technical entity name for Bills.
 */
Bills._entityName = 'Bills';
/**
 * Default url path for the according service.
 */
Bills._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the Bills entity
 */
Bills._keys = ['entityId', 'entityType', 'fromDate', 'toDate'];
//# sourceMappingURL=Bills.js.map