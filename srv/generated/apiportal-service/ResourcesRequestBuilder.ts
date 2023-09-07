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
import { Resources } from './Resources';

/**
 * Request builder class for operations supported on the {@link Resources} entity.
 */
export class ResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Resources<T>, T> {
  /**
   * Returns a request builder for retrieving one `Resources` entity based on its keys.
   * @param locale Key property. See {@link Resources.locale}.
   * @param objectId Key property. See {@link Resources.objectId}.
   * @param type Key property. See {@link Resources.type}.
   * @returns A request builder for creating requests to retrieve one `Resources` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    objectId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Resources<T>, T> {
    return new GetByKeyRequestBuilder<Resources<T>, T>(this.entityApi, {
      locale: locale,
      object_id: objectId,
      type: type
    });
  }

  /**
   * Returns a request builder for querying all `Resources` entities.
   * @returns A request builder for creating requests to retrieve all `Resources` entities.
   */
  getAll(): GetAllRequestBuilder<Resources<T>, T> {
    return new GetAllRequestBuilder<Resources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Resources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Resources`.
   */
  create(entity: Resources<T>): CreateRequestBuilder<Resources<T>, T> {
    return new CreateRequestBuilder<Resources<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Resources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Resources`.
   */
  update(entity: Resources<T>): UpdateRequestBuilder<Resources<T>, T> {
    return new UpdateRequestBuilder<Resources<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param locale Key property. See {@link Resources.locale}.
   * @param objectId Key property. See {@link Resources.objectId}.
   * @param type Key property. See {@link Resources.type}.
   * @returns A request builder for creating requests that delete an entity of type `Resources`.
   */
  delete(
    locale: string,
    objectId: string,
    type: string
  ): DeleteRequestBuilder<Resources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Resources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Resources` by taking the entity as a parameter.
   */
  delete(entity: Resources<T>): DeleteRequestBuilder<Resources<T>, T>;
  delete(
    localeOrEntity: any,
    objectId?: string,
    type?: string
  ): DeleteRequestBuilder<Resources<T>, T> {
    return new DeleteRequestBuilder<Resources<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Resources
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            object_id: objectId!,
            type: type!
          }
    );
  }
}
