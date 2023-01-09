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
 * ExpirySettings
 */
export interface ExpirySettings<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Expiry Date.
   * @nullable
   */
  expiryDate?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Expiry Settings Override Disabled.
   * @nullable
   */
  expirySettingsOverrideDisabled?: DeserializedType<
    DeSerializersT,
    'Edm.Boolean'
  >;
  /**
   * Time Out.
   * @nullable
   */
  timeOut?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Time Out Day.
   * @nullable
   */
  timeOutDay?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * ExpirySettingsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class ExpirySettingsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  ExpirySettings,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link ExpirySettings.expiryDate} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expiryDate: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  >;
  /**
   * Representation of the {@link ExpirySettings.expirySettingsOverrideDisabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  expirySettingsOverrideDisabled: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link ExpirySettings.timeOut} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeOut: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  >;
  /**
   * Representation of the {@link ExpirySettings.timeOutDay} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  timeOutDay: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of ExpirySettingsField.
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
export declare namespace ExpirySettings {
  /**
   * Metadata information on all properties of the `ExpirySettings` complex type.
   */
  const _propertyMetadata: PropertyMetadata<ExpirySettings>[];
}
//# sourceMappingURL=ExpirySettings.d.ts.map
