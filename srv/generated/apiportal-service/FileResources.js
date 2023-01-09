"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileResources = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "FileResources" of service "apiportal".
 */
class FileResources extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.FileResources = FileResources;
/**
 * Technical entity name for FileResources.
 */
FileResources._entityName = 'FileResources';
/**
 * Default url path for the according service.
 */
FileResources._defaultServicePath = '/apiportal/api/1.0/Management.svc';
/**
 * All key fields of the FileResources entity
 */
FileResources._keys = ['id'];
//# sourceMappingURL=FileResources.js.map