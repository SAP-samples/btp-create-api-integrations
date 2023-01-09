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
import { ConditionalFlowRules } from './ConditionalFlowRules';
/**
 * Request builder class for operations supported on the {@link ConditionalFlowRules} entity.
 */
export declare class ConditionalFlowRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConditionalFlowRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `ConditionalFlowRules` entity based on its keys.
   * @param id Key property. See {@link ConditionalFlowRules.id}.
   * @returns A request builder for creating requests to retrieve one `ConditionalFlowRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConditionalFlowRules<T>, T>;
  /**
   * Returns a request builder for querying all `ConditionalFlowRules` entities.
   * @returns A request builder for creating requests to retrieve all `ConditionalFlowRules` entities.
   */
  getAll(): GetAllRequestBuilder<ConditionalFlowRules<T>, T>;
  /**
   * Returns a request builder for creating a `ConditionalFlowRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConditionalFlowRules`.
   */
  create(
    entity: ConditionalFlowRules<T>
  ): CreateRequestBuilder<ConditionalFlowRules<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ConditionalFlowRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConditionalFlowRules`.
   */
  update(
    entity: ConditionalFlowRules<T>
  ): UpdateRequestBuilder<ConditionalFlowRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConditionalFlowRules`.
   * @param id Key property. See {@link ConditionalFlowRules.id}.
   * @returns A request builder for creating requests that delete an entity of type `ConditionalFlowRules`.
   */
  delete(id: string): DeleteRequestBuilder<ConditionalFlowRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConditionalFlowRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConditionalFlowRules` by taking the entity as a parameter.
   */
  delete(
    entity: ConditionalFlowRules<T>
  ): DeleteRequestBuilder<ConditionalFlowRules<T>, T>;
}
//# sourceMappingURL=ConditionalFlowRulesRequestBuilder.d.ts.map
