/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TemplatePolicys } from './TemplatePolicys';
import { TemplatePolicysRequestBuilder } from './TemplatePolicysRequestBuilder';
import { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
import { HistoryField } from './History';
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
export declare class TemplatePolicysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TemplatePolicys<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [PolicyTemplateContainersApi<DeSerializersT>]
  ): this;
  entityConstructor: typeof TemplatePolicys;
  requestBuilder(): TemplatePolicysRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    TemplatePolicys<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<TemplatePolicys<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof TemplatePolicys, DeSerializersT>;
  private _schema?;
  get schema(): {
    ID: OrderableEdmTypeField<
      TemplatePolicys<
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
    LIFE_CYCLE: HistoryField<
      TemplatePolicys<
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
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      TemplatePolicys<
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
    FK_TEMPLATE_NAME: OrderableEdmTypeField<
      TemplatePolicys<
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
    POLICY_CONTENT: OrderableEdmTypeField<
      TemplatePolicys<
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
    TYPE: OrderableEdmTypeField<
      TemplatePolicys<
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
     * Static representation of the one-to-one navigation property {@link policyTemplateContainer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICY_TEMPLATE_CONTAINER: OneToOneLink<
      TemplatePolicys<DeSerializersT>,
      DeSerializersT,
      PolicyTemplateContainersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      TemplatePolicys<
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
//# sourceMappingURL=TemplatePolicysApi.d.ts.map
