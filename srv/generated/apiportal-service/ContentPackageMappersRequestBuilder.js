"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentPackageMappersRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ContentPackageMappers_1 = require("./ContentPackageMappers");
/**
 * Request builder class for operations supported on the {@link ContentPackageMappers} entity.
 */
class ContentPackageMappersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ContentPackageMappers` entity based on its keys.
     * @param targetId Key property. See {@link ContentPackageMappers.targetId}.
     * @param targetType Key property. See {@link ContentPackageMappers.targetType}.
     * @returns A request builder for creating requests to retrieve one `ContentPackageMappers` entity based on its keys.
     */
    getByKey(targetId, targetType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            targetId: targetId,
            targetType: targetType
        });
    }
    /**
     * Returns a request builder for querying all `ContentPackageMappers` entities.
     * @returns A request builder for creating requests to retrieve all `ContentPackageMappers` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ContentPackageMappers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ContentPackageMappers`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ContentPackageMappers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ContentPackageMappers`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(targetIdOrEntity, targetType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, targetIdOrEntity instanceof ContentPackageMappers_1.ContentPackageMappers
            ? targetIdOrEntity
            : {
                targetId: targetIdOrEntity,
                targetType: targetType
            });
    }
}
exports.ContentPackageMappersRequestBuilder = ContentPackageMappersRequestBuilder;
//# sourceMappingURL=ContentPackageMappersRequestBuilder.js.map