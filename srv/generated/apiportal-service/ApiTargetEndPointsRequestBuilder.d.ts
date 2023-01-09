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
import { ApiTargetEndPoints } from './ApiTargetEndPoints';
/**
 * Request builder class for operations supported on the {@link ApiTargetEndPoints} entity.
 */
export declare class ApiTargetEndPointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiTargetEndPoints<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiTargetEndPoints` entity based on its keys.
   * @param id Key property. See {@link ApiTargetEndPoints.id}.
   * @returns A request builder for creating requests to retrieve one `ApiTargetEndPoints` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiTargetEndPoints<T>, T>;
  /**
   * Returns a request builder for querying all `ApiTargetEndPoints` entities.
   * @returns A request builder for creating requests to retrieve all `ApiTargetEndPoints` entities.
   */
  getAll(): GetAllRequestBuilder<ApiTargetEndPoints<T>, T>;
  /**
   * Returns a request builder for creating a `ApiTargetEndPoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiTargetEndPoints`.
   */
  create(
    entity: ApiTargetEndPoints<T>
  ): CreateRequestBuilder<ApiTargetEndPoints<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ApiTargetEndPoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiTargetEndPoints`.
   */
  update(
    entity: ApiTargetEndPoints<T>
  ): UpdateRequestBuilder<ApiTargetEndPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiTargetEndPoints`.
   * @param id Key property. See {@link ApiTargetEndPoints.id}.
   * @returns A request builder for creating requests that delete an entity of type `ApiTargetEndPoints`.
   */
  delete(id: string): DeleteRequestBuilder<ApiTargetEndPoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiTargetEndPoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiTargetEndPoints` by taking the entity as a parameter.
   */
  delete(
    entity: ApiTargetEndPoints<T>
  ): DeleteRequestBuilder<ApiTargetEndPoints<T>, T>;
}
//# sourceMappingURL=ApiTargetEndPointsRequestBuilder.d.ts.map
