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
import { ApiProducts } from './ApiProducts';

/**
 * Request builder class for operations supported on the {@link ApiProducts} entity.
 */
export class ApiProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProducts<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProducts` entity based on its keys.
   * @param name Key property. See {@link ApiProducts.name}.
   * @returns A request builder for creating requests to retrieve one `ApiProducts` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProducts<T>, T> {
    return new GetByKeyRequestBuilder<ApiProducts<T>, T>(this.entityApi, {
      name: name
    });
  }

  /**
   * Returns a request builder for querying all `ApiProducts` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProducts` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProducts<T>, T> {
    return new GetAllRequestBuilder<ApiProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApiProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProducts`.
   */
  create(entity: ApiProducts<T>): CreateRequestBuilder<ApiProducts<T>, T> {
    return new CreateRequestBuilder<ApiProducts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ApiProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProducts`.
   */
  update(entity: ApiProducts<T>): UpdateRequestBuilder<ApiProducts<T>, T> {
    return new UpdateRequestBuilder<ApiProducts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiProducts`.
   * @param name Key property. See {@link ApiProducts.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProducts`.
   */
  delete(name: string): DeleteRequestBuilder<ApiProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProducts` by taking the entity as a parameter.
   */
  delete(entity: ApiProducts<T>): DeleteRequestBuilder<ApiProducts<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ApiProducts<T>, T> {
    return new DeleteRequestBuilder<ApiProducts<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ApiProducts
        ? nameOrEntity
        : { name: nameOrEntity! }
    );
  }
}
