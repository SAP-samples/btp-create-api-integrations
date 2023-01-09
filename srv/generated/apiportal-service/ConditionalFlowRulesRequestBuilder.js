"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalFlowRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ConditionalFlowRules_1 = require("./ConditionalFlowRules");
/**
 * Request builder class for operations supported on the {@link ConditionalFlowRules} entity.
 */
class ConditionalFlowRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ConditionalFlowRules` entity based on its keys.
     * @param id Key property. See {@link ConditionalFlowRules.id}.
     * @returns A request builder for creating requests to retrieve one `ConditionalFlowRules` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { id: id });
    }
    /**
     * Returns a request builder for querying all `ConditionalFlowRules` entities.
     * @returns A request builder for creating requests to retrieve all `ConditionalFlowRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ConditionalFlowRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ConditionalFlowRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ConditionalFlowRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ConditionalFlowRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ConditionalFlowRules_1.ConditionalFlowRules
            ? idOrEntity
            : { id: idOrEntity });
    }
}
exports.ConditionalFlowRulesRequestBuilder = ConditionalFlowRulesRequestBuilder;
//# sourceMappingURL=ConditionalFlowRulesRequestBuilder.js.map