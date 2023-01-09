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
import { FlowRules } from './FlowRules';
/**
 * Request builder class for operations supported on the {@link FlowRules} entity.
 */
export declare class FlowRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FlowRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `FlowRules` entity based on its keys.
   * @param id Key property. See {@link FlowRules.id}.
   * @returns A request builder for creating requests to retrieve one `FlowRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FlowRules<T>, T>;
  /**
   * Returns a request builder for querying all `FlowRules` entities.
   * @returns A request builder for creating requests to retrieve all `FlowRules` entities.
   */
  getAll(): GetAllRequestBuilder<FlowRules<T>, T>;
  /**
   * Returns a request builder for creating a `FlowRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FlowRules`.
   */
  create(entity: FlowRules<T>): CreateRequestBuilder<FlowRules<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `FlowRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FlowRules`.
   */
  update(entity: FlowRules<T>): UpdateRequestBuilder<FlowRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FlowRules`.
   * @param id Key property. See {@link FlowRules.id}.
   * @returns A request builder for creating requests that delete an entity of type `FlowRules`.
   */
  delete(id: string): DeleteRequestBuilder<FlowRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FlowRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FlowRules` by taking the entity as a parameter.
   */
  delete(entity: FlowRules<T>): DeleteRequestBuilder<FlowRules<T>, T>;
}
//# sourceMappingURL=FlowRulesRequestBuilder.d.ts.map
