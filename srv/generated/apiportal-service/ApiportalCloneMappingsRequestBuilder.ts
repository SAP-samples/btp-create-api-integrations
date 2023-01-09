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
import { ApiportalCloneMappings } from './ApiportalCloneMappings';

/**
 * Request builder class for operations supported on the {@link ApiportalCloneMappings} entity.
 */
export class ApiportalCloneMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApiportalCloneMappings<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApiportalCloneMappings` entity based on its keys.
   * @param subaccountId Key property. See {@link ApiportalCloneMappings.subaccountId}.
   * @returns A request builder for creating requests to retrieve one `ApiportalCloneMappings` entity based on its keys.
   */
  getByKey(
    subaccountId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApiportalCloneMappings<T>, T> {
    return new GetByKeyRequestBuilder<ApiportalCloneMappings<T>, T>(
      this.entityApi,
      { subaccountId: subaccountId }
    );
  }

  /**
   * Returns a request builder for querying all `ApiportalCloneMappings` entities.
   * @returns A request builder for creating requests to retrieve all `ApiportalCloneMappings` entities.
   */
  getAll(): GetAllRequestBuilder<ApiportalCloneMappings<T>, T> {
    return new GetAllRequestBuilder<ApiportalCloneMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApiportalCloneMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApiportalCloneMappings`.
   */
  create(
    entity: ApiportalCloneMappings<T>
  ): CreateRequestBuilder<ApiportalCloneMappings<T>, T> {
    return new CreateRequestBuilder<ApiportalCloneMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApiportalCloneMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApiportalCloneMappings`.
   */
  update(
    entity: ApiportalCloneMappings<T>
  ): UpdateRequestBuilder<ApiportalCloneMappings<T>, T> {
    return new UpdateRequestBuilder<ApiportalCloneMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApiportalCloneMappings`.
   * @param subaccountId Key property. See {@link ApiportalCloneMappings.subaccountId}.
   * @returns A request builder for creating requests that delete an entity of type `ApiportalCloneMappings`.
   */
  delete(
    subaccountId: string
  ): DeleteRequestBuilder<ApiportalCloneMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApiportalCloneMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApiportalCloneMappings` by taking the entity as a parameter.
   */
  delete(
    entity: ApiportalCloneMappings<T>
  ): DeleteRequestBuilder<ApiportalCloneMappings<T>, T>;
  delete(
    subaccountIdOrEntity: any
  ): DeleteRequestBuilder<ApiportalCloneMappings<T>, T> {
    return new DeleteRequestBuilder<ApiportalCloneMappings<T>, T>(
      this.entityApi,
      subaccountIdOrEntity instanceof ApiportalCloneMappings
        ? subaccountIdOrEntity
        : { subaccountId: subaccountIdOrEntity! }
    );
  }
}
