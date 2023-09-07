/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TemplateFileResources } from './TemplateFileResources';
import { TemplateFileResourcesRequestBuilder } from './TemplateFileResourcesRequestBuilder';
import { PolicyTemplateContainersApi } from './PolicyTemplateContainersApi';
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
export class TemplateFileResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TemplateFileResources<DeSerializersT>, DeSerializersT>
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
  ): TemplateFileResourcesApi<DeSerializersT> {
    return new TemplateFileResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link policyTemplateContainer} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POLICY_TEMPLATE_CONTAINER: OneToOneLink<
      TemplateFileResources<DeSerializersT>,
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

  entityConstructor = TemplateFileResources;

  requestBuilder(): TemplateFileResourcesRequestBuilder<DeSerializersT> {
    return new TemplateFileResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TemplateFileResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TemplateFileResources<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TemplateFileResources<DeSerializersT>,
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
    typeof TemplateFileResources,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TemplateFileResources,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONTENT: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FK_TEMPLATE_NAME: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      TemplateFileResources<DeSerializers>,
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
      TemplateFileResources<DeSerializersT>,
      DeSerializersT,
      PolicyTemplateContainersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TemplateFileResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link content} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTENT: fieldBuilder.buildEdmTypeField('content', 'Edm.String', true),
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
         * Static representation of the {@link fkTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'FK_TEMPLATE_NAME',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('scope', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', TemplateFileResources)
      };
    }

    return this._schema;
  }
}
