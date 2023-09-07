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
import { Documentations } from './Documentations';

/**
 * Request builder class for operations supported on the {@link Documentations} entity.
 */
export class DocumentationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Documentations<T>, T> {
  /**
   * Returns a request builder for retrieving one `Documentations` entity based on its keys.
   * @param id Key property. See {@link Documentations.id}.
   * @param locale Key property. See {@link Documentations.locale}.
   * @returns A request builder for creating requests to retrieve one `Documentations` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>,
    locale: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Documentations<T>, T> {
    return new GetByKeyRequestBuilder<Documentations<T>, T>(this.entityApi, {
      id: id,
      locale: locale
    });
  }

  /**
   * Returns a request builder for querying all `Documentations` entities.
   * @returns A request builder for creating requests to retrieve all `Documentations` entities.
   */
  getAll(): GetAllRequestBuilder<Documentations<T>, T> {
    return new GetAllRequestBuilder<Documentations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Documentations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Documentations`.
   */
  create(
    entity: Documentations<T>
  ): CreateRequestBuilder<Documentations<T>, T> {
    return new CreateRequestBuilder<Documentations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Documentations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Documentations`.
   */
  update(
    entity: Documentations<T>
  ): UpdateRequestBuilder<Documentations<T>, T> {
    return new UpdateRequestBuilder<Documentations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Documentations`.
   * @param id Key property. See {@link Documentations.id}.
   * @param locale Key property. See {@link Documentations.locale}.
   * @returns A request builder for creating requests that delete an entity of type `Documentations`.
   */
  delete(
    id: string,
    locale: string
  ): DeleteRequestBuilder<Documentations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Documentations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Documentations` by taking the entity as a parameter.
   */
  delete(entity: Documentations<T>): DeleteRequestBuilder<Documentations<T>, T>;
  delete(
    idOrEntity: any,
    locale?: string
  ): DeleteRequestBuilder<Documentations<T>, T> {
    return new DeleteRequestBuilder<Documentations<T>, T>(
      this.entityApi,
      idOrEntity instanceof Documentations
        ? idOrEntity
        : {
            id: idOrEntity!,
            locale: locale!
          }
    );
  }
}
