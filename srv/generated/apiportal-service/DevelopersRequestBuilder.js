"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevelopersRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Developers_1 = require("./Developers");
/**
 * Request builder class for operations supported on the {@link Developers} entity.
 */
class DevelopersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Developers` entity based on its keys.
     * @param id Key property. See {@link Developers.id}.
     * @returns A request builder for creating requests to retrieve one `Developers` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `Developers` entities.
     * @returns A request builder for creating requests to retrieve all `Developers` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Developers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Developers`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Developers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Developers`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Developers_1.Developers ? idOrEntity : { id: idOrEntity });
    }
}
exports.DevelopersRequestBuilder = DevelopersRequestBuilder;
//# sourceMappingURL=DevelopersRequestBuilder.js.map