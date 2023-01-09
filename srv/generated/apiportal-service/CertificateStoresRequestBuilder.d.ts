/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { CertificateStores } from './CertificateStores';
/**
 * Request builder class for operations supported on the {@link CertificateStores} entity.
 */
export declare class CertificateStoresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CertificateStores<T>, T> {
  /**
   * Returns a request builder for retrieving one `CertificateStores` entity based on its keys.
   * @param name Key property. See {@link CertificateStores.name}.
   * @returns A request builder for creating requests to retrieve one `CertificateStores` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CertificateStores<T>, T>;
  /**
   * Returns a request builder for querying all `CertificateStores` entities.
   * @returns A request builder for creating requests to retrieve all `CertificateStores` entities.
   */
  getAll(): GetAllRequestBuilder<CertificateStores<T>, T>;
  /**
   * Returns a request builder for creating a `CertificateStores` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CertificateStores`.
   */
  create(
    entity: CertificateStores<T>
  ): CreateRequestBuilder<CertificateStores<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `CertificateStores`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CertificateStores`.
   */
  update(
    entity: CertificateStores<T>
  ): UpdateRequestBuilder<CertificateStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateStores`.
   * @param name Key property. See {@link CertificateStores.name}.
   * @returns A request builder for creating requests that delete an entity of type `CertificateStores`.
   */
  delete(name: string): DeleteRequestBuilder<CertificateStores<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CertificateStores`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CertificateStores` by taking the entity as a parameter.
   */
  delete(
    entity: CertificateStores<T>
  ): DeleteRequestBuilder<CertificateStores<T>, T>;
}
//# sourceMappingURL=CertificateStoresRequestBuilder.d.ts.map
