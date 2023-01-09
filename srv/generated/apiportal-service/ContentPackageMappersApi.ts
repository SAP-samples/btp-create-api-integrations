/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContentPackageMappers } from './ContentPackageMappers';
import { ContentPackageMappersRequestBuilder } from './ContentPackageMappersRequestBuilder';
import { ApiProxiesApi } from './ApiProxiesApi';
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
export class ContentPackageMappersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContentPackageMappers<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT = defaultDeSerializers as any) {
    this.deSerializers = deSerializers;
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ContentPackageMappers<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [ApiProxiesApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      API_PROXY: new OneToOneLink('apiProxy', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ContentPackageMappers;

  requestBuilder(): ContentPackageMappersRequestBuilder<DeSerializersT> {
    return new ContentPackageMappersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContentPackageMappers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContentPackageMappers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ContentPackageMappers<DeSerializersT>,
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
    typeof ContentPackageMappers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ContentPackageMappers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CONTENT: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFE_CYCLE: HistoryField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      true,
      true
    >;
    SRC_ARTIFACT_NAME: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRC_ARTIFACT_TYPE: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRC_PACKAGE_ID: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SRC_REPO: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_ID: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TARGET_TYPE: OrderableEdmTypeField<
      ContentPackageMappers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link apiProxy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    API_PROXY: OneToOneLink<
      ContentPackageMappers<DeSerializersT>,
      DeSerializersT,
      ApiProxiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContentPackageMappers<DeSerializers>>;
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
         * Static representation of the {@link lifeCycle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFE_CYCLE: fieldBuilder.buildComplexTypeField(
          'life_cycle',
          HistoryField,
          true
        ),
        /**
         * Static representation of the {@link srcArtifactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_ARTIFACT_NAME: fieldBuilder.buildEdmTypeField(
          'srcArtifactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link srcArtifactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_ARTIFACT_TYPE: fieldBuilder.buildEdmTypeField(
          'srcArtifactType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link srcPackageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'srcPackageID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link srcRepo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SRC_REPO: fieldBuilder.buildEdmTypeField('srcRepo', 'Edm.String', true),
        /**
         * Static representation of the {@link targetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_ID: fieldBuilder.buildEdmTypeField(
          'targetId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link targetType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_TYPE: fieldBuilder.buildEdmTypeField(
          'targetType',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContentPackageMappers)
      };
    }

    return this._schema;
  }
}
