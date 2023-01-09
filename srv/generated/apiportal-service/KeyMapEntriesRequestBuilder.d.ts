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
import { KeyMapEntries } from './KeyMapEntries';
/**
 * Request builder class for operations supported on the {@link KeyMapEntries} entity.
 */
export declare class KeyMapEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyMapEntries<T>, T> {
  /**
   * Returns a request builder for retrieving one `KeyMapEntries` entity based on its keys.
   * @param name Key property. See {@link KeyMapEntries.name}.
   * @returns A request builder for creating requests to retrieve one `KeyMapEntries` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KeyMapEntries<T>, T>;
  /**
   * Returns a request builder for querying all `KeyMapEntries` entities.
   * @returns A request builder for creating requests to retrieve all `KeyMapEntries` entities.
   */
  getAll(): GetAllRequestBuilder<KeyMapEntries<T>, T>;
  /**
   * Returns a request builder for creating a `KeyMapEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyMapEntries`.
   */
  create(entity: KeyMapEntries<T>): CreateRequestBuilder<KeyMapEntries<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `KeyMapEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KeyMapEntries`.
   */
  update(entity: KeyMapEntries<T>): UpdateRequestBuilder<KeyMapEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeyMapEntries`.
   * @param name Key property. See {@link KeyMapEntries.name}.
   * @returns A request builder for creating requests that delete an entity of type `KeyMapEntries`.
   */
  delete(name: string): DeleteRequestBuilder<KeyMapEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeyMapEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KeyMapEntries` by taking the entity as a parameter.
   */
  delete(entity: KeyMapEntries<T>): DeleteRequestBuilder<KeyMapEntries<T>, T>;
}
//# sourceMappingURL=KeyMapEntriesRequestBuilder.d.ts.map
