"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaultRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const FaultRules_1 = require("./FaultRules");
/**
 * Request builder class for operations supported on the {@link FaultRules} entity.
 */
class FaultRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `FaultRules` entity based on its keys.
     * @param id Key property. See {@link FaultRules.id}.
     * @returns A request builder for creating requests to retrieve one `FaultRules` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `FaultRules` entities.
     * @returns A request builder for creating requests to retrieve all `FaultRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `FaultRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FaultRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `FaultRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FaultRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof FaultRules_1.FaultRules ? idOrEntity : { id: idOrEntity });
    }
}
exports.FaultRulesRequestBuilder = FaultRulesRequestBuilder;
//# sourceMappingURL=FaultRulesRequestBuilder.js.map