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
import { Certificates } from './Certificates';

/**
 * Request builder class for operations supported on the {@link Certificates} entity.
 */
export class CertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Certificates<T>, T> {
  /**
   * Returns a request builder for retrieving one `Certificates` entity based on its keys.
   * @param name Key property. See {@link Certificates.name}.
   * @param storeName Key property. See {@link Certificates.storeName}.
   * @returns A request builder for creating requests to retrieve one `Certificates` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    storeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Certificates<T>, T> {
    return new GetByKeyRequestBuilder<Certificates<T>, T>(this.entityApi, {
      name: name,
      storeName: storeName
    });
  }

  /**
   * Returns a request builder for querying all `Certificates` entities.
   * @returns A request builder for creating requests to retrieve all `Certificates` entities.
   */
  getAll(): GetAllRequestBuilder<Certificates<T>, T> {
    return new GetAllRequestBuilder<Certificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Certificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Certificates`.
   */
  create(entity: Certificates<T>): CreateRequestBuilder<Certificates<T>, T> {
    return new CreateRequestBuilder<Certificates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Certificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Certificates`.
   */
  update(entity: Certificates<T>): UpdateRequestBuilder<Certificates<T>, T> {
    return new UpdateRequestBuilder<Certificates<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Certificates`.
   * @param name Key property. See {@link Certificates.name}.
   * @param storeName Key property. See {@link Certificates.storeName}.
   * @returns A request builder for creating requests that delete an entity of type `Certificates`.
   */
  delete(
    name: string,
    storeName: string
  ): DeleteRequestBuilder<Certificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Certificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Certificates` by taking the entity as a parameter.
   */
  delete(entity: Certificates<T>): DeleteRequestBuilder<Certificates<T>, T>;
  delete(
    nameOrEntity: any,
    storeName?: string
  ): DeleteRequestBuilder<Certificates<T>, T> {
    return new DeleteRequestBuilder<Certificates<T>, T>(
      this.entityApi,
      nameOrEntity instanceof Certificates
        ? nameOrEntity
        : {
            name: nameOrEntity!,
            storeName: storeName!
          }
    );
  }
}
