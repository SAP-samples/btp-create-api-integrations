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
import { GenericKeyMapEntries } from './GenericKeyMapEntries';
/**
 * Request builder class for operations supported on the {@link GenericKeyMapEntries} entity.
 */
export declare class GenericKeyMapEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GenericKeyMapEntries<T>, T> {
  /**
   * Returns a request builder for retrieving one `GenericKeyMapEntries` entity based on its keys.
   * @param name Key property. See {@link GenericKeyMapEntries.name}.
   * @param scope Key property. See {@link GenericKeyMapEntries.scope}.
   * @param scopeId Key property. See {@link GenericKeyMapEntries.scopeId}.
   * @returns A request builder for creating requests to retrieve one `GenericKeyMapEntries` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    scope: DeserializedType<T, 'Edm.String'>,
    scopeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GenericKeyMapEntries<T>, T>;
  /**
   * Returns a request builder for querying all `GenericKeyMapEntries` entities.
   * @returns A request builder for creating requests to retrieve all `GenericKeyMapEntries` entities.
   */
  getAll(): GetAllRequestBuilder<GenericKeyMapEntries<T>, T>;
  /**
   * Returns a request builder for creating a `GenericKeyMapEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GenericKeyMapEntries`.
   */
  create(
    entity: GenericKeyMapEntries<T>
  ): CreateRequestBuilder<GenericKeyMapEntries<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `GenericKeyMapEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GenericKeyMapEntries`.
   */
  update(
    entity: GenericKeyMapEntries<T>
  ): UpdateRequestBuilder<GenericKeyMapEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GenericKeyMapEntries`.
   * @param name Key property. See {@link GenericKeyMapEntries.name}.
   * @param scope Key property. See {@link GenericKeyMapEntries.scope}.
   * @param scopeId Key property. See {@link GenericKeyMapEntries.scopeId}.
   * @returns A request builder for creating requests that delete an entity of type `GenericKeyMapEntries`.
   */
  delete(
    name: string,
    scope: string,
    scopeId: string
  ): DeleteRequestBuilder<GenericKeyMapEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GenericKeyMapEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GenericKeyMapEntries` by taking the entity as a parameter.
   */
  delete(
    entity: GenericKeyMapEntries<T>
  ): DeleteRequestBuilder<GenericKeyMapEntries<T>, T>;
}
//# sourceMappingURL=GenericKeyMapEntriesRequestBuilder.d.ts.map
