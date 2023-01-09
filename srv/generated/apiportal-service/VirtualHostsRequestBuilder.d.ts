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
import { VirtualHosts } from './VirtualHosts';
/**
 * Request builder class for operations supported on the {@link VirtualHosts} entity.
 */
export declare class VirtualHostsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VirtualHosts<T>, T> {
  /**
   * Returns a request builder for retrieving one `VirtualHosts` entity based on its keys.
   * @param id Key property. See {@link VirtualHosts.id}.
   * @returns A request builder for creating requests to retrieve one `VirtualHosts` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VirtualHosts<T>, T>;
  /**
   * Returns a request builder for querying all `VirtualHosts` entities.
   * @returns A request builder for creating requests to retrieve all `VirtualHosts` entities.
   */
  getAll(): GetAllRequestBuilder<VirtualHosts<T>, T>;
  /**
   * Returns a request builder for creating a `VirtualHosts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VirtualHosts`.
   */
  create(entity: VirtualHosts<T>): CreateRequestBuilder<VirtualHosts<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `VirtualHosts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VirtualHosts`.
   */
  update(entity: VirtualHosts<T>): UpdateRequestBuilder<VirtualHosts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VirtualHosts`.
   * @param id Key property. See {@link VirtualHosts.id}.
   * @returns A request builder for creating requests that delete an entity of type `VirtualHosts`.
   */
  delete(id: string): DeleteRequestBuilder<VirtualHosts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VirtualHosts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VirtualHosts` by taking the entity as a parameter.
   */
  delete(entity: VirtualHosts<T>): DeleteRequestBuilder<VirtualHosts<T>, T>;
}
//# sourceMappingURL=VirtualHostsRequestBuilder.d.ts.map
