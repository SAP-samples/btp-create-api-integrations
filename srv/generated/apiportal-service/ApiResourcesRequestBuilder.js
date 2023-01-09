"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResourcesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiResources_1 = require("./ApiResources");
/**
 * Request builder class for operations supported on the {@link ApiResources} entity.
 */
class ApiResourcesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ApiResources` entity based on its keys.
     * @param id Key property. See {@link ApiResources.id}.
     * @returns A request builder for creating requests to retrieve one `ApiResources` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `ApiResources` entities.
     * @returns A request builder for creating requests to retrieve all `ApiResources` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiResources` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiResources`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ApiResources`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiResources`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ApiResources_1.ApiResources ? idOrEntity : { id: idOrEntity });
    }
}
exports.ApiResourcesRequestBuilder = ApiResourcesRequestBuilder;
//# sourceMappingURL=ApiResourcesRequestBuilder.js.map