"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const FlowRules_1 = require("./FlowRules");
/**
 * Request builder class for operations supported on the {@link FlowRules} entity.
 */
class FlowRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `FlowRules` entity based on its keys.
     * @param id Key property. See {@link FlowRules.id}.
     * @returns A request builder for creating requests to retrieve one `FlowRules` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `FlowRules` entities.
     * @returns A request builder for creating requests to retrieve all `FlowRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `FlowRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FlowRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `FlowRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FlowRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof FlowRules_1.FlowRules ? idOrEntity : { id: idOrEntity });
    }
}
exports.FlowRulesRequestBuilder = FlowRulesRequestBuilder;
//# sourceMappingURL=FlowRulesRequestBuilder.js.map