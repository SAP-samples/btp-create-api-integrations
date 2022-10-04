import BillService from "./bill-service";
import BillServiceUnofficial from "./bill-unofficial-service";
import StripeService from "./stripe-service";
import StripeServiceUnofficial from "./stripe-unofficial-service";

const billService = new BillService();
const billServiceUnofficial = new BillServiceUnofficial();
const stripeService = new StripeService(process.env.STRIPE_API_KEY as string);
const stripeServiceUnofficial = new StripeServiceUnofficial(process.env.STRIPE_API_KEY as string);

export {
    billService,
    billServiceUnofficial,
    stripeService,
    stripeServiceUnofficial
}