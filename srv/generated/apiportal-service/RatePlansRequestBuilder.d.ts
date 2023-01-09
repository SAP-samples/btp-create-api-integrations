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
import { RatePlans } from './RatePlans';
/**
 * Request builder class for operations supported on the {@link RatePlans} entity.
 */
export declare class RatePlansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RatePlans<T>, T> {
  /**
   * Returns a request builder for retrieving one `RatePlans` entity based on its keys.
   * @param id Key property. See {@link RatePlans.id}.
   * @returns A request builder for creating requests to retrieve one `RatePlans` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RatePlans<T>, T>;
  /**
   * Returns a request builder for querying all `RatePlans` entities.
   * @returns A request builder for creating requests to retrieve all `RatePlans` entities.
   */
  getAll(): GetAllRequestBuilder<RatePlans<T>, T>;
  /**
   * Returns a request builder for creating a `RatePlans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RatePlans`.
   */
  create(entity: RatePlans<T>): CreateRequestBuilder<RatePlans<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `RatePlans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RatePlans`.
   */
  update(entity: RatePlans<T>): UpdateRequestBuilder<RatePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RatePlans`.
   * @param id Key property. See {@link RatePlans.id}.
   * @returns A request builder for creating requests that delete an entity of type `RatePlans`.
   */
  delete(id: string): DeleteRequestBuilder<RatePlans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RatePlans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RatePlans` by taking the entity as a parameter.
   */
  delete(entity: RatePlans<T>): DeleteRequestBuilder<RatePlans<T>, T>;
}
//# sourceMappingURL=RatePlansRequestBuilder.d.ts.map
