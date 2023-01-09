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
import { ApiResources } from './ApiResources';
/**
 * Request builder class for operations supported on the {@link ApiResources} entity.
 */
export declare class ApiResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiResources<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiResources` entity based on its keys.
   * @param id Key property. See {@link ApiResources.id}.
   * @returns A request builder for creating requests to retrieve one `ApiResources` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiResources<T>, T>;
  /**
   * Returns a request builder for querying all `ApiResources` entities.
   * @returns A request builder for creating requests to retrieve all `ApiResources` entities.
   */
  getAll(): GetAllRequestBuilder<ApiResources<T>, T>;
  /**
   * Returns a request builder for creating a `ApiResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiResources`.
   */
  create(entity: ApiResources<T>): CreateRequestBuilder<ApiResources<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ApiResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiResources`.
   */
  update(entity: ApiResources<T>): UpdateRequestBuilder<ApiResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiResources`.
   * @param id Key property. See {@link ApiResources.id}.
   * @returns A request builder for creating requests that delete an entity of type `ApiResources`.
   */
  delete(id: string): DeleteRequestBuilder<ApiResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiResources` by taking the entity as a parameter.
   */
  delete(entity: ApiResources<T>): DeleteRequestBuilder<ApiResources<T>, T>;
}
//# sourceMappingURL=ApiResourcesRequestBuilder.d.ts.map
