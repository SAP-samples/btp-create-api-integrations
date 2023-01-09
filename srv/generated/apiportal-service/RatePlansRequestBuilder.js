"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlansRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const RatePlans_1 = require("./RatePlans");
/**
 * Request builder class for operations supported on the {@link RatePlans} entity.
 */
class RatePlansRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `RatePlans` entity based on its keys.
     * @param id Key property. See {@link RatePlans.id}.
     * @returns A request builder for creating requests to retrieve one `RatePlans` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `RatePlans` entities.
     * @returns A request builder for creating requests to retrieve all `RatePlans` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `RatePlans` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RatePlans`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `RatePlans`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RatePlans`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof RatePlans_1.RatePlans ? idOrEntity : { id: idOrEntity });
    }
}
exports.RatePlansRequestBuilder = RatePlansRequestBuilder;
//# sourceMappingURL=RatePlansRequestBuilder.js.map