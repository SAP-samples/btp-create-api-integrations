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
import { FileResources } from './FileResources';
/**
 * Request builder class for operations supported on the {@link FileResources} entity.
 */
export declare class FileResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FileResources<T>, T> {
  /**
   * Returns a request builder for retrieving one `FileResources` entity based on its keys.
   * @param id Key property. See {@link FileResources.id}.
   * @returns A request builder for creating requests to retrieve one `FileResources` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FileResources<T>, T>;
  /**
   * Returns a request builder for querying all `FileResources` entities.
   * @returns A request builder for creating requests to retrieve all `FileResources` entities.
   */
  getAll(): GetAllRequestBuilder<FileResources<T>, T>;
  /**
   * Returns a request builder for creating a `FileResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FileResources`.
   */
  create(entity: FileResources<T>): CreateRequestBuilder<FileResources<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `FileResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FileResources`.
   */
  update(entity: FileResources<T>): UpdateRequestBuilder<FileResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FileResources`.
   * @param id Key property. See {@link FileResources.id}.
   * @returns A request builder for creating requests that delete an entity of type `FileResources`.
   */
  delete(id: string): DeleteRequestBuilder<FileResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FileResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FileResources` by taking the entity as a parameter.
   */
  delete(entity: FileResources<T>): DeleteRequestBuilder<FileResources<T>, T>;
}
//# sourceMappingURL=FileResourcesRequestBuilder.d.ts.map
