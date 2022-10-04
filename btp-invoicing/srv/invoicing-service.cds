using {apiportal as apiportalService} from './external/APIPortal_Developer_CF';

@cds.persistence.skip
@path : 'invoicing'
service InvoicingService {

    action createStripeInvoices(month: String, year: String) returns String;
}
