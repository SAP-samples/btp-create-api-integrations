"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplatePolicys = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TemplatePolicys" of service "apiportal".
 */
class TemplatePolicys extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TemplatePolicys = TemplatePolicys;
/**
 * Technical entity name for TemplatePolicys.
 */
TemplatePolicys._entityName = 'TemplatePolicys';
/**
 * Default url path for the according service.
 */
TemplatePolicys._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the TemplatePolicys entity
 */
TemplatePolicys._keys = ['id'];
//# sourceMappingURL=TemplatePolicys.js.map