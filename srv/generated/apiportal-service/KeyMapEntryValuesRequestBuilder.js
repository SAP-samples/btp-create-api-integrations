"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyMapEntryValuesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const KeyMapEntryValues_1 = require("./KeyMapEntryValues");
/**
 * Request builder class for operations supported on the {@link KeyMapEntryValues} entity.
 */
class KeyMapEntryValuesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `KeyMapEntryValues` entity based on its keys.
     * @param mapName Key property. See {@link KeyMapEntryValues.mapName}.
     * @param name Key property. See {@link KeyMapEntryValues.name}.
     * @returns A request builder for creating requests to retrieve one `KeyMapEntryValues` entity based on its keys.
     */
    getByKey(mapName, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            map_name: mapName,
            name: name
        });
    }
    /**
     * Returns a request builder for querying all `KeyMapEntryValues` entities.
     * @returns A request builder for creating requests to retrieve all `KeyMapEntryValues` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `KeyMapEntryValues` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `KeyMapEntryValues`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `KeyMapEntryValues`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `KeyMapEntryValues`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(mapNameOrEntity, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, mapNameOrEntity instanceof KeyMapEntryValues_1.KeyMapEntryValues
            ? mapNameOrEntity
            : {
                map_name: mapNameOrEntity,
                name: name
            });
    }
}
exports.KeyMapEntryValuesRequestBuilder = KeyMapEntryValuesRequestBuilder;
//# sourceMappingURL=KeyMapEntryValuesRequestBuilder.js.map