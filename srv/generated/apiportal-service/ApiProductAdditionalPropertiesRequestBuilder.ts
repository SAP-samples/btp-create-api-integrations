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
import { ApiProductAdditionalProperties } from './ApiProductAdditionalProperties';

/**
 * Request builder class for operations supported on the {@link ApiProductAdditionalProperties} entity.
 */
export class ApiProductAdditionalPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiProductAdditionalProperties<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiProductAdditionalProperties` entity based on its keys.
   * @param entityId Key property. See {@link ApiProductAdditionalProperties.entityId}.
   * @param name Key property. See {@link ApiProductAdditionalProperties.name}.
   * @returns A request builder for creating requests to retrieve one `ApiProductAdditionalProperties` entity based on its keys.
   */
  getByKey(
    entityId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiProductAdditionalProperties<T>, T> {
    return new GetByKeyRequestBuilder<ApiProductAdditionalProperties<T>, T>(
      this.entityApi,
      {
        entityId: entityId,
        name: name
      }
    );
  }

  /**
   * Returns a request builder for querying all `ApiProductAdditionalProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ApiProductAdditionalProperties` entities.
   */
  getAll(): GetAllRequestBuilder<ApiProductAdditionalProperties<T>, T> {
    return new GetAllRequestBuilder<ApiProductAdditionalProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApiProductAdditionalProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiProductAdditionalProperties`.
   */
  create(
    entity: ApiProductAdditionalProperties<T>
  ): CreateRequestBuilder<ApiProductAdditionalProperties<T>, T> {
    return new CreateRequestBuilder<ApiProductAdditionalProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApiProductAdditionalProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiProductAdditionalProperties`.
   */
  update(
    entity: ApiProductAdditionalProperties<T>
  ): UpdateRequestBuilder<ApiProductAdditionalProperties<T>, T> {
    return new UpdateRequestBuilder<ApiProductAdditionalProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiProductAdditionalProperties`.
   * @param entityId Key property. See {@link ApiProductAdditionalProperties.entityId}.
   * @param name Key property. See {@link ApiProductAdditionalProperties.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApiProductAdditionalProperties`.
   */
  delete(
    entityId: string,
    name: string
  ): DeleteRequestBuilder<ApiProductAdditionalProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiProductAdditionalProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiProductAdditionalProperties` by taking the entity as a parameter.
   */
  delete(
    entity: ApiProductAdditionalProperties<T>
  ): DeleteRequestBuilder<ApiProductAdditionalProperties<T>, T>;
  delete(
    entityIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ApiProductAdditionalProperties<T>, T> {
    return new DeleteRequestBuilder<ApiProductAdditionalProperties<T>, T>(
      this.entityApi,
      entityIdOrEntity instanceof ApiProductAdditionalProperties
        ? entityIdOrEntity
        : {
            entityId: entityIdOrEntity!,
            name: name!
          }
    );
  }
}
