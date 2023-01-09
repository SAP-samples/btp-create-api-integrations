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
import { PolicyTemplateContainers } from './PolicyTemplateContainers';
/**
 * Request builder class for operations supported on the {@link PolicyTemplateContainers} entity.
 */
export declare class PolicyTemplateContainersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyTemplateContainers<T>, T> {
  /**
   * Returns a request builder for retrieving one `PolicyTemplateContainers` entity based on its keys.
   * @param name Key property. See {@link PolicyTemplateContainers.name}.
   * @returns A request builder for creating requests to retrieve one `PolicyTemplateContainers` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PolicyTemplateContainers<T>, T>;
  /**
   * Returns a request builder for querying all `PolicyTemplateContainers` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyTemplateContainers` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyTemplateContainers<T>, T>;
  /**
   * Returns a request builder for creating a `PolicyTemplateContainers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyTemplateContainers`.
   */
  create(
    entity: PolicyTemplateContainers<T>
  ): CreateRequestBuilder<PolicyTemplateContainers<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `PolicyTemplateContainers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyTemplateContainers`.
   */
  update(
    entity: PolicyTemplateContainers<T>
  ): UpdateRequestBuilder<PolicyTemplateContainers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyTemplateContainers`.
   * @param name Key property. See {@link PolicyTemplateContainers.name}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTemplateContainers`.
   */
  delete(name: string): DeleteRequestBuilder<PolicyTemplateContainers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyTemplateContainers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyTemplateContainers` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyTemplateContainers<T>
  ): DeleteRequestBuilder<PolicyTemplateContainers<T>, T>;
}
//# sourceMappingURL=PolicyTemplateContainersRequestBuilder.d.ts.map
