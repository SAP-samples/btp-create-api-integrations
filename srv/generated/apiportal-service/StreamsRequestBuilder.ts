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
import { Streams } from './Streams';

/**
 * Request builder class for operations supported on the {@link Streams} entity.
 */
export class StreamsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Streams<T>, T> {
  /**
   * Returns a request builder for retrieving one `Streams` entity based on its keys.
   * @param id Key property. See {@link Streams.id}.
   * @returns A request builder for creating requests to retrieve one `Streams` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Streams<T>, T> {
    return new GetByKeyRequestBuilder<Streams<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `Streams` entities.
   * @returns A request builder for creating requests to retrieve all `Streams` entities.
   */
  getAll(): GetAllRequestBuilder<Streams<T>, T> {
    return new GetAllRequestBuilder<Streams<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Streams` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Streams`.
   */
  create(entity: Streams<T>): CreateRequestBuilder<Streams<T>, T> {
    return new CreateRequestBuilder<Streams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Streams`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Streams`.
   */
  update(entity: Streams<T>): UpdateRequestBuilder<Streams<T>, T> {
    return new UpdateRequestBuilder<Streams<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Streams`.
   * @param id Key property. See {@link Streams.id}.
   * @returns A request builder for creating requests that delete an entity of type `Streams`.
   */
  delete(id: string): DeleteRequestBuilder<Streams<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Streams`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Streams` by taking the entity as a parameter.
   */
  delete(entity: Streams<T>): DeleteRequestBuilder<Streams<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Streams<T>, T> {
    return new DeleteRequestBuilder<Streams<T>, T>(
      this.entityApi,
      idOrEntity instanceof Streams ? idOrEntity : { id: idOrEntity! }
    );
  }
}
