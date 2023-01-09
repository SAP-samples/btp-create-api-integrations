"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentPackageMappers = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ContentPackageMappers" of service "apiportal".
 */
class ContentPackageMappers extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ContentPackageMappers = ContentPackageMappers;
/**
 * Technical entity name for ContentPackageMappers.
 */
ContentPackageMappers._entityName = 'ContentPackageMappers';
/**
 * Default url path for the according service.
 */
ContentPackageMappers._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the ContentPackageMappers entity
 */
ContentPackageMappers._keys = ['targetId', 'targetType'];
//# sourceMappingURL=ContentPackageMappers.js.map