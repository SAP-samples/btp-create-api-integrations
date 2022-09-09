# Test the invoicing flow end-to-end
As a final step in this mission scope, you will test the invoicing flow end-to-end, by manually triggering the respective endpoint of your invoicing service. In a regular scenario, this endpoint is called every second day of the month by the Kyma Cron job which deployed. 
  * Create a container in your target namespace (e.g. trial) based on the latest **curl** image:
    
      ```bash
      $ kubectl --namespace=<<namespace>> run curl --image=curlimages/curl -i --tty -- sh
      ```
  * Call the invoicing endpoint of the service instance running in your target namespace with a particular month and year:
    > **Note**
    > The CronJob sends an empty body which results in the last month being used as default
      ```bash
      $ curl -X POST 'btp-invoicing-srv.<<namespace>>:8080/invoicing/createStripeInvoices' \
      --header 'Content-Type: application/json' \
      --data-raw '{
          "month": "07",
          "year": "2022"
      }'
      ```
    
  * This should trigger the invoice creation on the Stripe side
  * Check in your Stripe account if the respective invoices have been created

Congratulations on completing the API Monetization with Stripe mission scope!
