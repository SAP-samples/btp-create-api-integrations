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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class DefaultFaultRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DefaultFaultRules<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      StepsApi<DeSerializersT>,
      ApiTargetEndPointsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof DefaultFaultRules;
  requestBuilder(): DefaultFaultRulesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    DefaultFaultRules<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<DefaultFaultRules<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof DefaultFaultRules, DeSerializersT>;
  private _schema?;
  get schema(): {
    ALWAYS_ENFORCE: OrderableEdmTypeField<
      DefaultFaultRules<
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
    ID: OrderableEdmTypeField<
      DefaultFaultRules<
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
      DefaultFaultRules<
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
      DefaultFaultRules<
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
      DefaultFaultRules<
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
    ALL_FIELDS: AllFields<
      DefaultFaultRules<
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
//# sourceMappingURL=DefaultFaultRulesApi.d.ts.map
