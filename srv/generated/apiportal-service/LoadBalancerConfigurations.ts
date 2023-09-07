/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HealthMonitor, HealthMonitorField } from './HealthMonitor';
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
export class LoadBalancerConfigurationsField<
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
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
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
  > = this._fieldBuilder.buildEdmTypeField('algorithm', 'Edm.String', true);
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
  > = this._fieldBuilder.buildEdmTypeField(
    'fallBackServer',
    'Edm.String',
    true
  );
  /**
   * Representation of the {@link LoadBalancerConfigurations.healthMonitor} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  healthMonitor: HealthMonitorField<EntityT, DeSerializersT, true, false> =
    this._fieldBuilder.buildComplexTypeField(
      'HealthMonitor',
      HealthMonitorField,
      true
    );
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
  > = this._fieldBuilder.buildEdmTypeField('isRetry', 'Edm.Boolean', true);
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
  > = this._fieldBuilder.buildEdmTypeField('maxFailures', 'Edm.Int32', true);
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
  > = this._fieldBuilder.buildEdmTypeField(
    'serverUnhealthyResponseCode',
    'Edm.String',
    true
  );
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
  > = this._fieldBuilder.buildEdmTypeField('weigths', 'Edm.String', true);

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
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      LoadBalancerConfigurations,
      fieldOptions
    );
  }
}

export namespace LoadBalancerConfigurations {
  /**
   * Metadata information on all properties of the `LoadBalancerConfigurations` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<LoadBalancerConfigurations>[] =
    [
      {
        originalName: 'algorithm',
        name: 'algorithm',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'fallBackServer',
        name: 'fallBackServer',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'HealthMonitor',
        name: 'healthMonitor',
        type: HealthMonitor,
        isCollection: false
      },
      {
        originalName: 'isRetry',
        name: 'isRetry',
        type: 'Edm.Boolean',
        isCollection: false
      },
      {
        originalName: 'maxFailures',
        name: 'maxFailures',
        type: 'Edm.Int32',
        isCollection: false
      },
      {
        originalName: 'serverUnhealthyResponseCode',
        name: 'serverUnhealthyResponseCode',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'weigths',
        name: 'weigths',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
