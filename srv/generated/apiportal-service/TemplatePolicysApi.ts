/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TemplatePolicys } from './TemplatePolicys';
import { TemplatePolicysRequestBuilder } from './TemplatePolicysRequestBuilder';
import { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class TemplatePolicysApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TemplatePolicys<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link policyTemplateContainer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICY_TEMPLATE_CONTAINER: OneToOneLink<
      TemplatePolicys<DeSerializersT>,
      DeSerializersT,
      PolicyTemplateContainersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PolicyTemplateContainersApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      POLICY_TEMPLATE_CONTAINER: new OneToOneLink(
        'policyTemplateContainer',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TemplatePolicys;

  requestBuilder(): TemplatePolicysRequestBuilder<DeSerializersT> {
    return new TemplatePolicysRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TemplatePolicys<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TemplatePolicys<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TemplatePolicys<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TemplatePolicys, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TemplatePolicys,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      TemplatePolicys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LIFE_CYCLE: HistoryField<
      TemplatePolicys<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      TemplatePolicys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TEMPLATE_NAME: OrderableEdmTypeField<
      TemplatePolicys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    POLICY_CONTENT: OrderableEdmTypeField<
      TemplatePolicys<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      TemplatePolicys<DeSerializers>,
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
    ALL_FIELDS: AllFields<TemplatePolicys<DeSerializers>>;
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
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link fkTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'FK_TEMPLATE_NAME',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link policyContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POLICY_CONTENT: fieldBuilder.buildEdmTypeField(
          'policy_content',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('type', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TemplatePolicys)
      };
    }

    return this._schema;
  }
}
