/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyTemplateContainers } from './PolicyTemplateContainers';
import { PolicyTemplateContainersRequestBuilder } from './PolicyTemplateContainersRequestBuilder';
import { TemplateFileResourcesApi } from './TemplateFileResourcesApi';
import { TemplatePolicysApi } from './TemplatePolicysApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class PolicyTemplateContainersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PolicyTemplateContainers<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      TemplateFileResourcesApi<DeSerializersT>,
      TemplatePolicysApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof PolicyTemplateContainers;
  requestBuilder(): PolicyTemplateContainersRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    PolicyTemplateContainers<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    PolicyTemplateContainers<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof PolicyTemplateContainers,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    DESCRIPTION: OrderableEdmTypeField<
      PolicyTemplateContainers<
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
    LIFE_CYCLE: HistoryField<
      PolicyTemplateContainers<
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
      PolicyTemplateContainers<
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
    PROXY_END_POINTXML: OrderableEdmTypeField<
      PolicyTemplateContainers<
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
    TARGET_END_POINTXML: OrderableEdmTypeField<
      PolicyTemplateContainers<
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
    TITLE: OrderableEdmTypeField<
      PolicyTemplateContainers<
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
    VERSION: OrderableEdmTypeField<
      PolicyTemplateContainers<
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
     * Static representation of the one-to-many navigation property {@link fileResources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FILE_RESOURCES: Link<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT,
      TemplateFileResourcesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link policies} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICIES: Link<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT,
      TemplatePolicysApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      PolicyTemplateContainers<
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
//# sourceMappingURL=PolicyTemplateContainersApi.d.ts.map
