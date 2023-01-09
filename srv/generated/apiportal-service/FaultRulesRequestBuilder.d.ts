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
import { FaultRules } from './FaultRules';
/**
 * Request builder class for operations supported on the {@link FaultRules} entity.
 */
export declare class FaultRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FaultRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `FaultRules` entity based on its keys.
   * @param id Key property. See {@link FaultRules.id}.
   * @returns A request builder for creating requests to retrieve one `FaultRules` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<FaultRules<T>, T>;
  /**
   * Returns a request builder for querying all `FaultRules` entities.
   * @returns A request builder for creating requests to retrieve all `FaultRules` entities.
   */
  getAll(): GetAllRequestBuilder<FaultRules<T>, T>;
  /**
   * Returns a request builder for creating a `FaultRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FaultRules`.
   */
  create(entity: FaultRules<T>): CreateRequestBuilder<FaultRules<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `FaultRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FaultRules`.
   */
  update(entity: FaultRules<T>): UpdateRequestBuilder<FaultRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FaultRules`.
   * @param id Key property. See {@link FaultRules.id}.
   * @returns A request builder for creating requests that delete an entity of type `FaultRules`.
   */
  delete(id: string): DeleteRequestBuilder<FaultRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FaultRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FaultRules` by taking the entity as a parameter.
   */
  delete(entity: FaultRules<T>): DeleteRequestBuilder<FaultRules<T>, T>;
}
//# sourceMappingURL=FaultRulesRequestBuilder.d.ts.map
