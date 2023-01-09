"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiProductAdditionalPropertiesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiProductAdditionalProperties_1 = require("./ApiProductAdditionalProperties");
/**
 * Request builder class for operations supported on the {@link ApiProductAdditionalProperties} entity.
 */
class ApiProductAdditionalPropertiesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ApiProductAdditionalProperties` entity based on its keys.
     * @param entityId Key property. See {@link ApiProductAdditionalProperties.entityId}.
     * @param name Key property. See {@link ApiProductAdditionalProperties.name}.
     * @returns A request builder for creating requests to retrieve one `ApiProductAdditionalProperties` entity based on its keys.
     */
    getByKey(entityId, name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            entityId: entityId,
            name: name
        });
    }
    /**
     * Returns a request builder for querying all `ApiProductAdditionalProperties` entities.
     * @returns A request builder for creating requests to retrieve all `ApiProductAdditionalProperties` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiProductAdditionalProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiProductAdditionalProperties`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ApiProductAdditionalProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiProductAdditionalProperties`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(entityIdOrEntity, name) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, entityIdOrEntity instanceof ApiProductAdditionalProperties_1.ApiProductAdditionalProperties
            ? entityIdOrEntity
            : {
                entityId: entityIdOrEntity,
                name: name
            });
    }
}
exports.ApiProductAdditionalPropertiesRequestBuilder = ApiProductAdditionalPropertiesRequestBuilder;
//# sourceMappingURL=ApiProductAdditionalPropertiesRequestBuilder.js.map