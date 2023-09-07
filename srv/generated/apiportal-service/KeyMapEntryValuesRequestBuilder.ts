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
import { KeyMapEntryValues } from './KeyMapEntryValues';

/**
 * Request builder class for operations supported on the {@link KeyMapEntryValues} entity.
 */
export class KeyMapEntryValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<KeyMapEntryValues<T>, T> {
  /**
   * Returns a request builder for retrieving one `KeyMapEntryValues` entity based on its keys.
   * @param mapName Key property. See {@link KeyMapEntryValues.mapName}.
   * @param name Key property. See {@link KeyMapEntryValues.name}.
   * @returns A request builder for creating requests to retrieve one `KeyMapEntryValues` entity based on its keys.
   */
  getByKey(
    mapName: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<KeyMapEntryValues<T>, T> {
    return new GetByKeyRequestBuilder<KeyMapEntryValues<T>, T>(this.entityApi, {
      map_name: mapName,
      name: name
    });
  }

  /**
   * Returns a request builder for querying all `KeyMapEntryValues` entities.
   * @returns A request builder for creating requests to retrieve all `KeyMapEntryValues` entities.
   */
  getAll(): GetAllRequestBuilder<KeyMapEntryValues<T>, T> {
    return new GetAllRequestBuilder<KeyMapEntryValues<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `KeyMapEntryValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `KeyMapEntryValues`.
   */
  create(
    entity: KeyMapEntryValues<T>
  ): CreateRequestBuilder<KeyMapEntryValues<T>, T> {
    return new CreateRequestBuilder<KeyMapEntryValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `KeyMapEntryValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `KeyMapEntryValues`.
   */
  update(
    entity: KeyMapEntryValues<T>
  ): UpdateRequestBuilder<KeyMapEntryValues<T>, T> {
    return new UpdateRequestBuilder<KeyMapEntryValues<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `KeyMapEntryValues`.
   * @param mapName Key property. See {@link KeyMapEntryValues.mapName}.
   * @param name Key property. See {@link KeyMapEntryValues.name}.
   * @returns A request builder for creating requests that delete an entity of type `KeyMapEntryValues`.
   */
  delete(
    mapName: string,
    name: string
  ): DeleteRequestBuilder<KeyMapEntryValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `KeyMapEntryValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `KeyMapEntryValues` by taking the entity as a parameter.
   */
  delete(
    entity: KeyMapEntryValues<T>
  ): DeleteRequestBuilder<KeyMapEntryValues<T>, T>;
  delete(
    mapNameOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<KeyMapEntryValues<T>, T> {
    return new DeleteRequestBuilder<KeyMapEntryValues<T>, T>(
      this.entityApi,
      mapNameOrEntity instanceof KeyMapEntryValues
        ? mapNameOrEntity
        : {
            map_name: mapNameOrEntity!,
            name: name!
          }
    );
  }
}
