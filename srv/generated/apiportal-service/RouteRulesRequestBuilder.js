"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const RouteRules_1 = require("./RouteRules");
/**
 * Request builder class for operations supported on the {@link RouteRules} entity.
 */
class RouteRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `RouteRules` entity based on its keys.
     * @param id Key property. See {@link RouteRules.id}.
     * @returns A request builder for creating requests to retrieve one `RouteRules` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `RouteRules` entities.
     * @returns A request builder for creating requests to retrieve all `RouteRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `RouteRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RouteRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `RouteRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RouteRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof RouteRules_1.RouteRules ? idOrEntity : { id: idOrEntity });
    }
}
exports.RouteRulesRequestBuilder = RouteRulesRequestBuilder;
//# sourceMappingURL=RouteRulesRequestBuilder.js.map