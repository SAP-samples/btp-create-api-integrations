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
import { ApplicationAdditionalPropertys } from './ApplicationAdditionalPropertys';

/**
 * Request builder class for operations supported on the {@link ApplicationAdditionalPropertys} entity.
 */
export class ApplicationAdditionalPropertysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicationAdditionalPropertys<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApplicationAdditionalPropertys` entity based on its keys.
   * @param entityId Key property. See {@link ApplicationAdditionalPropertys.entityId}.
   * @param name Key property. See {@link ApplicationAdditionalPropertys.name}.
   * @returns A request builder for creating requests to retrieve one `ApplicationAdditionalPropertys` entity based on its keys.
   */
  getByKey(
    entityId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicationAdditionalPropertys<T>, T> {
    return new GetByKeyRequestBuilder<ApplicationAdditionalPropertys<T>, T>(
      this.entityApi,
      {
        entityId: entityId,
        name: name
      }
    );
  }

  /**
   * Returns a request builder for querying all `ApplicationAdditionalPropertys` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicationAdditionalPropertys` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicationAdditionalPropertys<T>, T> {
    return new GetAllRequestBuilder<ApplicationAdditionalPropertys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApplicationAdditionalPropertys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicationAdditionalPropertys`.
   */
  create(
    entity: ApplicationAdditionalPropertys<T>
  ): CreateRequestBuilder<ApplicationAdditionalPropertys<T>, T> {
    return new CreateRequestBuilder<ApplicationAdditionalPropertys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicationAdditionalPropertys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicationAdditionalPropertys`.
   */
  update(
    entity: ApplicationAdditionalPropertys<T>
  ): UpdateRequestBuilder<ApplicationAdditionalPropertys<T>, T> {
    return new UpdateRequestBuilder<ApplicationAdditionalPropertys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicationAdditionalPropertys`.
   * @param entityId Key property. See {@link ApplicationAdditionalPropertys.entityId}.
   * @param name Key property. See {@link ApplicationAdditionalPropertys.name}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationAdditionalPropertys`.
   */
  delete(
    entityId: string,
    name: string
  ): DeleteRequestBuilder<ApplicationAdditionalPropertys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicationAdditionalPropertys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationAdditionalPropertys` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicationAdditionalPropertys<T>
  ): DeleteRequestBuilder<ApplicationAdditionalPropertys<T>, T>;
  delete(
    entityIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ApplicationAdditionalPropertys<T>, T> {
    return new DeleteRequestBuilder<ApplicationAdditionalPropertys<T>, T>(
      this.entityApi,
      entityIdOrEntity instanceof ApplicationAdditionalPropertys
        ? entityIdOrEntity
        : {
            entityId: entityIdOrEntity!,
            name: name!
          }
    );
  }
}
