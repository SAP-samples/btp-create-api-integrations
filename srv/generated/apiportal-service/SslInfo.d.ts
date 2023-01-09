/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  Entity,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';
/**
 * SslInfo
 */
export interface SslInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Ciphers.
   * @nullable
   */
  ciphers?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Client Auth Enabled.
   * @nullable
   */
  clientAuthEnabled?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Enabled.
   * @nullable
   */
  enabled?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Ignore Validation Errors.
   * @nullable
   */
  ignoreValidationErrors?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Key Alias.
   * @nullable
   */
  keyAlias?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Key Store.
   * @nullable
   */
  keyStore?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Protocols.
   * @nullable
   */
  protocols?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Trust Store.
   * @nullable
   */
  trustStore?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * SslInfoField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class SslInfoField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SslInfo,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link SslInfo.ciphers} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ciphers: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.clientAuthEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  clientAuthEnabled: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.enabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  enabled: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.ignoreValidationErrors} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  ignoreValidationErrors: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.keyAlias} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyAlias: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.keyStore} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  keyStore: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.protocols} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  protocols: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link SslInfo.trustStore} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  trustStore: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of SslInfoField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  );
}
export declare namespace SslInfo {
  /**
   * Metadata information on all properties of the `SslInfo` complex type.
   */
  const _propertyMetadata: PropertyMetadata<SslInfo>[];
}
//# sourceMappingURL=SslInfo.d.ts.map
