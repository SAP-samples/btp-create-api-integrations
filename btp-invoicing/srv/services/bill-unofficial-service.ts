import cds from "@sap/cds";

import { apiportal } from "../models/entities";
import { IBill } from '../models/bill';

export default class BillServiceUnofficial {

    public getBillableBills = async (month: string, year: string): Promise<Array<IBill>> => {
        const apiportalService: any = await cds.connect.to('apiportal');
        const { Bills } = apiportalService.entities;
        const query = SELECT.from(Bills)
            .where({
                fromDate: this.createFromDate(month, year),
                toDate: this.createToDate(month, year),
                total: { '>': 0.0 },
                entityType: "DEVELOPER"
            });
        const bills: Array<apiportal.IBills> = await apiportalService.run(query)

        // parse billDetails of bills
        const billsWithDetails: Array<IBill> = bills.map((bill: apiportal.IBills) => {
            bill.billDetails = JSON.parse(bill.billDetails as string);
            return bill as unknown as IBill
        })
        return billsWithDetails;
    }

    private createFromDate = (month: string, year: string) => {
        return `${year}-${month}-01T00:00:00`
    }

    private createToDate = (month: string, year: string) => {
        return `${year}-${month}-31T23:59:59`
    }
}