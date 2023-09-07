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
import { RouteRules } from './RouteRules';

/**
 * Request builder class for operations supported on the {@link RouteRules} entity.
 */
export class RouteRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `RouteRules` entity based on its keys.
   * @param id Key property. See {@link RouteRules.id}.
   * @returns A request builder for creating requests to retrieve one `RouteRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RouteRules<T>, T> {
    return new GetByKeyRequestBuilder<RouteRules<T>, T>(this.entityApi, {
      id: id
    });
  }

  /**
   * Returns a request builder for querying all `RouteRules` entities.
   * @returns A request builder for creating requests to retrieve all `RouteRules` entities.
   */
  getAll(): GetAllRequestBuilder<RouteRules<T>, T> {
    return new GetAllRequestBuilder<RouteRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RouteRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteRules`.
   */
  create(entity: RouteRules<T>): CreateRequestBuilder<RouteRules<T>, T> {
    return new CreateRequestBuilder<RouteRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RouteRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteRules`.
   */
  update(entity: RouteRules<T>): UpdateRequestBuilder<RouteRules<T>, T> {
    return new UpdateRequestBuilder<RouteRules<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteRules`.
   * @param id Key property. See {@link RouteRules.id}.
   * @returns A request builder for creating requests that delete an entity of type `RouteRules`.
   */
  delete(id: string): DeleteRequestBuilder<RouteRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteRules` by taking the entity as a parameter.
   */
  delete(entity: RouteRules<T>): DeleteRequestBuilder<RouteRules<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<RouteRules<T>, T> {
    return new DeleteRequestBuilder<RouteRules<T>, T>(
      this.entityApi,
      idOrEntity instanceof RouteRules ? idOrEntity : { id: idOrEntity! }
    );
  }
}
