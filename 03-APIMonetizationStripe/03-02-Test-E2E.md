# Test the invoicing flow end-to-end
As a final step in this mission scope, you will test the invoicing flow end-to-end, by manually triggering the respective endpoint of your invoicing service. In a regular scenario, this endpoint is called every second day of the month by the Kyma Cron job which deployed. 
  * Create a container in your target namespace (change command if not **trial**) based on the latest **curl** image
    * A sample command looks like - `kubectl --namespace=trial run curl --image=curlimages/curl -i --tty -- sh`
  * Call the invoicing endpoint of the service instance running in your target namespace (change command if not **trial**)
    * A sample command looks like - `curl btp-invoicing-srv.trial:8080/invoicing/createStripeInvoices`
  * This should trigger the invoice creation on the Stripe side
  * Check in your Stripe account if the respective invoices have been created

Congratulations on completing the API Monetization with Stripe mission scope!
