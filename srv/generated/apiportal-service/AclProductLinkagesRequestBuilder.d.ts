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
import { AclProductLinkages } from './AclProductLinkages';
/**
 * Request builder class for operations supported on the {@link AclProductLinkages} entity.
 */
export declare class AclProductLinkagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AclProductLinkages<T>, T> {
  /**
   * Returns a request builder for retrieving one `AclProductLinkages` entity based on its keys.
   * @param ruleId Key property. See {@link AclProductLinkages.ruleId}.
   * @returns A request builder for creating requests to retrieve one `AclProductLinkages` entity based on its keys.
   */
  getByKey(
    ruleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AclProductLinkages<T>, T>;
  /**
   * Returns a request builder for querying all `AclProductLinkages` entities.
   * @returns A request builder for creating requests to retrieve all `AclProductLinkages` entities.
   */
  getAll(): GetAllRequestBuilder<AclProductLinkages<T>, T>;
  /**
   * Returns a request builder for creating a `AclProductLinkages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AclProductLinkages`.
   */
  create(
    entity: AclProductLinkages<T>
  ): CreateRequestBuilder<AclProductLinkages<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AclProductLinkages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AclProductLinkages`.
   */
  update(
    entity: AclProductLinkages<T>
  ): UpdateRequestBuilder<AclProductLinkages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AclProductLinkages`.
   * @param ruleId Key property. See {@link AclProductLinkages.ruleId}.
   * @returns A request builder for creating requests that delete an entity of type `AclProductLinkages`.
   */
  delete(ruleId: string): DeleteRequestBuilder<AclProductLinkages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AclProductLinkages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AclProductLinkages` by taking the entity as a parameter.
   */
  delete(
    entity: AclProductLinkages<T>
  ): DeleteRequestBuilder<AclProductLinkages<T>, T>;
}
//# sourceMappingURL=AclProductLinkagesRequestBuilder.d.ts.map
