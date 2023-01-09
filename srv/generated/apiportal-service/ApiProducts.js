"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProducts = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIProducts" of service "apiportal".
 */
class ApiProducts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ApiProducts = ApiProducts;
/**
 * Technical entity name for ApiProducts.
 */
ApiProducts._entityName = 'APIProducts';
/**
 * Default url path for the according service.
 */
ApiProducts._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ApiProducts entity
 */
ApiProducts._keys = ['name'];
//# sourceMappingURL=ApiProducts.js.map