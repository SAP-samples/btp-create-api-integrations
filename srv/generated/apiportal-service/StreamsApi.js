"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamsApi = void 0;
/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Streams_1 = require("./Streams");
const StreamsRequestBuilder_1 = require("./StreamsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class StreamsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Streams_1.Streams;
        this.deSerializers = deSerializers;
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            FLOW: new odata_v2_1.OneToOneLink('flow', this, linkedApis[0]),
            STEPS: new odata_v2_1.Link('steps', this, linkedApis[1])
        };
        return this;
    }
    requestBuilder() {
        return new StreamsRequestBuilder_1.StreamsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Streams_1.Streams, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fkFlowId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FK_FLOW_ID: fieldBuilder.buildEdmTypeField('FK_FLOW_ID', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.String', false),
                /**
                 * Static representation of the {@link isRequest} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_REQUEST: fieldBuilder.buildEdmTypeField('isRequest', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Streams_1.Streams)
            };
        }
        return this._schema;
    }
}
exports.StreamsApi = StreamsApi;
//# sourceMappingURL=StreamsApi.js.map