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
import { DestinationAndUrlMappings } from './DestinationAndUrlMappings';
/**
 * Request builder class for operations supported on the {@link DestinationAndUrlMappings} entity.
 */
export declare class DestinationAndUrlMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DestinationAndUrlMappings<T>, T> {
  /**
   * Returns a request builder for retrieving one `DestinationAndUrlMappings` entity based on its keys.
   * @param id Key property. See {@link DestinationAndUrlMappings.id}.
   * @returns A request builder for creating requests to retrieve one `DestinationAndUrlMappings` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DestinationAndUrlMappings<T>, T>;
  /**
   * Returns a request builder for querying all `DestinationAndUrlMappings` entities.
   * @returns A request builder for creating requests to retrieve all `DestinationAndUrlMappings` entities.
   */
  getAll(): GetAllRequestBuilder<DestinationAndUrlMappings<T>, T>;
  /**
   * Returns a request builder for creating a `DestinationAndUrlMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DestinationAndUrlMappings`.
   */
  create(
    entity: DestinationAndUrlMappings<T>
  ): CreateRequestBuilder<DestinationAndUrlMappings<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `DestinationAndUrlMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DestinationAndUrlMappings`.
   */
  update(
    entity: DestinationAndUrlMappings<T>
  ): UpdateRequestBuilder<DestinationAndUrlMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DestinationAndUrlMappings`.
   * @param id Key property. See {@link DestinationAndUrlMappings.id}.
   * @returns A request builder for creating requests that delete an entity of type `DestinationAndUrlMappings`.
   */
  delete(id: string): DeleteRequestBuilder<DestinationAndUrlMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DestinationAndUrlMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DestinationAndUrlMappings` by taking the entity as a parameter.
   */
  delete(
    entity: DestinationAndUrlMappings<T>
  ): DeleteRequestBuilder<DestinationAndUrlMappings<T>, T>;
}
//# sourceMappingURL=DestinationAndUrlMappingsRequestBuilder.d.ts.map
