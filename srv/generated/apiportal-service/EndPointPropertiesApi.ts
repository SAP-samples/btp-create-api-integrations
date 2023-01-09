/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EndPointProperties } from './EndPointProperties';
import { EndPointPropertiesRequestBuilder } from './EndPointPropertiesRequestBuilder';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class EndPointPropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EndPointProperties<DeSerializersT>, DeSerializersT>
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
      EndPointProperties<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      EndPointProperties<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROXY_END_POINT: new OneToOneLink('proxyEndPoint', this, linkedApis[0]),
      TARGET_END_POINT: new OneToOneLink('targetEndPoint', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = EndPointProperties;

  requestBuilder(): EndPointPropertiesRequestBuilder<DeSerializersT> {
    return new EndPointPropertiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EndPointProperties<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<EndPointProperties<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EndPointProperties<DeSerializersT>,
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
    typeof EndPointProperties,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EndPointProperties,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      EndPointProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EndPointProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      EndPointProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      EndPointProperties<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      EndPointProperties<DeSerializers>,
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
      EndPointProperties<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      EndPointProperties<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EndPointProperties<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('value', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EndPointProperties)
      };
    }

    return this._schema;
  }
}
