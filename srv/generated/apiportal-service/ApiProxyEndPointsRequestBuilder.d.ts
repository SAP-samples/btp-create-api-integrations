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
import { ApiProxyEndPoints } from './ApiProxyEndPoints';
/**
 * Request builder class for operations supported on the {@link ApiProxyEndPoints} entity.
 */
export declare class ApiProxyEndPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProxyEndPoints<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProxyEndPoints` entity based on its keys.
   * @param id Key property. See {@link ApiProxyEndPoints.id}.
   * @returns A request builder for creating requests to retrieve one `ApiProxyEndPoints` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProxyEndPoints<T>, T>;
  /**
   * Returns a request builder for querying all `ApiProxyEndPoints` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProxyEndPoints` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProxyEndPoints<T>, T>;
  /**
   * Returns a request builder for creating a `ApiProxyEndPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProxyEndPoints`.
   */
  create(
    entity: ApiProxyEndPoints<T>
  ): CreateRequestBuilder<ApiProxyEndPoints<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ApiProxyEndPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProxyEndPoints`.
   */
  update(
    entity: ApiProxyEndPoints<T>
  ): UpdateRequestBuilder<ApiProxyEndPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProxyEndPoints`.
   * @param id Key property. See {@link ApiProxyEndPoints.id}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProxyEndPoints`.
   */
  delete(id: string): DeleteRequestBuilder<ApiProxyEndPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProxyEndPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProxyEndPoints` by taking the entity as a parameter.
   */
  delete(
    entity: ApiProxyEndPoints<T>
  ): DeleteRequestBuilder<ApiProxyEndPoints<T>, T>;
}
//# sourceMappingURL=ApiProxyEndPointsRequestBuilder.d.ts.map
