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
 * HealthMonitor
 */
export interface HealthMonitor<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Http Monitor.
   * @nullable
   */
  httpMonitor?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Interval In Sec.
   * @nullable
   */
  intervalInSec?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Is Enabled.
   * @nullable
   */
  isEnabled?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Tcp Monitor.
   * @nullable
   */
  tcpMonitor?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * HealthMonitorField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class HealthMonitorField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  HealthMonitor,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link HealthMonitor.httpMonitor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  httpMonitor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link HealthMonitor.intervalInSec} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  intervalInSec: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  >;
  /**
   * Representation of the {@link HealthMonitor.isEnabled} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isEnabled: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link HealthMonitor.tcpMonitor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tcpMonitor: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of HealthMonitorField.
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
export declare namespace HealthMonitor {
  /**
   * Metadata information on all properties of the `HealthMonitor` complex type.
   */
  const _propertyMetadata: PropertyMetadata<HealthMonitor>[];
}
//# sourceMappingURL=HealthMonitor.d.ts.map
