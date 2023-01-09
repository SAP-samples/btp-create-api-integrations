"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFaultRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DefaultFaultRules_1 = require("./DefaultFaultRules");
/**
 * Request builder class for operations supported on the {@link DefaultFaultRules} entity.
 */
class DefaultFaultRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `DefaultFaultRules` entity based on its keys.
     * @param id Key property. See {@link DefaultFaultRules.id}.
     * @returns A request builder for creating requests to retrieve one `DefaultFaultRules` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `DefaultFaultRules` entities.
     * @returns A request builder for creating requests to retrieve all `DefaultFaultRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DefaultFaultRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DefaultFaultRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `DefaultFaultRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DefaultFaultRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof DefaultFaultRules_1.DefaultFaultRules ? idOrEntity : { id: idOrEntity });
    }
}
exports.DefaultFaultRulesRequestBuilder = DefaultFaultRulesRequestBuilder;
//# sourceMappingURL=DefaultFaultRulesRequestBuilder.js.map