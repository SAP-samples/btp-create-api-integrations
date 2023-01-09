/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DestinationAndUrlMappings } from './DestinationAndUrlMappings';
import { DestinationAndUrlMappingsRequestBuilder } from './DestinationAndUrlMappingsRequestBuilder';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export declare class DestinationAndUrlMappingsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<DestinationAndUrlMappings<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  constructor(deSerializers?: DeSerializersT);
  private navigationPropertyFields;
  _addNavigationProperties(linkedApis: []): this;
  entityConstructor: typeof DestinationAndUrlMappings;
  requestBuilder(): DestinationAndUrlMappingsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    DestinationAndUrlMappings<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    DestinationAndUrlMappings<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof DestinationAndUrlMappings,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    DESTINATION: OrderableEdmTypeField<
      DestinationAndUrlMappings<
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
    ID: OrderableEdmTypeField<
      DestinationAndUrlMappings<
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
    URL: OrderableEdmTypeField<
      DestinationAndUrlMappings<
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
    ALL_FIELDS: AllFields<
      DestinationAndUrlMappings<
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
//# sourceMappingURL=DestinationAndUrlMappingsApi.d.ts.map
