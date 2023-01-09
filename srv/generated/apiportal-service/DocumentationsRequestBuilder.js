"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentationsRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Documentations_1 = require("./Documentations");
/**
 * Request builder class for operations supported on the {@link Documentations} entity.
 */
class DocumentationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Documentations` entity based on its keys.
     * @param id Key property. See {@link Documentations.id}.
     * @param locale Key property. See {@link Documentations.locale}.
     * @returns A request builder for creating requests to retrieve one `Documentations` entity based on its keys.
     */
    getByKey(id, locale) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            id: id,
            locale: locale
        });
    }
    /**
     * Returns a request builder for querying all `Documentations` entities.
     * @returns A request builder for creating requests to retrieve all `Documentations` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Documentations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Documentations`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Documentations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Documentations`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity, locale) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof Documentations_1.Documentations
            ? idOrEntity
            : {
                id: idOrEntity,
                locale: locale
            });
    }
}
exports.DocumentationsRequestBuilder = DocumentationsRequestBuilder;
//# sourceMappingURL=DocumentationsRequestBuilder.js.map