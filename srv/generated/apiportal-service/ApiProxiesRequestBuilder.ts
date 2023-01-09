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
import { ApiProxies } from './ApiProxies';

/**
 * Request builder class for operations supported on the {@link ApiProxies} entity.
 */
export class ApiProxiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProxies<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProxies` entity based on its keys.
   * @param name Key property. See {@link ApiProxies.name}.
   * @returns A request builder for creating requests to retrieve one `ApiProxies` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProxies<T>, T> {
    return new GetByKeyRequestBuilder<ApiProxies<T>, T>(this.entityApi, {
      name: name
    });
  }

  /**
   * Returns a request builder for querying all `ApiProxies` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProxies` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProxies<T>, T> {
    return new GetAllRequestBuilder<ApiProxies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApiProxies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProxies`.
   */
  create(entity: ApiProxies<T>): CreateRequestBuilder<ApiProxies<T>, T> {
    return new CreateRequestBuilder<ApiProxies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ApiProxies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProxies`.
   */
  update(entity: ApiProxies<T>): UpdateRequestBuilder<ApiProxies<T>, T> {
    return new UpdateRequestBuilder<ApiProxies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiProxies`.
   * @param name Key property. See {@link ApiProxies.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProxies`.
   */
  delete(name: string): DeleteRequestBuilder<ApiProxies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProxies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProxies` by taking the entity as a parameter.
   */
  delete(entity: ApiProxies<T>): DeleteRequestBuilder<ApiProxies<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ApiProxies<T>, T> {
    return new DeleteRequestBuilder<ApiProxies<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ApiProxies
        ? nameOrEntity
        : { name: nameOrEntity! }
    );
  }
}
