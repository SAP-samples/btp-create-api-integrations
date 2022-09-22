# Prepare SAP API Management for service account access
* Import [API Proxy](https://github.com/SAP-samples/btp-create-api-integrations/raw/low-code-dev-portal/DevPortal_Anonymous.zip) into your instance of SAP API Management via the **Develop** menu > **Import API**
* Update the Target EndPoint to reflect your environment. The host name depends on which region you are subscribed in and can be retrieved from the service keys created in the previous section.
* [Implement SAP Cloud Foundry services policy](https://api.sap.com/policytemplate/SAPCloudFoundryXSUAAJWTToken) from the **Policies** menu, which is already included as part of the proxy file above.
  * Update **TargetEndpoint > PreFlow > getcredential > sapapim.clientid and sapapim.clientsecret values** (use the credentials for the Developer portal service instance created in the previous section)

  * Update **TargetEndpoint > PreFlow getoauthtoken > HTTPTargetConnection > URL** to the tokenUrl property of the service key
  * Update **Scripts > setTarget.js > targetHost** to the url property of the service key (e.g. https://eu10devportal.cfapps.eu10.hana.ondemand.com or https://us20devportal.cfapps.us20.hana.ondemand.com)
  * Click Update, Save, and Redeploy the modified proxy.
* Create an API Product and associate the DevPortal_Anonymous API with it
* Register an application and generate API Key for service account
  * Access the Business Hub Enterprise via the URL you saved in the previous step, or by selecting the subscription link from the Integration Suite launchpad
  * Click My Workspace > Applications > Create

    ![Create application details](./img/CreateApplication.png)

  * Copy the Application Key and navigate to the Test Console
  * Select the Guest Access product you created in the previous step
  * Remove **APIMgmt.** from the resource field
  * Enable Basic Authentication and enter the API Key and Secret in the user and password fields, respectively

    ![Test API](./img/TestConsole.png)

    Note: The URL rewrite is needed to handle the [entity container](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/entity-container) that the platform API are inside of. The EntityContainer.EntitySet syntax is not widely used in SAP applications and is not currently understood by SAP low code tools or SAP Cloud Application Programming (CAP). The result is only the EntitySet being added to the URL, resulting in a 404 error


# Create a destination to use in your low code app
* Access your subaccount in the BTP cockpit and select Connectivity > Destinations
* Select **Import Destination** and provide the [destination template](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/LCDevPortal.destination.txt)
* Customize the URL to reflect the service path from your API proxy
* Update the user name and password fields with the API Key and Secret from the previous step
* Save the destination
