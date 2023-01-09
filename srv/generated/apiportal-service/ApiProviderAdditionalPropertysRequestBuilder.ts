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
import { ApiProviderAdditionalPropertys } from './ApiProviderAdditionalPropertys';

/**
 * Request builder class for operations supported on the {@link ApiProviderAdditionalPropertys} entity.
 */
export class ApiProviderAdditionalPropertysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProviderAdditionalPropertys` entity based on its keys.
   * @param entityId Key property. See {@link ApiProviderAdditionalPropertys.entityId}.
   * @param name Key property. See {@link ApiProviderAdditionalPropertys.name}.
   * @returns A request builder for creating requests to retrieve one `ApiProviderAdditionalPropertys` entity based on its keys.
   */
  getByKey(
    entityId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
    return new GetByKeyRequestBuilder<ApiProviderAdditionalPropertys<T>, T>(
      this.entityApi,
      {
        entityId: entityId,
        name: name
      }
    );
  }

  /**
   * Returns a request builder for querying all `ApiProviderAdditionalPropertys` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProviderAdditionalPropertys` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
    return new GetAllRequestBuilder<ApiProviderAdditionalPropertys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApiProviderAdditionalPropertys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProviderAdditionalPropertys`.
   */
  create(
    entity: ApiProviderAdditionalPropertys<T>
  ): CreateRequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
    return new CreateRequestBuilder<ApiProviderAdditionalPropertys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApiProviderAdditionalPropertys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProviderAdditionalPropertys`.
   */
  update(
    entity: ApiProviderAdditionalPropertys<T>
  ): UpdateRequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
    return new UpdateRequestBuilder<ApiProviderAdditionalPropertys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiProviderAdditionalPropertys`.
   * @param entityId Key property. See {@link ApiProviderAdditionalPropertys.entityId}.
   * @param name Key property. See {@link ApiProviderAdditionalPropertys.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProviderAdditionalPropertys`.
   */
  delete(
    entityId: string,
    name: string
  ): DeleteRequestBuilder<ApiProviderAdditionalPropertys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProviderAdditionalPropertys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProviderAdditionalPropertys` by taking the entity as a parameter.
   */
  delete(
    entity: ApiProviderAdditionalPropertys<T>
  ): DeleteRequestBuilder<ApiProviderAdditionalPropertys<T>, T>;
  delete(
    entityIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ApiProviderAdditionalPropertys<T>, T> {
    return new DeleteRequestBuilder<ApiProviderAdditionalPropertys<T>, T>(
      this.entityApi,
      entityIdOrEntity instanceof ApiProviderAdditionalPropertys
        ? entityIdOrEntity
        : {
            entityId: entityIdOrEntity!,
            name: name!
          }
    );
  }
}
