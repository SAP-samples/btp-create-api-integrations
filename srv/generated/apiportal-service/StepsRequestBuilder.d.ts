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
import { Steps } from './Steps';
/**
 * Request builder class for operations supported on the {@link Steps} entity.
 */
export declare class StepsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Steps<T>, T> {
  /**
   * Returns a request builder for retrieving one `Steps` entity based on its keys.
   * @param id Key property. See {@link Steps.id}.
   * @returns A request builder for creating requests to retrieve one `Steps` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Steps<T>, T>;
  /**
   * Returns a request builder for querying all `Steps` entities.
   * @returns A request builder for creating requests to retrieve all `Steps` entities.
   */
  getAll(): GetAllRequestBuilder<Steps<T>, T>;
  /**
   * Returns a request builder for creating a `Steps` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Steps`.
   */
  create(entity: Steps<T>): CreateRequestBuilder<Steps<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Steps`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Steps`.
   */
  update(entity: Steps<T>): UpdateRequestBuilder<Steps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Steps`.
   * @param id Key property. See {@link Steps.id}.
   * @returns A request builder for creating requests that delete an entity of type `Steps`.
   */
  delete(id: string): DeleteRequestBuilder<Steps<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Steps`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Steps` by taking the entity as a parameter.
   */
  delete(entity: Steps<T>): DeleteRequestBuilder<Steps<T>, T>;
}
//# sourceMappingURL=StepsRequestBuilder.d.ts.map
