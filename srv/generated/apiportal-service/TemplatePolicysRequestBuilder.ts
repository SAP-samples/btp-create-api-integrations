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
import { TemplatePolicys } from './TemplatePolicys';

/**
 * Request builder class for operations supported on the {@link TemplatePolicys} entity.
 */
export class TemplatePolicysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TemplatePolicys<T>, T> {
  /**
   * Returns a request builder for retrieving one `TemplatePolicys` entity based on its keys.
   * @param id Key property. See {@link TemplatePolicys.id}.
   * @returns A request builder for creating requests to retrieve one `TemplatePolicys` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TemplatePolicys<T>, T> {
    return new GetByKeyRequestBuilder<TemplatePolicys<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `TemplatePolicys` entities.
   * @returns A request builder for creating requests to retrieve all `TemplatePolicys` entities.
   */
  getAll(): GetAllRequestBuilder<TemplatePolicys<T>, T> {
    return new GetAllRequestBuilder<TemplatePolicys<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TemplatePolicys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TemplatePolicys`.
   */
  create(
    entity: TemplatePolicys<T>
  ): CreateRequestBuilder<TemplatePolicys<T>, T> {
    return new CreateRequestBuilder<TemplatePolicys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TemplatePolicys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TemplatePolicys`.
   */
  update(
    entity: TemplatePolicys<T>
  ): UpdateRequestBuilder<TemplatePolicys<T>, T> {
    return new UpdateRequestBuilder<TemplatePolicys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TemplatePolicys`.
   * @param id Key property. See {@link TemplatePolicys.id}.
   * @returns A request builder for creating requests that delete an entity of type `TemplatePolicys`.
   */
  delete(id: string): DeleteRequestBuilder<TemplatePolicys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemplatePolicys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TemplatePolicys` by taking the entity as a parameter.
   */
  delete(
    entity: TemplatePolicys<T>
  ): DeleteRequestBuilder<TemplatePolicys<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<TemplatePolicys<T>, T> {
    return new DeleteRequestBuilder<TemplatePolicys<T>, T>(
      this.entityApi,
      idOrEntity instanceof TemplatePolicys ? idOrEntity : { id: idOrEntity! }
    );
  }
}
