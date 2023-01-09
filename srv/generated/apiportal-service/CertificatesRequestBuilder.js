"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatesRequestBuilder = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Certificates_1 = require("./Certificates");
/**
 * Request builder class for operations supported on the {@link Certificates} entity.
 */
class CertificatesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Certificates` entity based on its keys.
     * @param name Key property. See {@link Certificates.name}.
     * @param storeName Key property. See {@link Certificates.storeName}.
     * @returns A request builder for creating requests to retrieve one `Certificates` entity based on its keys.
     */
    getByKey(name, storeName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            name: name,
            storeName: storeName
        });
    }
    /**
     * Returns a request builder for querying all `Certificates` entities.
     * @returns A request builder for creating requests to retrieve all `Certificates` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Certificates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Certificates`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Certificates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Certificates`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity, storeName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof Certificates_1.Certificates
            ? nameOrEntity
            : {
                name: nameOrEntity,
                storeName: storeName
            });
    }
}
exports.CertificatesRequestBuilder = CertificatesRequestBuilder;
//# sourceMappingURL=CertificatesRequestBuilder.js.map