"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProductsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiProducts_1 = require("./ApiProducts");
/**
 * Request builder class for operations supported on the {@link ApiProducts} entity.
 */
class ApiProductsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ApiProducts` entity based on its keys.
     * @param name Key property. See {@link ApiProducts.name}.
     * @returns A request builder for creating requests to retrieve one `ApiProducts` entity based on its keys.
     */
    getByKey(name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            name: name
        });
    }
    /**
     * Returns a request builder for querying all `ApiProducts` entities.
     * @returns A request builder for creating requests to retrieve all `ApiProducts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiProducts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiProducts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ApiProducts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiProducts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof ApiProducts_1.ApiProducts
            ? nameOrEntity
            : { name: nameOrEntity });
    }
}
exports.ApiProductsRequestBuilder = ApiProductsRequestBuilder;
//# sourceMappingURL=ApiProductsRequestBuilder.js.map