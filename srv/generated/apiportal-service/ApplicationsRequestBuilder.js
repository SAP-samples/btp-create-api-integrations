"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Applications_1 = require("./Applications");
/**
 * Request builder class for operations supported on the {@link Applications} entity.
 */
class ApplicationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Applications` entity based on its keys.
     * @param id Key property. See {@link Applications.id}.
     * @returns A request builder for creating requests to retrieve one `Applications` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `Applications` entities.
     * @returns A request builder for creating requests to retrieve all `Applications` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Applications` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Applications`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Applications`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Applications`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Applications_1.Applications ? idOrEntity : { id: idOrEntity });
    }
}
exports.ApplicationsRequestBuilder = ApplicationsRequestBuilder;
//# sourceMappingURL=ApplicationsRequestBuilder.js.map