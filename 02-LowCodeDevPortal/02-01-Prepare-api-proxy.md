# Prepare SAP API Management for service account access
1. Import the [API Proxy](https://github.com/SAP-samples/btp-create-api-integrations/raw/low-code-dev-portal/DevPortal_Anonymous.zip) into your instance of SAP API Management via the **Develop** menu > **Import API**.
2. Update the Target EndPoint to reflect your environment. The host name depends on which region you are subscribed in and can be retrieved from the service keys created in the previous section.
    ![image](https://user-images.githubusercontent.com/6976027/193166133-4427b8ab-637e-469c-8433-ae785b4f8c3c.png). 


3. [Implement the SAP Cloud Foundry services policy](https://api.sap.com/policytemplate/SAPCloudFoundryXSUAAJWTToken) from the **Policies** menu, which is already included as part of the proxy file above.
  * Update **ProxyEndpoint > PreFlow > getcredential > sapapim.clientid and sapapim.clientsecret values** using the credentials for the Developer portal service instance created in the previous section.

  * Update **ProxyEndpoint > PreFlow getoauthtoken > HTTPTargetConnection > URL** to the tokenUrl property of the service key.
  * Update **Scripts > setTarget.js > targetHost** to the url property of the service key (e.g. https://eu10devportal.cfapps.eu10.hana.ondemand.com or https://us20devportal.cfapps.us20.hana.ondemand.com)
  * Click Update, Save, and Redeploy the modified proxy.
4. Create an API Product from the **Develop > Products > Create** menu and add the newly created DevPortal_Anonymous API to it (all methods).
5. Publish the API Product.
6. Register an application and generate an API Key for the service account.
  * Access the Business Hub Enterprise via the URL you saved in the previous step, or by selecting the subscription link from the SAP Integration Suite launchpad.
  * Select **My Workspace > Applications > Create**.
  * Provide an application name, check **Create this application on behalf of someone else** and select the SYSTEM USER you registered previously, and add the API Product you created in the prior step. Save the Application.

    <br><br>[<img src="./img/CreateApplication.png" width="50%">](./img/CreateApplication.png)

  * Copy the Application Key and Secret and navigate to the Test Console
  * Select the Guest Access product you created in the previous step and the **APIMgmt.APIProducts** resource
  * Remove **APIMgmt.** from the resource field
  * Enable Basic Authentication and enter the API Key and Secret in the user and password fields, respectively. The URL rewrite is needed to handle the [entity container](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/entity-container) that the platform API are inside of. The EntityContainer.EntitySet syntax is not widely used in SAP applications. Without the rewrite, the URL is created with only the EntitySet being added, resulting in a 404 error.
  * Test the request and confirm you can see the API Products in your API management instance.

    <br><br>[<img src="./img/TestConsole.png" width="50%">](./img/TestConsole.png)

# Create a Destination to Use in Your Low Code App
1. Access your subaccount in the SAP BTP cockpit. 
2. Select Connectivity > Destinations.
3. Select **Import Destination** and provide the [destination template](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/LCDevPortal.destination.txt).
4. Customize the URL to reflect the service path from your API proxy.
5. Update the user name and password fields with the API Key and Secret from the previous step.
6. Save the destination.
