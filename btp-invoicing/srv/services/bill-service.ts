import cds from "@sap/cds";

import { apiportal } from "../models/entities";
import { ViewBillApi, BillResponse } from '../external/Billing_APIs_CF';

const DESTINATION_NAME: string = "api-portal"

export default class MonetizeService {

    public getBillableBills = async (month: string, year: string): Promise<Array<BillResponse>> => {

        const apiportalService: any = await cds.connect.to('apiportal');
        const { Developers } = apiportalService.entities;
        const developers: Array<apiportal.IDevelopers> = await apiportalService.run(SELECT.from(Developers))
        const developerIds: Array<string> = developers.map((developer: apiportal.IDevelopers) => developer.emailId)
        
        const bills: Array<BillResponse> = (await Promise.all(developerIds.map(async (developerId: string) => {
            // getMonetizeBills returns actually an array of BillResponse instead of a BillResponse as documentated
            const billResponse: BillResponse = (await ViewBillApi.getMonetizeBills({ month: month, year: year, developer_id: developerId }).execute({ destinationName: DESTINATION_NAME }) as Array<BillResponse>)[0]
            return billResponse
        }))).filter((bill: BillResponse) => bill.bill.value > 0 && bill.apps)

        return bills;
    }
}