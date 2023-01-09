/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FlowRules } from './FlowRules';
import { FlowRulesRequestBuilder } from './FlowRulesRequestBuilder';
import { StreamsApi } from './StreamsApi';
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
export declare class FlowRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FlowRules<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [StreamsApi<DeSerializersT>, StreamsApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof FlowRules;
  requestBuilder(): FlowRulesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<FlowRules<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<FlowRules<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof FlowRules, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      FlowRules<
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
    FK_REQUEST_ID: OrderableEdmTypeField<
      FlowRules<
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
      FlowRules<
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
     * Static representation of the one-to-one navigation property {@link request} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REQUEST: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link response} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESPONSE: OneToOneLink<
      FlowRules<DeSerializersT>,
      DeSerializersT,
      StreamsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      FlowRules<
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
//# sourceMappingURL=FlowRulesApi.d.ts.map
