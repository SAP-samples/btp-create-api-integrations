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
import { EndPointProperties } from './EndPointProperties';
/**
 * Request builder class for operations supported on the {@link EndPointProperties} entity.
 */
export declare class EndPointPropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EndPointProperties<T>, T> {
  /**
   * Returns a request builder for retrieving one `EndPointProperties` entity based on its keys.
   * @param id Key property. See {@link EndPointProperties.id}.
   * @returns A request builder for creating requests to retrieve one `EndPointProperties` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EndPointProperties<T>, T>;
  /**
   * Returns a request builder for querying all `EndPointProperties` entities.
   * @returns A request builder for creating requests to retrieve all `EndPointProperties` entities.
   */
  getAll(): GetAllRequestBuilder<EndPointProperties<T>, T>;
  /**
   * Returns a request builder for creating a `EndPointProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EndPointProperties`.
   */
  create(
    entity: EndPointProperties<T>
  ): CreateRequestBuilder<EndPointProperties<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `EndPointProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EndPointProperties`.
   */
  update(
    entity: EndPointProperties<T>
  ): UpdateRequestBuilder<EndPointProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EndPointProperties`.
   * @param id Key property. See {@link EndPointProperties.id}.
   * @returns A request builder for creating requests that delete an entity of type `EndPointProperties`.
   */
  delete(id: string): DeleteRequestBuilder<EndPointProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EndPointProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EndPointProperties` by taking the entity as a parameter.
   */
  delete(
    entity: EndPointProperties<T>
  ): DeleteRequestBuilder<EndPointProperties<T>, T>;
}
//# sourceMappingURL=EndPointPropertiesRequestBuilder.d.ts.map
