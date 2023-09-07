/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CacheResources } from './CacheResources';
import { CacheResourcesRequestBuilder } from './CacheResourcesRequestBuilder';
import { ExpirySettings, ExpirySettingsField } from './ExpirySettings';
import { History, HistoryField } from './History';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class CacheResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CacheResources<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): CacheResourcesApi<DeSerializersT> {
    return new CacheResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CacheResources;

  requestBuilder(): CacheResourcesRequestBuilder<DeSerializersT> {
    return new CacheResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CacheResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CacheResources<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CacheResources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CacheResources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(CacheResources, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    COMPRESSION_ENABLED: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    DISK_SIZE: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    EXPIRY_SETTINGS: ExpirySettingsField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    IN_MEMORY_SIZE: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    MAX_ELEMENT_DISK: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MAX_ELEMENT_MEMORY: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    MIN_COMPRESSION_SIZE: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVER_FLOW_TO_DISK: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PERSISTENT_CACHE: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SKIP_CACHE_ELEMENT_SIZE: OrderableEdmTypeField<
      CacheResources<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CacheResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link compressionEnabled} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPRESSION_ENABLED: fieldBuilder.buildEdmTypeField(
          'compression_enabled',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link diskSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISK_SIZE: fieldBuilder.buildEdmTypeField(
          'disk_size',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link expirySettings} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRY_SETTINGS: fieldBuilder.buildComplexTypeField(
          'expirySettings',
          ExpirySettingsField,
          true
        ),
        /**
         * Static representation of the {@link inMemorySize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_MEMORY_SIZE: fieldBuilder.buildEdmTypeField(
          'in_memory_size',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link lifeCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_CYCLE: fieldBuilder.buildComplexTypeField(
          'life_cycle',
          HistoryField,
          true
        ),
        /**
         * Static representation of the {@link maxElementDisk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ELEMENT_DISK: fieldBuilder.buildEdmTypeField(
          'max_element_disk',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link maxElementMemory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_ELEMENT_MEMORY: fieldBuilder.buildEdmTypeField(
          'max_element_memory',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link minCompressionSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIN_COMPRESSION_SIZE: fieldBuilder.buildEdmTypeField(
          'min_compression_size',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link overFlowToDisk} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVER_FLOW_TO_DISK: fieldBuilder.buildEdmTypeField(
          'over_flow_to_disk',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link persistentCache} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSISTENT_CACHE: fieldBuilder.buildEdmTypeField(
          'persistent_cache',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link skipCacheElementSize} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SKIP_CACHE_ELEMENT_SIZE: fieldBuilder.buildEdmTypeField(
          'skip_cache_element_size',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CacheResources)
      };
    }

    return this._schema;
  }
}
