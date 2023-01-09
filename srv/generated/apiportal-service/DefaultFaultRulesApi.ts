/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DefaultFaultRules } from './DefaultFaultRules';
import { DefaultFaultRulesRequestBuilder } from './DefaultFaultRulesRequestBuilder';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { StepsApi } from './StepsApi';
import { ApiTargetEndPointsApi } from './ApiTargetEndPointsApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class DefaultFaultRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DefaultFaultRules<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      StepsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROXY_END_POINT: new OneToOneLink('proxyEndPoint', this, linkedApis[0]),
      STEPS: new Link('steps', this, linkedApis[1]),
      TARGET_END_POINT: new OneToOneLink('targetEndPoint', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = DefaultFaultRules;

  requestBuilder(): DefaultFaultRulesRequestBuilder<DeSerializersT> {
    return new DefaultFaultRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DefaultFaultRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DefaultFaultRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DefaultFaultRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DefaultFaultRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DefaultFaultRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ALWAYS_ENFORCE: OrderableEdmTypeField<
      DefaultFaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      DefaultFaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DefaultFaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      DefaultFaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      DefaultFaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      DefaultFaultRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DefaultFaultRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link alwaysEnforce} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALWAYS_ENFORCE: fieldBuilder.buildEdmTypeField(
          'alwaysEnforce',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link fkProxyendpointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField(
          'FK_PROXYENDPOINT_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fkTargetendpointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_TARGETENDPOINT_ID: fieldBuilder.buildEdmTypeField(
          'FK_TARGETENDPOINT_ID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DefaultFaultRules)
      };
    }

    return this._schema;
  }
}
