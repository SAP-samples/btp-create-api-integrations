"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Bills_1 = require("./Bills");
/**
 * Request builder class for operations supported on the {@link Bills} entity.
 */
class BillsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Bills` entity based on its keys.
     * @param entityId Key property. See {@link Bills.entityId}.
     * @param entityType Key property. See {@link Bills.entityType}.
     * @param fromDate Key property. See {@link Bills.fromDate}.
     * @param toDate Key property. See {@link Bills.toDate}.
     * @returns A request builder for creating requests to retrieve one `Bills` entity based on its keys.
     */
    getByKey(entityId, entityType, fromDate, toDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            entityId: entityId,
            entityType: entityType,
            fromDate: fromDate,
            toDate: toDate
        });
    }
    /**
     * Returns a request builder for querying all `Bills` entities.
     * @returns A request builder for creating requests to retrieve all `Bills` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Bills` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Bills`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Bills`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Bills`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(entityIdOrEntity, entityType, fromDate, toDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, entityIdOrEntity instanceof Bills_1.Bills
            ? entityIdOrEntity
            : {
                entityId: entityIdOrEntity,
                entityType: entityType,
                fromDate: fromDate,
                toDate: toDate
            });
    }
}
exports.BillsRequestBuilder = BillsRequestBuilder;
//# sourceMappingURL=BillsRequestBuilder.js.map