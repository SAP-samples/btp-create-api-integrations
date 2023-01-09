"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AclProductLinkagesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AclProductLinkages_1 = require("./AclProductLinkages");
/**
 * Request builder class for operations supported on the {@link AclProductLinkages} entity.
 */
class AclProductLinkagesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `AclProductLinkages` entity based on its keys.
     * @param ruleId Key property. See {@link AclProductLinkages.ruleId}.
     * @returns A request builder for creating requests to retrieve one `AclProductLinkages` entity based on its keys.
     */
    getByKey(ruleId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { ruleId: ruleId });
    }
    /**
     * Returns a request builder for querying all `AclProductLinkages` entities.
     * @returns A request builder for creating requests to retrieve all `AclProductLinkages` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `AclProductLinkages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AclProductLinkages`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `AclProductLinkages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AclProductLinkages`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(ruleIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, ruleIdOrEntity instanceof AclProductLinkages_1.AclProductLinkages
            ? ruleIdOrEntity
            : { ruleId: ruleIdOrEntity });
    }
}
exports.AclProductLinkagesRequestBuilder = AclProductLinkagesRequestBuilder;
//# sourceMappingURL=AclProductLinkagesRequestBuilder.js.map