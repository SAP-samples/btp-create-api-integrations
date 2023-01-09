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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class EndPointPropertiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EndPointProperties<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof EndPointProperties;
  requestBuilder(): EndPointPropertiesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    EndPointProperties<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<EndPointProperties<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof EndPointProperties, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALUE: OrderableEdmTypeField<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      EndPointProperties<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
//# sourceMappingURL=EndPointPropertiesApi.d.ts.map
