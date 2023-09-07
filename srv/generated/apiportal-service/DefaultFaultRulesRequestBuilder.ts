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
import { DefaultFaultRules } from './DefaultFaultRules';

/**
 * Request builder class for operations supported on the {@link DefaultFaultRules} entity.
 */
export class DefaultFaultRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DefaultFaultRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `DefaultFaultRules` entity based on its keys.
   * @param id Key property. See {@link DefaultFaultRules.id}.
   * @returns A request builder for creating requests to retrieve one `DefaultFaultRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DefaultFaultRules<T>, T> {
    return new GetByKeyRequestBuilder<DefaultFaultRules<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `DefaultFaultRules` entities.
   * @returns A request builder for creating requests to retrieve all `DefaultFaultRules` entities.
   */
  getAll(): GetAllRequestBuilder<DefaultFaultRules<T>, T> {
    return new GetAllRequestBuilder<DefaultFaultRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DefaultFaultRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DefaultFaultRules`.
   */
  create(
    entity: DefaultFaultRules<T>
  ): CreateRequestBuilder<DefaultFaultRules<T>, T> {
    return new CreateRequestBuilder<DefaultFaultRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DefaultFaultRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DefaultFaultRules`.
   */
  update(
    entity: DefaultFaultRules<T>
  ): UpdateRequestBuilder<DefaultFaultRules<T>, T> {
    return new UpdateRequestBuilder<DefaultFaultRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DefaultFaultRules`.
   * @param id Key property. See {@link DefaultFaultRules.id}.
   * @returns A request builder for creating requests that delete an entity of type `DefaultFaultRules`.
   */
  delete(id: string): DeleteRequestBuilder<DefaultFaultRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DefaultFaultRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DefaultFaultRules` by taking the entity as a parameter.
   */
  delete(
    entity: DefaultFaultRules<T>
  ): DeleteRequestBuilder<DefaultFaultRules<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<DefaultFaultRules<T>, T> {
    return new DeleteRequestBuilder<DefaultFaultRules<T>, T>(
      this.entityApi,
      idOrEntity instanceof DefaultFaultRules ? idOrEntity : { id: idOrEntity! }
    );
  }
}
