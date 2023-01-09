/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ConditionalFlowRules } from './ConditionalFlowRules';
import { ConditionalFlowRulesRequestBuilder } from './ConditionalFlowRulesRequestBuilder';
import { ApiResourcesApi } from './ApiResourcesApi';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { StreamsApi } from './StreamsApi';
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
export declare class ConditionalFlowRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ConditionalFlowRules<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ApiResourcesApi<DeSerializersT>,
      ApiProxyEndPointsApi<DeSerializersT>,
      StreamsApi<DeSerializersT>,
      StreamsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof ConditionalFlowRules;
  requestBuilder(): ConditionalFlowRulesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    ConditionalFlowRules<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    ConditionalFlowRules<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof ConditionalFlowRules, DeSerializersT>;
  private _schema?;
  get schema(): {
    FK_APIRESOURCE_ID: OrderableEdmTypeField<
      ConditionalFlowRules<
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
    CONDITIONS: OrderableEdmTypeField<
      ConditionalFlowRules<
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
    ID: OrderableEdmTypeField<
      ConditionalFlowRules<
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
      ConditionalFlowRules<
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
      ConditionalFlowRules<
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
    READ_ONLY: OrderableEdmTypeField<
      ConditionalFlowRules<
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
      'Edm.Boolean',
      true,
      true
    >;
    FK_REQUEST_ID: OrderableEdmTypeField<
      ConditionalFlowRules<
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
    FK_RESPONSE_ID: OrderableEdmTypeField<
      ConditionalFlowRules<
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
    SEQUENCE: OrderableEdmTypeField<
      ConditionalFlowRules<
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
      'Edm.Int32',
      true,
      true
    >;
    FK_TARGETENDPOINT_ID: OrderableEdmTypeField<
      ConditionalFlowRules<
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
     * Static representation of the one-to-one navigation property {@link apiResource} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_RESOURCE: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link proxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROXY_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link targetEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TARGET_END_POINT: OneToOneLink<
      ConditionalFlowRules<DeSerializersT>,
      DeSerializersT,
      ApiTargetEndPointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      ConditionalFlowRules<
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
//# sourceMappingURL=ConditionalFlowRulesApi.d.ts.map
