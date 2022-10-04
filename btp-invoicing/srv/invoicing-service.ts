import { ApplicationService } from '@sap/cds';
import { Request } from "@sap/cds/apis/services";
import Stripe from 'stripe';

import { BillResponse } from './external/Billing_APIs_CF';
import { InvoicingServiceTypes } from "./models/entities";
import { IBill } from './models/bill';
import { billService, billServiceUnofficial, stripeService, stripeServiceUnofficial } from "./services";

class InvoicingService extends ApplicationService {

    async init() {
        this.on(InvoicingServiceTypes.ActionCreateStripeInvoices.name, this.createStripeInvoices)
    }

    private createStripeInvoices = async (req: Request) => {
        try {
            const params = req.data as InvoicingServiceTypes.IActionCreateStripeInvoicesParams;
            const currentDate = new Date();
            const month = params.month || String(currentDate.getMonth()).padStart(2, '0'); // e.g., "07"
            const year = params.year || String(currentDate.getFullYear()); // e.g., "2022"

            const bills: Array<BillResponse> = await billService.getBillableBills(month, year);
            let invoicesSent = 0
            for await (const bill of bills) {
                const customer: Stripe.Customer = await stripeService.getOrCreateCustomer(bill);
                const success: boolean = await stripeService.createAndSendInvoice(bill, customer);
                if (success) {
                    invoicesSent += 1;
                }
            }
            let message;
            if (invoicesSent > 0) {
                message = `${invoicesSent} ${invoicesSent == 1 ? "invoice has" : "invoices have"} been sent successfully to the ${invoicesSent == 1 ? "customer" : "customers"}`;
            }
            else {
                message = "There was no valid or open bill to send to a customer";
            }
            return req.reply({ success: true, message: message })
        } catch (error) {
            console.log(error)
        }
    };
}

module.exports = { InvoicingService }