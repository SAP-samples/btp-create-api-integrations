/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiportalCloneMappings } from './ApiportalCloneMappings';
import { ApiportalCloneMappingsRequestBuilder } from './ApiportalCloneMappingsRequestBuilder';
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
export class ApiportalCloneMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiportalCloneMappings<DeSerializersT>, DeSerializersT>
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
  ): ApiportalCloneMappingsApi<DeSerializersT> {
    return new ApiportalCloneMappingsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ApiportalCloneMappings;

  requestBuilder(): ApiportalCloneMappingsRequestBuilder<DeSerializersT> {
    return new ApiportalCloneMappingsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiportalCloneMappings<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ApiportalCloneMappings<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ApiportalCloneMappings<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ApiportalCloneMappings,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ApiportalCloneMappings,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    APIPORTAL_CLIENT_ID: OrderableEdmTypeField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEVPORTAL_TENANT_ID: OrderableEdmTypeField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NEW_SERVICE_INSTANCE_ID: OrderableEdmTypeField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_INSTANCE_ID: OrderableEdmTypeField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBACCOUNT_ID: OrderableEdmTypeField<
      ApiportalCloneMappings<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ApiportalCloneMappings<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link apiportalClientId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APIPORTAL_CLIENT_ID: fieldBuilder.buildEdmTypeField(
          'apiportalClientId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link devportalTenantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVPORTAL_TENANT_ID: fieldBuilder.buildEdmTypeField(
          'devportalTenantId',
          'Edm.String',
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
         * Static representation of the {@link newServiceInstanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_SERVICE_INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'newServiceInstanceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceInstanceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_INSTANCE_ID: fieldBuilder.buildEdmTypeField(
          'serviceInstanceId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subaccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'subaccountId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiportalCloneMappings)
      };
    }

    return this._schema;
  }
}
