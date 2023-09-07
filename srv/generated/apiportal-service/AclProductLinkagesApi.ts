/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AclProductLinkages } from './AclProductLinkages';
import { AclProductLinkagesRequestBuilder } from './AclProductLinkagesRequestBuilder';
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
export class AclProductLinkagesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AclProductLinkages<DeSerializersT>, DeSerializersT>
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
  ): AclProductLinkagesApi<DeSerializersT> {
    return new AclProductLinkagesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AclProductLinkages;

  requestBuilder(): AclProductLinkagesRequestBuilder<DeSerializersT> {
    return new AclProductLinkagesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AclProductLinkages<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AclProductLinkages<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AclProductLinkages<DeSerializersT>,
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
    typeof AclProductLinkages,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AclProductLinkages,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DEVPORTAL_RULE_ID: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_ID: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTITY_TYPE: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_PUBLISHED: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERMISSION_SET: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RULE_ID: OrderableEdmTypeField<
      AclProductLinkages<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<AclProductLinkages<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link devportalRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEVPORTAL_RULE_ID: fieldBuilder.buildEdmTypeField(
          'devportalRuleId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'entityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTITY_TYPE: fieldBuilder.buildEdmTypeField(
          'entityType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isPublished} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUBLISHED: fieldBuilder.buildEdmTypeField(
          'isPublished',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'operation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link permissionSet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_SET: fieldBuilder.buildEdmTypeField(
          'permissionSet',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link ruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_ID: fieldBuilder.buildEdmTypeField('ruleId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AclProductLinkages)
      };
    }

    return this._schema;
  }
}
