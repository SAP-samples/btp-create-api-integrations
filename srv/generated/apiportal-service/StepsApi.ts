/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Steps } from './Steps';
import { StepsRequestBuilder } from './StepsRequestBuilder';
import { DefaultFaultRulesApi } from './DefaultFaultRulesApi';
import { FaultRulesApi } from './FaultRulesApi';
import { StreamsApi } from './StreamsApi';
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
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class StepsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Steps<DeSerializersT>, DeSerializersT>
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
  ): StepsApi<DeSerializersT> {
    return new StepsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link faultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULE: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link stream} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STREAM: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DefaultFaultRulesApi<DeSerializersT>,
      FaultRulesApi<DeSerializersT>,
      StreamsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DEFAULT_FAULT_RULE: new OneToOneLink(
        'defaultFaultRule',
        this,
        linkedApis[0]
      ),
      FAULT_RULE: new OneToOneLink('faultRule', this, linkedApis[1]),
      STREAM: new OneToOneLink('stream', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = Steps;

  requestBuilder(): StepsRequestBuilder<DeSerializersT> {
    return new StepsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Steps<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Steps<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Steps<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Steps, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Steps, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONDITION: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_DEFAULTFAULTRULE_ID: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_FAULTRULE_ID: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POLICY_NAME: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    FK_STREAM_ID: OrderableEdmTypeField<
      Steps<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link defaultFaultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DEFAULT_FAULT_RULE: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      DefaultFaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link faultRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULE: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link stream} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STREAM: OneToOneLink<
      Steps<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Steps<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link condition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION: fieldBuilder.buildEdmTypeField(
          'condition',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkDefaultfaultruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_DEFAULTFAULTRULE_ID: fieldBuilder.buildEdmTypeField(
          'FK_DEFAULTFAULTRULE_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkFaultruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_FAULTRULE_ID: fieldBuilder.buildEdmTypeField(
          'FK_FAULTRULE_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link policyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_NAME: fieldBuilder.buildEdmTypeField(
          'policy_name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
        /**
         * Static representation of the {@link fkStreamId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_STREAM_ID: fieldBuilder.buildEdmTypeField(
          'FK_STREAM_ID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Steps)
      };
    }

    return this._schema;
  }
}
