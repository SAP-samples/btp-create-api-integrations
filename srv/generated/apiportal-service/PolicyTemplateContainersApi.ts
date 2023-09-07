/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PolicyTemplateContainers } from './PolicyTemplateContainers';
import { PolicyTemplateContainersRequestBuilder } from './PolicyTemplateContainersRequestBuilder';
import { TemplateFileResourcesApi } from './TemplateFileResourcesApi';
import { TemplatePolicysApi } from './TemplatePolicysApi';
import { History, HistoryField } from './History';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export class PolicyTemplateContainersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PolicyTemplateContainers<DeSerializersT>, DeSerializersT>
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
  ): PolicyTemplateContainersApi<DeSerializersT> {
    return new PolicyTemplateContainersApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      TemplateFileResourcesApi<DeSerializersT>,
      TemplatePolicysApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FILE_RESOURCES: new Link('fileResources', this, linkedApis[0]),
      POLICIES: new Link('policies', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PolicyTemplateContainers;

  requestBuilder(): PolicyTemplateContainersRequestBuilder<DeSerializersT> {
    return new PolicyTemplateContainersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PolicyTemplateContainers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PolicyTemplateContainers<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PolicyTemplateContainers<DeSerializersT>,
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
    typeof PolicyTemplateContainers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PolicyTemplateContainers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DESCRIPTION: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROXY_END_POINTXML: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_END_POINTXML: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      PolicyTemplateContainers<DeSerializers>,
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
    ALL_FIELDS: AllFields<PolicyTemplateContainers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifeCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_CYCLE: fieldBuilder.buildComplexTypeField(
          'life_cycle',
          HistoryField,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', false),
        /**
         * Static representation of the {@link proxyEndPointxml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY_END_POINTXML: fieldBuilder.buildEdmTypeField(
          'proxyEndPointxml',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetEndPointxml} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_END_POINTXML: fieldBuilder.buildEdmTypeField(
          'targetEndPointxml',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PolicyTemplateContainers)
      };
    }

    return this._schema;
  }
}
