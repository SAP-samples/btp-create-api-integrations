/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HealthMonitorField } from './HealthMonitor';
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
 * LoadBalancerConfigurations
 */
export interface LoadBalancerConfigurations<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Algorithm.
   * @nullable
   */
  algorithm?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Fall Back Server.
   * @nullable
   */
  fallBackServer?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Health Monitor.
   * @nullable
   */
  healthMonitor?: DeserializedType<DeSerializersT, 'apiportal.HealthMonitor'>;
  /**
   * Is Retry.
   * @nullable
   */
  isRetry?: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
  /**
   * Max Failures.
   * @nullable
   */
  maxFailures?: DeserializedType<DeSerializersT, 'Edm.Int32'>;
  /**
   * Server Unhealthy Response Code.
   * @nullable
   */
  serverUnhealthyResponseCode?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Weigths.
   * @nullable
   */
  weigths?: DeserializedType<DeSerializersT, 'Edm.String'>;
}
/**
 * LoadBalancerConfigurationsField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export declare class LoadBalancerConfigurationsField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  LoadBalancerConfigurations,
  NullableT,
  SelectableT
> {
  private _fieldBuilder;
  /**
   * Representation of the {@link LoadBalancerConfigurations.algorithm} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  algorithm: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link LoadBalancerConfigurations.fallBackServer} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  fallBackServer: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link LoadBalancerConfigurations.healthMonitor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  healthMonitor: HealthMonitorField<EntityT, DeSerializersT, true, false>;
  /**
   * Representation of the {@link LoadBalancerConfigurations.isRetry} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  isRetry: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Boolean',
    true,
    false
  >;
  /**
   * Representation of the {@link LoadBalancerConfigurations.maxFailures} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  maxFailures: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.Int32',
    true,
    false
  >;
  /**
   * Representation of the {@link LoadBalancerConfigurations.serverUnhealthyResponseCode} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  serverUnhealthyResponseCode: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Representation of the {@link LoadBalancerConfigurations.weigths} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  weigths: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  >;
  /**
   * Creates an instance of LoadBalancerConfigurationsField.
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
export declare namespace LoadBalancerConfigurations {
  /**
   * Metadata information on all properties of the `LoadBalancerConfigurations` complex type.
   */
  const _propertyMetadata: PropertyMetadata<LoadBalancerConfigurations>[];
}
//# sourceMappingURL=LoadBalancerConfigurations.d.ts.map
