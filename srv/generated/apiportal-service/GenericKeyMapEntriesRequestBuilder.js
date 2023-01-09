"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericKeyMapEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const GenericKeyMapEntries_1 = require("./GenericKeyMapEntries");
/**
 * Request builder class for operations supported on the {@link GenericKeyMapEntries} entity.
 */
class GenericKeyMapEntriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `GenericKeyMapEntries` entity based on its keys.
     * @param name Key property. See {@link GenericKeyMapEntries.name}.
     * @param scope Key property. See {@link GenericKeyMapEntries.scope}.
     * @param scopeId Key property. See {@link GenericKeyMapEntries.scopeId}.
     * @returns A request builder for creating requests to retrieve one `GenericKeyMapEntries` entity based on its keys.
     */
    getByKey(name, scope, scopeId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            name: name,
            scope: scope,
            scopeId: scopeId
        });
    }
    /**
     * Returns a request builder for querying all `GenericKeyMapEntries` entities.
     * @returns A request builder for creating requests to retrieve all `GenericKeyMapEntries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `GenericKeyMapEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GenericKeyMapEntries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `GenericKeyMapEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GenericKeyMapEntries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity, scope, scopeId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof GenericKeyMapEntries_1.GenericKeyMapEntries
            ? nameOrEntity
            : {
                name: nameOrEntity,
                scope: scope,
                scopeId: scopeId
            });
    }
}
exports.GenericKeyMapEntriesRequestBuilder = GenericKeyMapEntriesRequestBuilder;
//# sourceMappingURL=GenericKeyMapEntriesRequestBuilder.js.map