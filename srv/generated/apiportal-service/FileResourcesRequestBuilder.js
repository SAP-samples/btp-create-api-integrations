"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileResourcesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const FileResources_1 = require("./FileResources");
/**
 * Request builder class for operations supported on the {@link FileResources} entity.
 */
class FileResourcesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `FileResources` entity based on its keys.
     * @param id Key property. See {@link FileResources.id}.
     * @returns A request builder for creating requests to retrieve one `FileResources` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `FileResources` entities.
     * @returns A request builder for creating requests to retrieve all `FileResources` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `FileResources` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FileResources`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `FileResources`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FileResources`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof FileResources_1.FileResources ? idOrEntity : { id: idOrEntity });
    }
}
exports.FileResourcesRequestBuilder = FileResourcesRequestBuilder;
//# sourceMappingURL=FileResourcesRequestBuilder.js.map