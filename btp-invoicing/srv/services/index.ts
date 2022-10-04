import BillService from "./bill-service";
import StripeService from "./stripe-service";

const billService = new BillService();
const stripeService = new StripeService(process.env.STRIPE_API_KEY as string);

export {
    billService,
    stripeService
}