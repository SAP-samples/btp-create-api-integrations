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
import { GenericKeyMapEntryValues } from './GenericKeyMapEntryValues';

/**
 * Request builder class for operations supported on the {@link GenericKeyMapEntryValues} entity.
 */
export class GenericKeyMapEntryValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GenericKeyMapEntryValues<T>, T> {
  /**
   * Returns a request builder for retrieving one `GenericKeyMapEntryValues` entity based on its keys.
   * @param mapName Key property. See {@link GenericKeyMapEntryValues.mapName}.
   * @param name Key property. See {@link GenericKeyMapEntryValues.name}.
   * @param scope Key property. See {@link GenericKeyMapEntryValues.scope}.
   * @param scopeId Key property. See {@link GenericKeyMapEntryValues.scopeId}.
   * @returns A request builder for creating requests to retrieve one `GenericKeyMapEntryValues` entity based on its keys.
   */
  getByKey(
    mapName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>,
    scope: DeserializedType<T, 'Edm.String'>,
    scopeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GenericKeyMapEntryValues<T>, T> {
    return new GetByKeyRequestBuilder<GenericKeyMapEntryValues<T>, T>(
      this.entityApi,
      {
        mapName: mapName,
        name: name,
        scope: scope,
        scopeId: scopeId
      }
    );
  }

  /**
   * Returns a request builder for querying all `GenericKeyMapEntryValues` entities.
   * @returns A request builder for creating requests to retrieve all `GenericKeyMapEntryValues` entities.
   */
  getAll(): GetAllRequestBuilder<GenericKeyMapEntryValues<T>, T> {
    return new GetAllRequestBuilder<GenericKeyMapEntryValues<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GenericKeyMapEntryValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GenericKeyMapEntryValues`.
   */
  create(
    entity: GenericKeyMapEntryValues<T>
  ): CreateRequestBuilder<GenericKeyMapEntryValues<T>, T> {
    return new CreateRequestBuilder<GenericKeyMapEntryValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GenericKeyMapEntryValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GenericKeyMapEntryValues`.
   */
  update(
    entity: GenericKeyMapEntryValues<T>
  ): UpdateRequestBuilder<GenericKeyMapEntryValues<T>, T> {
    return new UpdateRequestBuilder<GenericKeyMapEntryValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GenericKeyMapEntryValues`.
   * @param mapName Key property. See {@link GenericKeyMapEntryValues.mapName}.
   * @param name Key property. See {@link GenericKeyMapEntryValues.name}.
   * @param scope Key property. See {@link GenericKeyMapEntryValues.scope}.
   * @param scopeId Key property. See {@link GenericKeyMapEntryValues.scopeId}.
   * @returns A request builder for creating requests that delete an entity of type `GenericKeyMapEntryValues`.
   */
  delete(
    mapName: string,
    name: string,
    scope: string,
    scopeId: string
  ): DeleteRequestBuilder<GenericKeyMapEntryValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GenericKeyMapEntryValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GenericKeyMapEntryValues` by taking the entity as a parameter.
   */
  delete(
    entity: GenericKeyMapEntryValues<T>
  ): DeleteRequestBuilder<GenericKeyMapEntryValues<T>, T>;
  delete(
    mapNameOrEntity: any,
    name?: string,
    scope?: string,
    scopeId?: string
  ): DeleteRequestBuilder<GenericKeyMapEntryValues<T>, T> {
    return new DeleteRequestBuilder<GenericKeyMapEntryValues<T>, T>(
      this.entityApi,
      mapNameOrEntity instanceof GenericKeyMapEntryValues
        ? mapNameOrEntity
        : {
            mapName: mapNameOrEntity!,
            name: name!,
            scope: scope!,
            scopeId: scopeId!
          }
    );
  }
}
