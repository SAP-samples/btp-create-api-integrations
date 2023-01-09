/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Streams } from './Streams';
import { StreamsRequestBuilder } from './StreamsRequestBuilder';
import { FlowRulesApi } from './FlowRulesApi';
import { StepsApi } from './StepsApi';
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
export declare class StreamsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Streams<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [FlowRulesApi<DeSerializersT>, StepsApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof Streams;
  requestBuilder(): StreamsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<Streams<DeSerializersT>, DeSerializersT>;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Streams<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Streams, DeSerializersT>;
  private _schema?;
  get schema(): {
    FK_FLOW_ID: OrderableEdmTypeField<
      Streams<
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
      Streams<
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
    IS_REQUEST: OrderableEdmTypeField<
      Streams<
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
    /**
     * Static representation of the one-to-one navigation property {@link flow} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FLOW: OneToOneLink<
      Streams<DeSerializersT>,
      DeSerializersT,
      FlowRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link steps} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    STEPS: Link<
      Streams<DeSerializersT>,
      DeSerializersT,
      StepsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Streams<
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
//# sourceMappingURL=StreamsApi.d.ts.map
