"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Resources_1 = require("./Resources");
/**
 * Request builder class for operations supported on the {@link Resources} entity.
 */
class ResourcesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Resources` entity based on its keys.
     * @param locale Key property. See {@link Resources.locale}.
     * @param objectId Key property. See {@link Resources.objectId}.
     * @param type Key property. See {@link Resources.type}.
     * @returns A request builder for creating requests to retrieve one `Resources` entity based on its keys.
     */
    getByKey(locale, objectId, type) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            locale: locale,
            object_id: objectId,
            type: type
        });
    }
    /**
     * Returns a request builder for querying all `Resources` entities.
     * @returns A request builder for creating requests to retrieve all `Resources` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Resources` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Resources`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Resources`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Resources`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(localeOrEntity, objectId, type) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, localeOrEntity instanceof Resources_1.Resources
            ? localeOrEntity
            : {
                locale: localeOrEntity,
                object_id: objectId,
                type: type
            });
    }
}
exports.ResourcesRequestBuilder = ResourcesRequestBuilder;
//# sourceMappingURL=ResourcesRequestBuilder.js.map