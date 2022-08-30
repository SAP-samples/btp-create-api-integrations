# Prepare SAP API Management for service account access

    1. Import [API Proxy](https://github.com/SAP-samples/btp-create-api-integrations/raw/low-code-dev-portal/DevPortal_Guest.zip) into your instance of SAP API Management via the **Develop** menu
    2. Update the Target EndPoint to reflect your environment. The host name depends on which region you are subscribed in and can be retrieved from the service key created in the previous section.
    3. [Implement SAP Cloud Foundry services policy](https://api.sap.com/policytemplate/SAPCloudFoundryXSUAAJWTToken)
      - TargetEndpoint > PreFlow > getcredential > client id and secret
      - TargetEndpoint > PreFlow getoauthtoken > HTTPTargetConnection > URL to token URL of XSUAA
      - Scripts > setTarget.js > set targetHost to base of your BHE endpoint (e.g. us20devportal)
    4. Create an API Product and associate the DevPortal_Guest API with it
    5. Register an application and generate API Key for service account
      - Access the Business Hub Enterprise via the URL you saved in the previous step, or by selecting the subscription link from the BTP cockpit
      - Click My Workspace > Applications > Create

       ![Create application details](./img/CreateApplication.png)

      - Copy the Application Key and navigate to the Test Console
      - Select the Guest Access product you created in the previous step
      - Remove **APIMgmt.** from the resource field
      - Add APIKey header, paste value from the previous step and execute the request

       ![Test API](./img/TestConsole.png)