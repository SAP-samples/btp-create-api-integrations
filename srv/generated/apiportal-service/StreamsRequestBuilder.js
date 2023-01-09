"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Streams_1 = require("./Streams");
/**
 * Request builder class for operations supported on the {@link Streams} entity.
 */
class StreamsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Streams` entity based on its keys.
     * @param id Key property. See {@link Streams.id}.
     * @returns A request builder for creating requests to retrieve one `Streams` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `Streams` entities.
     * @returns A request builder for creating requests to retrieve all `Streams` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Streams` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Streams`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Streams`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Streams`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Streams_1.Streams ? idOrEntity : { id: idOrEntity });
    }
}
exports.StreamsRequestBuilder = StreamsRequestBuilder;
//# sourceMappingURL=StreamsRequestBuilder.js.map