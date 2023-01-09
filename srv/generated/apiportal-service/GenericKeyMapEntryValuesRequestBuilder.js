"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntryValuesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const GenericKeyMapEntryValues_1 = require("./GenericKeyMapEntryValues");
/**
 * Request builder class for operations supported on the {@link GenericKeyMapEntryValues} entity.
 */
class GenericKeyMapEntryValuesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `GenericKeyMapEntryValues` entity based on its keys.
     * @param mapName Key property. See {@link GenericKeyMapEntryValues.mapName}.
     * @param name Key property. See {@link GenericKeyMapEntryValues.name}.
     * @param scope Key property. See {@link GenericKeyMapEntryValues.scope}.
     * @param scopeId Key property. See {@link GenericKeyMapEntryValues.scopeId}.
     * @returns A request builder for creating requests to retrieve one `GenericKeyMapEntryValues` entity based on its keys.
     */
    getByKey(mapName, name, scope, scopeId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            mapName: mapName,
            name: name,
            scope: scope,
            scopeId: scopeId
        });
    }
    /**
     * Returns a request builder for querying all `GenericKeyMapEntryValues` entities.
     * @returns A request builder for creating requests to retrieve all `GenericKeyMapEntryValues` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `GenericKeyMapEntryValues` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GenericKeyMapEntryValues`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `GenericKeyMapEntryValues`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GenericKeyMapEntryValues`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(mapNameOrEntity, name, scope, scopeId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, mapNameOrEntity instanceof GenericKeyMapEntryValues_1.GenericKeyMapEntryValues
            ? mapNameOrEntity
            : {
                mapName: mapNameOrEntity,
                name: name,
                scope: scope,
                scopeId: scopeId
            });
    }
}
exports.GenericKeyMapEntryValuesRequestBuilder = GenericKeyMapEntryValuesRequestBuilder;
//# sourceMappingURL=GenericKeyMapEntryValuesRequestBuilder.js.map