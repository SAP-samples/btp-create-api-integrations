"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProxyEndPointsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiProxyEndPoints_1 = require("./ApiProxyEndPoints");
/**
 * Request builder class for operations supported on the {@link ApiProxyEndPoints} entity.
 */
class ApiProxyEndPointsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ApiProxyEndPoints` entity based on its keys.
     * @param id Key property. See {@link ApiProxyEndPoints.id}.
     * @returns A request builder for creating requests to retrieve one `ApiProxyEndPoints` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `ApiProxyEndPoints` entities.
     * @returns A request builder for creating requests to retrieve all `ApiProxyEndPoints` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiProxyEndPoints` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiProxyEndPoints`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ApiProxyEndPoints`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiProxyEndPoints`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ApiProxyEndPoints_1.ApiProxyEndPoints ? idOrEntity : { id: idOrEntity });
    }
}
exports.ApiProxyEndPointsRequestBuilder = ApiProxyEndPointsRequestBuilder;
//# sourceMappingURL=ApiProxyEndPointsRequestBuilder.js.map