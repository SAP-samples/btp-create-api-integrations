"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiTargetEndPointsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiTargetEndPoints_1 = require("./ApiTargetEndPoints");
/**
 * Request builder class for operations supported on the {@link ApiTargetEndPoints} entity.
 */
class ApiTargetEndPointsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ApiTargetEndPoints` entity based on its keys.
     * @param id Key property. See {@link ApiTargetEndPoints.id}.
     * @returns A request builder for creating requests to retrieve one `ApiTargetEndPoints` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { id: id });
    }
    /**
     * Returns a request builder for querying all `ApiTargetEndPoints` entities.
     * @returns A request builder for creating requests to retrieve all `ApiTargetEndPoints` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiTargetEndPoints` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiTargetEndPoints`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ApiTargetEndPoints`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiTargetEndPoints`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ApiTargetEndPoints_1.ApiTargetEndPoints
            ? idOrEntity
            : { id: idOrEntity });
    }
}
exports.ApiTargetEndPointsRequestBuilder = ApiTargetEndPointsRequestBuilder;
//# sourceMappingURL=ApiTargetEndPointsRequestBuilder.js.map