"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheResourcesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CacheResources_1 = require("./CacheResources");
/**
 * Request builder class for operations supported on the {@link CacheResources} entity.
 */
class CacheResourcesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `CacheResources` entity based on its keys.
     * @param name Key property. See {@link CacheResources.name}.
     * @returns A request builder for creating requests to retrieve one `CacheResources` entity based on its keys.
     */
    getByKey(name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            name: name
        });
    }
    /**
     * Returns a request builder for querying all `CacheResources` entities.
     * @returns A request builder for creating requests to retrieve all `CacheResources` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CacheResources` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CacheResources`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `CacheResources`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CacheResources`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof CacheResources_1.CacheResources
            ? nameOrEntity
            : { name: nameOrEntity });
    }
}
exports.CacheResourcesRequestBuilder = CacheResourcesRequestBuilder;
//# sourceMappingURL=CacheResourcesRequestBuilder.js.map