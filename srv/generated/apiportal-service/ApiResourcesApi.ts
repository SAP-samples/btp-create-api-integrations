/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ApiResources } from './ApiResources';
import { ApiResourcesRequestBuilder } from './ApiResourcesRequestBuilder';
import { ApiProxyEndPointsApi } from './ApiProxyEndPointsApi';
import { DocumentationsApi } from './DocumentationsApi';
import { ResourcesApi } from './ResourcesApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class ApiResourcesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ApiResources<DeSerializersT>, DeSerializersT>
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
  ): ApiResourcesApi<DeSerializersT> {
    return new ApiResourcesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link apiProxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY_END_POINT: OneToOneLink<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENTATIONS: Link<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      DocumentationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ApiProxyEndPointsApi<DeSerializersT>,
      DocumentationsApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      API_PROXY_END_POINT: new OneToOneLink(
        'apiProxyEndPoint',
        this,
        linkedApis[0]
      ),
      DOCUMENTATIONS: new Link('documentations', this, linkedApis[1]),
      RESOURCES: new Link('resources', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ApiResources;

  requestBuilder(): ApiResourcesRequestBuilder<DeSerializersT> {
    return new ApiResourcesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ApiResources<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ApiResources<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ApiResources<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ApiResources, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ApiResources, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FK_PROXYENDPOINT_ID: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CAN_SHOW_DELETE: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_GET: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_HEAD: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_OPTION: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_PATCH: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_POST: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CAN_SHOW_PUT: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_DELETE_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_GET_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_HEAD_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_OPTION_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_PATCH_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_POST_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_PUT_CHECKED: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROXY_END_POINT_NAME: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOURCE_PATH: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ApiResources<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProxyEndPoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY_END_POINT: OneToOneLink<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      ApiProxyEndPointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link documentations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DOCUMENTATIONS: Link<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      DocumentationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      ApiResources<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ApiResources<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fkProxyendpointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FK_PROXYENDPOINT_ID: fieldBuilder.buildEdmTypeField(
          'FK_PROXYENDPOINT_ID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link canShowDelete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_DELETE: fieldBuilder.buildEdmTypeField(
          'canShowDelete',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowGet} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_GET: fieldBuilder.buildEdmTypeField(
          'canShowGet',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowHead} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_HEAD: fieldBuilder.buildEdmTypeField(
          'canShowHead',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowOption} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_OPTION: fieldBuilder.buildEdmTypeField(
          'canShowOption',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowPatch} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_PATCH: fieldBuilder.buildEdmTypeField(
          'canShowPatch',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowPost} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_POST: fieldBuilder.buildEdmTypeField(
          'canShowPost',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link canShowPut} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CAN_SHOW_PUT: fieldBuilder.buildEdmTypeField(
          'canShowPut',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
        /**
         * Static representation of the {@link isDeleteChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_DELETE_CHECKED: fieldBuilder.buildEdmTypeField(
          'isDeleteChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isGetChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_GET_CHECKED: fieldBuilder.buildEdmTypeField(
          'isGetChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isHeadChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_HEAD_CHECKED: fieldBuilder.buildEdmTypeField(
          'isHeadChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isOptionChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPTION_CHECKED: fieldBuilder.buildEdmTypeField(
          'isOptionChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isPatchChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PATCH_CHECKED: fieldBuilder.buildEdmTypeField(
          'isPatchChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isPostChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_POST_CHECKED: fieldBuilder.buildEdmTypeField(
          'isPostChecked',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link isPutChecked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_PUT_CHECKED: fieldBuilder.buildEdmTypeField(
          'isPutChecked',
          'Edm.Boolean',
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
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link proxyEndPointName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROXY_END_POINT_NAME: fieldBuilder.buildEdmTypeField(
          'proxyEndPointName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link resourcePath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_PATH: fieldBuilder.buildEdmTypeField(
          'resource_path',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ApiResources)
      };
    }

    return this._schema;
  }
}
