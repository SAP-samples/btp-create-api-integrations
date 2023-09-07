/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FaultRules } from './FaultRules';
import { FaultRulesRequestBuilder } from './FaultRulesRequestBuilder';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { RouteRulesApi } from './RouteRulesApi';
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
export class FaultRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FaultRules<DeSerializersT>, DeSerializersT>
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
  ): FaultRulesApi<DeSerializersT> {
    return new FaultRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_RULE: OneToOneLink<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      RouteRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      RouteRulesApi<DeSerializersT>,
      StepsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROXY_END_POINT: new OneToOneLink('proxyEndPoint', this, linkedApis[0]),
      ROUTE_RULE: new OneToOneLink('routeRule', this, linkedApis[1]),
      STEPS: new Link('steps', this, linkedApis[2]),
      TARGET_END_POINT: new OneToOneLink('targetEndPoint', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = FaultRules;

  requestBuilder(): FaultRulesRequestBuilder<DeSerializersT> {
    return new FaultRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FaultRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<FaultRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<FaultRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof FaultRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(FaultRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONDITION: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_ROUTERULE_ID: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      FaultRules<DeSerializers>,
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
      FaultRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link routeRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ROUTE_RULE: OneToOneLink<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      RouteRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      FaultRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<FaultRules<DeSerializers>>;
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
         * Static representation of the {@link fkRouteruleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_ROUTERULE_ID: fieldBuilder.buildEdmTypeField(
          'FK_ROUTERULE_ID',
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
        ALL_FIELDS: new AllFields('*', FaultRules)
      };
    }

    return this._schema;
  }
}
