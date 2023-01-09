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
import { CacheResources } from './CacheResources';

/**
 * Request builder class for operations supported on the {@link CacheResources} entity.
 */
export class CacheResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CacheResources<T>, T> {
  /**
   * Returns a request builder for retrieving one `CacheResources` entity based on its keys.
   * @param name Key property. See {@link CacheResources.name}.
   * @returns A request builder for creating requests to retrieve one `CacheResources` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CacheResources<T>, T> {
    return new GetByKeyRequestBuilder<CacheResources<T>, T>(this.entityApi, {
      name: name
    });
  }

  /**
   * Returns a request builder for querying all `CacheResources` entities.
   * @returns A request builder for creating requests to retrieve all `CacheResources` entities.
   */
  getAll(): GetAllRequestBuilder<CacheResources<T>, T> {
    return new GetAllRequestBuilder<CacheResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CacheResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CacheResources`.
   */
  create(
    entity: CacheResources<T>
  ): CreateRequestBuilder<CacheResources<T>, T> {
    return new CreateRequestBuilder<CacheResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CacheResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CacheResources`.
   */
  update(
    entity: CacheResources<T>
  ): UpdateRequestBuilder<CacheResources<T>, T> {
    return new UpdateRequestBuilder<CacheResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CacheResources`.
   * @param name Key property. See {@link CacheResources.name}.
   * @returns A request builder for creating requests that delete an entity of type `CacheResources`.
   */
  delete(name: string): DeleteRequestBuilder<CacheResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CacheResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CacheResources` by taking the entity as a parameter.
   */
  delete(entity: CacheResources<T>): DeleteRequestBuilder<CacheResources<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<CacheResources<T>, T> {
    return new DeleteRequestBuilder<CacheResources<T>, T>(
      this.entityApi,
      nameOrEntity instanceof CacheResources
        ? nameOrEntity
        : { name: nameOrEntity! }
    );
  }
}
