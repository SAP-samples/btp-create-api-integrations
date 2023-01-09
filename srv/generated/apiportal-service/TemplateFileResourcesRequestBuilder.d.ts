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
import { TemplateFileResources } from './TemplateFileResources';
/**
 * Request builder class for operations supported on the {@link TemplateFileResources} entity.
 */
export declare class TemplateFileResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TemplateFileResources<T>, T> {
  /**
   * Returns a request builder for retrieving one `TemplateFileResources` entity based on its keys.
   * @param id Key property. See {@link TemplateFileResources.id}.
   * @returns A request builder for creating requests to retrieve one `TemplateFileResources` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TemplateFileResources<T>, T>;
  /**
   * Returns a request builder for querying all `TemplateFileResources` entities.
   * @returns A request builder for creating requests to retrieve all `TemplateFileResources` entities.
   */
  getAll(): GetAllRequestBuilder<TemplateFileResources<T>, T>;
  /**
   * Returns a request builder for creating a `TemplateFileResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TemplateFileResources`.
   */
  create(
    entity: TemplateFileResources<T>
  ): CreateRequestBuilder<TemplateFileResources<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `TemplateFileResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TemplateFileResources`.
   */
  update(
    entity: TemplateFileResources<T>
  ): UpdateRequestBuilder<TemplateFileResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemplateFileResources`.
   * @param id Key property. See {@link TemplateFileResources.id}.
   * @returns A request builder for creating requests that delete an entity of type `TemplateFileResources`.
   */
  delete(id: string): DeleteRequestBuilder<TemplateFileResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TemplateFileResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TemplateFileResources` by taking the entity as a parameter.
   */
  delete(
    entity: TemplateFileResources<T>
  ): DeleteRequestBuilder<TemplateFileResources<T>, T>;
}
//# sourceMappingURL=TemplateFileResourcesRequestBuilder.d.ts.map
