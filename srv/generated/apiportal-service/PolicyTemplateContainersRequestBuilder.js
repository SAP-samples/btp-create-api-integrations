"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyTemplateContainersRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PolicyTemplateContainers_1 = require("./PolicyTemplateContainers");
/**
 * Request builder class for operations supported on the {@link PolicyTemplateContainers} entity.
 */
class PolicyTemplateContainersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PolicyTemplateContainers` entity based on its keys.
     * @param name Key property. See {@link PolicyTemplateContainers.name}.
     * @returns A request builder for creating requests to retrieve one `PolicyTemplateContainers` entity based on its keys.
     */
    getByKey(name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { name: name });
    }
    /**
     * Returns a request builder for querying all `PolicyTemplateContainers` entities.
     * @returns A request builder for creating requests to retrieve all `PolicyTemplateContainers` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PolicyTemplateContainers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PolicyTemplateContainers`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PolicyTemplateContainers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PolicyTemplateContainers`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof PolicyTemplateContainers_1.PolicyTemplateContainers
            ? nameOrEntity
            : { name: nameOrEntity });
    }
}
exports.PolicyTemplateContainersRequestBuilder = PolicyTemplateContainersRequestBuilder;
//# sourceMappingURL=PolicyTemplateContainersRequestBuilder.js.map