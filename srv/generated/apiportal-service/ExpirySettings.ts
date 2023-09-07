/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
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
export class ExpirySettingsField<
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
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
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
  > = this._fieldBuilder.buildEdmTypeField('expiry_date', 'Edm.DateTime', true);
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
  > = this._fieldBuilder.buildEdmTypeField(
    'expiry_settings_override_disabled',
    'Edm.Boolean',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField('time_out', 'Edm.Int32', true);
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
  > = this._fieldBuilder.buildEdmTypeField('time_out_day', 'Edm.String', true);

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
  ) {
    super(fieldName, fieldOf, deSerializers, ExpirySettings, fieldOptions);
  }
}

export namespace ExpirySettings {
  /**
   * Metadata information on all properties of the `ExpirySettings` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<ExpirySettings>[] = [
    {
      originalName: 'expiry_date',
      name: 'expiryDate',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'expiry_settings_override_disabled',
      name: 'expirySettingsOverrideDisabled',
      type: 'Edm.Boolean',
      isCollection: false
    },
    {
      originalName: 'time_out',
      name: 'timeOut',
      type: 'Edm.Int32',
      isCollection: false
    },
    {
      originalName: 'time_out_day',
      name: 'timeOutDay',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
