import moment from 'moment';
import Stripe from 'stripe';

import { BillResponse } from '../external/Billing_APIs_CF';

const currencyMapping: Map<string, string> = new Map<string, string>([
    ["euro", "eur"]
]);

export default class StripeService {

    private stripe: Stripe;

    constructor(apiKey: string) {
        this.stripe = new Stripe(apiKey, {
            apiVersion: '2023-08-16',
        });
    }

    /**
     * Performs a lookup whether the customer exists on Stripe or not and returns it if existing. 
     * If the customer doesn't exist, a new customer will be created and finally returned.
     * 
     * @param bill The bill object which includes the required information to get the customer
     * @returns The existing or created customer object
     */
    public getOrCreateCustomer = async (bill: BillResponse) => {
        /*
            Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
            conditions, data is searchable in less than a minute.
        */
        const email = bill.developerId;
        const potentialCustomers: Stripe.ApiSearchResult<Stripe.Customer> = await this.stripe.customers.search({ query: `email: "${email}"` })
        let customer: Stripe.Customer;

        if (potentialCustomers.data.length > 0) {
            customer = potentialCustomers.data[0]
        }
        else {
            const name: string = bill.developerName;
            const developerId: string = bill.developerId;
            // TODO: Country is not available in the bills but in the developers entity
            const customerPayload: Stripe.CustomerCreateParams = this.createCustomerPayload(email, name, developerId)
            customer = await this.createCustomer(customerPayload)
        }
        return customer
    }

    /**
     * Creates the invoice out of all positions within the bill details if it's not existing and sends it to the customer
     * 
     * @param bill The bill object for which an invoice needs to be created
     * @param customer The customer object to whom the created invoice needs to be linked
     * @returns true if invoice was sent, false if not
     */
    public createAndSendInvoice = async (bill: BillResponse, customer: Stripe.Customer): Promise<boolean> => {
        if (!await this.invoiceExists(bill)) {
            // Create the Invoice
            const invoice = await this.stripe.invoices.create({
                customer: customer.id,
                collection_method: "send_invoice",
                days_until_due: 30,
                description: bill.billId,
                metadata: {
                    billId: bill.billId
                }
            });
            // Create all invoice items/positions from the bill
            for await (const position of bill.apps) {
                const appName: string = position.appName;
                const productName: string = position.ratePlanSubscribed[0][0].productName;
                const ratePlanName: string = position.ratePlanSubscribed[0][0].productName;
                const calls: number = position.ratePlanSubscribed[0][0].calls;
                const start: number = moment(bill.startDate, "YYYY/MM/DDTHH:mm:SS").valueOf() / 1000;
                const end: number = moment(bill.endDate, "YYYY/MM/DDTHH:mm:SS").valueOf() / 1000
                await this.stripe.invoiceItems.create({
                    customer: customer.id,
                    invoice: invoice.id,
                    amount: position.bill.value * 100, //amount needs to be passed in 'cents'
                    currency: currencyMapping.get(position.bill.currency.toLowerCase()),
                    period: {
                        start: start,
                        end: end
                    },
                    metadata: {
                        appName: appName,
                        productName: productName,
                        ratePlanName: ratePlanName,
                        calls: calls
                    },
                    description: `Base price for ${productName} product in ${appName} application with ${calls} API calls`
                });
            }

            // Send the Invoice
            await this.stripe.invoices.sendInvoice(invoice.id);
            return true
        }
        return false;
    }

    /**
     * Searches for an invoice with the bill id set as metadata
     * 
     * @param bill The bill object for which an invoice lookup will be done
     * @returns true if an invoice with the bill id exists, else false
     */
    private invoiceExists = async (bill: BillResponse): Promise<boolean> => {
        const potentialInvoice: Stripe.ApiSearchResult<Stripe.Invoice> = await this.stripe.invoices.search({ query: `metadata["billId"]: "${bill.billId}"` })
        return potentialInvoice.data.length > 0
    }

    /**
     * Creates the payload to create a customer with the provided params
     * 
     * @param email email of the customer to be created
     * @param name name of the customer to be created
     * @param developerId developerId of the customer to be created
     * @param country country of the customer to be created
     * @returns Payload to create a customer
     */
    private createCustomerPayload = (email: string, name: string, developerId: string, country?: string): Stripe.CustomerCreateParams => {
        return {
            email: email,
            name: name,
            description: 'Customer for API consumption billing',
            metadata: {
                customer_type: 'API_ApplicationDeveloper',
                developerId: developerId,
                // TODO: Country is not available in the bills but in the developers entity
                //country: country
            }
        }
    }

    /**
     * Creates a customer on stripe based on the provided payload
     * 
     * @param params Payload to create the customer
     * @returns the created customer
     */
    private createCustomer = async (params: Stripe.CustomerCreateParams): Promise<Stripe.Customer> => {
        const customer: Stripe.Customer = await this.stripe.customers.create(params);
        return customer
    };

}
