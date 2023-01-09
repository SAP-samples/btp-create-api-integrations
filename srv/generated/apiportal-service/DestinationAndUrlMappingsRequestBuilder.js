"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestinationAndUrlMappingsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DestinationAndUrlMappings_1 = require("./DestinationAndUrlMappings");
/**
 * Request builder class for operations supported on the {@link DestinationAndUrlMappings} entity.
 */
class DestinationAndUrlMappingsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `DestinationAndUrlMappings` entity based on its keys.
     * @param id Key property. See {@link DestinationAndUrlMappings.id}.
     * @returns A request builder for creating requests to retrieve one `DestinationAndUrlMappings` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { id: id });
    }
    /**
     * Returns a request builder for querying all `DestinationAndUrlMappings` entities.
     * @returns A request builder for creating requests to retrieve all `DestinationAndUrlMappings` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DestinationAndUrlMappings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DestinationAndUrlMappings`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `DestinationAndUrlMappings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DestinationAndUrlMappings`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof DestinationAndUrlMappings_1.DestinationAndUrlMappings
            ? idOrEntity
            : { id: idOrEntity });
    }
}
exports.DestinationAndUrlMappingsRequestBuilder = DestinationAndUrlMappingsRequestBuilder;
//# sourceMappingURL=DestinationAndUrlMappingsRequestBuilder.js.map