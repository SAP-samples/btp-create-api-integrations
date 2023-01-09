/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RouteRules } from './RouteRules';
import { RouteRulesRequestBuilder } from './RouteRulesRequestBuilder';
import { FaultRulesApi } from './FaultRulesApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class RouteRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RouteRules<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      RouteRules<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      RouteRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FaultRulesApi<DeSerializersT>,
      ApiProxyEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FAULT_RULES: new Link('faultRules', this, linkedApis[0]),
      PROXY_END_POINT: new OneToOneLink('proxyEndPoint', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = RouteRules;

  requestBuilder(): RouteRulesRequestBuilder<DeSerializersT> {
    return new RouteRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RouteRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RouteRules<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RouteRules<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RouteRules, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RouteRules, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONDITIONS: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TARGET_END_POINT_NAME: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    URL: OrderableEdmTypeField<
      RouteRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link faultRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FAULT_RULES: Link<
      RouteRules<DeSerializersT>,
      DeSerializersT,
      FaultRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      RouteRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RouteRules<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link conditions} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITIONS: fieldBuilder.buildEdmTypeField(
          'conditions',
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int32', true),
        /**
         * Static representation of the {@link targetEndPointName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_END_POINT_NAME: fieldBuilder.buildEdmTypeField(
          'targetEndPointName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link url} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        URL: fieldBuilder.buildEdmTypeField('url', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RouteRules)
      };
    }

    return this._schema;
  }
}
