/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
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
import { ApiProviders } from './ApiProviders';

/**
 * Request builder class for operations supported on the {@link ApiProviders} entity.
 */
export class ApiProvidersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProviders<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProviders` entity based on its keys.
   * @param name Key property. See {@link ApiProviders.name}.
   * @returns A request builder for creating requests to retrieve one `ApiProviders` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProviders<T>, T> {
    return new GetByKeyRequestBuilder<ApiProviders<T>, T>(this.entityApi, {
      name: name
    });
  }

  /**
   * Returns a request builder for querying all `ApiProviders` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProviders` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProviders<T>, T> {
    return new GetAllRequestBuilder<ApiProviders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApiProviders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProviders`.
   */
  create(entity: ApiProviders<T>): CreateRequestBuilder<ApiProviders<T>, T> {
    return new CreateRequestBuilder<ApiProviders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ApiProviders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProviders`.
   */
  update(entity: ApiProviders<T>): UpdateRequestBuilder<ApiProviders<T>, T> {
    return new UpdateRequestBuilder<ApiProviders<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiProviders`.
   * @param name Key property. See {@link ApiProviders.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProviders`.
   */
  delete(name: string): DeleteRequestBuilder<ApiProviders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProviders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProviders` by taking the entity as a parameter.
   */
  delete(entity: ApiProviders<T>): DeleteRequestBuilder<ApiProviders<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ApiProviders<T>, T> {
    return new DeleteRequestBuilder<ApiProviders<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ApiProviders
        ? nameOrEntity
        : { name: nameOrEntity! }
    );
  }
}
