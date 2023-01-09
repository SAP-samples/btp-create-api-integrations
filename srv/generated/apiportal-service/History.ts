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
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * History
 */
export interface History<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Changed At.
   * @nullable
   */
  changedAt?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Changed By.
   * @nullable
   */
  changedBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Created At.
   * @nullable
   */
  createdAt?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Created By.
   * @nullable
   */
  createdBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * HistoryField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class HistoryField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  History,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link History.changedAt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedAt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('changed_at', 'Edm.DateTime', true);
  /**
   * Representation of the {@link History.changedBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  changedBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('changed_by', 'Edm.String', true);
  /**
   * Representation of the {@link History.createdAt} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createdAt: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('created_at', 'Edm.DateTime', true);
  /**
   * Representation of the {@link History.createdBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  createdBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('created_by', 'Edm.String', true);

  /**
   * Creates an instance of HistoryField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, History, fieldOptions);
  }
}

export namespace History {
  /**
   * Metadata information on all properties of the `History` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<History>[] = [
    {
      originalName: 'changed_at',
      name: 'changedAt',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'changed_by',
      name: 'changedBy',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'created_at',
      name: 'createdAt',
      type: 'Edm.DateTime',
      isCollection: false
    },
    {
      originalName: 'created_by',
      name: 'createdBy',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
