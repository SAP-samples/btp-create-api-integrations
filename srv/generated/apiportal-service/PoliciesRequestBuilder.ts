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
import { Policies } from './Policies';

/**
 * Request builder class for operations supported on the {@link Policies} entity.
 */
export class PoliciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Policies<T>, T> {
  /**
   * Returns a request builder for retrieving one `Policies` entity based on its keys.
   * @param id Key property. See {@link Policies.id}.
   * @returns A request builder for creating requests to retrieve one `Policies` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Policies<T>, T> {
    return new GetByKeyRequestBuilder<Policies<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `Policies` entities.
   * @returns A request builder for creating requests to retrieve all `Policies` entities.
   */
  getAll(): GetAllRequestBuilder<Policies<T>, T> {
    return new GetAllRequestBuilder<Policies<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Policies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Policies`.
   */
  create(entity: Policies<T>): CreateRequestBuilder<Policies<T>, T> {
    return new CreateRequestBuilder<Policies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Policies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Policies`.
   */
  update(entity: Policies<T>): UpdateRequestBuilder<Policies<T>, T> {
    return new UpdateRequestBuilder<Policies<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Policies`.
   * @param id Key property. See {@link Policies.id}.
   * @returns A request builder for creating requests that delete an entity of type `Policies`.
   */
  delete(id: string): DeleteRequestBuilder<Policies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Policies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Policies` by taking the entity as a parameter.
   */
  delete(entity: Policies<T>): DeleteRequestBuilder<Policies<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Policies<T>, T> {
    return new DeleteRequestBuilder<Policies<T>, T>(
      this.entityApi,
      idOrEntity instanceof Policies ? idOrEntity : { id: idOrEntity! }
    );
  }
}
