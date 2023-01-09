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
import { Developers } from './Developers';
/**
 * Request builder class for operations supported on the {@link Developers} entity.
 */
export declare class DevelopersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Developers<T>, T> {
  /**
   * Returns a request builder for retrieving one `Developers` entity based on its keys.
   * @param id Key property. See {@link Developers.id}.
   * @returns A request builder for creating requests to retrieve one `Developers` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Developers<T>, T>;
  /**
   * Returns a request builder for querying all `Developers` entities.
   * @returns A request builder for creating requests to retrieve all `Developers` entities.
   */
  getAll(): GetAllRequestBuilder<Developers<T>, T>;
  /**
   * Returns a request builder for creating a `Developers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Developers`.
   */
  create(entity: Developers<T>): CreateRequestBuilder<Developers<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Developers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Developers`.
   */
  update(entity: Developers<T>): UpdateRequestBuilder<Developers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Developers`.
   * @param id Key property. See {@link Developers.id}.
   * @returns A request builder for creating requests that delete an entity of type `Developers`.
   */
  delete(id: string): DeleteRequestBuilder<Developers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Developers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Developers` by taking the entity as a parameter.
   */
  delete(entity: Developers<T>): DeleteRequestBuilder<Developers<T>, T>;
}
//# sourceMappingURL=DevelopersRequestBuilder.d.ts.map
