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
import { ContentPackageMappers } from './ContentPackageMappers';

/**
 * Request builder class for operations supported on the {@link ContentPackageMappers} entity.
 */
export class ContentPackageMappersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContentPackageMappers<T>, T> {
  /**
   * Returns a request builder for retrieving one `ContentPackageMappers` entity based on its keys.
   * @param targetId Key property. See {@link ContentPackageMappers.targetId}.
   * @param targetType Key property. See {@link ContentPackageMappers.targetType}.
   * @returns A request builder for creating requests to retrieve one `ContentPackageMappers` entity based on its keys.
   */
  getByKey(
    targetId: DeserializedType<T, 'Edm.String'>,
    targetType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ContentPackageMappers<T>, T> {
    return new GetByKeyRequestBuilder<ContentPackageMappers<T>, T>(
      this.entityApi,
      {
        targetId: targetId,
        targetType: targetType
      }
    );
  }

  /**
   * Returns a request builder for querying all `ContentPackageMappers` entities.
   * @returns A request builder for creating requests to retrieve all `ContentPackageMappers` entities.
   */
  getAll(): GetAllRequestBuilder<ContentPackageMappers<T>, T> {
    return new GetAllRequestBuilder<ContentPackageMappers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ContentPackageMappers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContentPackageMappers`.
   */
  create(
    entity: ContentPackageMappers<T>
  ): CreateRequestBuilder<ContentPackageMappers<T>, T> {
    return new CreateRequestBuilder<ContentPackageMappers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ContentPackageMappers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContentPackageMappers`.
   */
  update(
    entity: ContentPackageMappers<T>
  ): UpdateRequestBuilder<ContentPackageMappers<T>, T> {
    return new UpdateRequestBuilder<ContentPackageMappers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ContentPackageMappers`.
   * @param targetId Key property. See {@link ContentPackageMappers.targetId}.
   * @param targetType Key property. See {@link ContentPackageMappers.targetType}.
   * @returns A request builder for creating requests that delete an entity of type `ContentPackageMappers`.
   */
  delete(
    targetId: string,
    targetType: string
  ): DeleteRequestBuilder<ContentPackageMappers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContentPackageMappers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContentPackageMappers` by taking the entity as a parameter.
   */
  delete(
    entity: ContentPackageMappers<T>
  ): DeleteRequestBuilder<ContentPackageMappers<T>, T>;
  delete(
    targetIdOrEntity: any,
    targetType?: string
  ): DeleteRequestBuilder<ContentPackageMappers<T>, T> {
    return new DeleteRequestBuilder<ContentPackageMappers<T>, T>(
      this.entityApi,
      targetIdOrEntity instanceof ContentPackageMappers
        ? targetIdOrEntity
        : {
            targetId: targetIdOrEntity!,
            targetType: targetType!
          }
    );
  }
}
