# Enable access to Platform API
Create a service account for unregistered users to browse your API catalog. Please make sure the Cloud Foundry environment is enabled in your subaccount to create the service instances. Also ensure you have added the necessary entitlements as indicated in the [prerequisites](https://github.com/SAP-samples/btp-create-api-integrations/blob/main/01-GettingStartedGuide/README.md). 

## Create a service account for Business Hub Enterprise guest access

  1. Assign yourself the **AuthGroup.SelfService.Admin** role.
  2. Access the Business Hub Enterprise URL and select **Manage**.
  3. Select **Manage Users** > **Registered Users** and click the plus sign to add a new user.
  4. Enter details for a generic user account and assign it the **Developer** role. This could be a service account defined in your company domain or a personal email address.
     <br><br>[<img src="./img/SystemAccount.png" width="50%">](./img/SystemAccount.png)

## Create a service instance for Developer Portal API access
A service instance lets you build a UI that retrieves data from Business Hub Enterprise as the service account. See: [API Access Plan for API Business Hub Enterprise](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/dabee6e347f645a6805ec5b29f5d578c.html?locale=en-US) for more details. You must also create an XSUAA instance and destination as described in the prerequisites section of the same document for administrative token exchange. This allows you to implement the developer onboarding process later in the mission.

  1. Navigate to your subaccount in the BTP cockpit.
  2. Select **Instances and Subscriptions**.
  3. Select **Create**.
  4. Select **API Management, developer portal** from the Service list and fill out the remaining fields.
          <br><br>[<img src="./img/BHE_ServiceInstance.png" width="50%">](./img/BHE_ServiceInstance.png)
  5. On the next tab, add the JSON parameters to provide access as the system user, providing the user id from the previous step.
      ```
      {
      "role": "AuthGroup.API.ApplicationDeveloper",
      "developerId": "SYSTEM"
      }
      ```
  6. Complete the process and confirm the successful creation of the service instance.
  7. Locate the service instance and create a service key. Save the JSON values, which will look something like this:
      ```
      {
      "url": "https://devportal.cfapps.hana.ondemand.com",
      "tokenUrl": "https://tenant.authentication.hana.ondemand.com/oauth/token",
      "developerId": "SYSTEM",
      "clientId": "sb-devportal-apiaccess|dev-portal-xsuaa",
      "clientSecret": "secret"
      }
      ```
  8. Repeat the process and create an instance for admin access using the following JSON. Save the service key credentials for later use.
     ```
     {
     "role": "AuthGroup.API.Admin"
     }
     ```

## Create a Service Instance for API Portal API Access

A service instance lets you interact with the API Management, API portal service to retrieve bills for the invoicing scope of the mission. See: [SAP API Management, API portal as a Service](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/e0646630540d440aa1177b389f512afa.html?locale=en-US)

  1. Navigate to the subaccount in SAP BTP cockpit.
  2. Click **Instances and Subscriptions** and select **Create**.
  3. Select **API Management, API portal** from the Service list and fill out the remaining fields.
     <br><br>[<img src="./img/API_ServiceInstance.png" width="50%">](./img/API_ServiceInstance.png)
  4. If the service is not available in the Service list, please double check the assigned entitlements from your global account.
  5. On the next tab, add the JSON parameters to provide administrator access using this service instance.
      ```
      {
          "role": "APIPortal.Administrator"
      }
      ```
  6. Complete the process and confirm the successful creation of the service instance.
  7. Locate the service instance and create a service key. Save the JSON values for later which will look something like this:
      ```
      {
      "url": "https://apiportal.cfapps.hana.ondemand.com",
      "tokenUrl": "https://tenant.authentication.hana.ondemand.com/oauth/token",
      "clientId": "sb-apiaccess|api-portal-xsuaa",
      "clientSecret": "secret"
      }
      ```
## Create a Service Instance for SAP Build Process Automation
  1. Create a service instance of SAP Build Process Automation along with a service key. Follow the same steps as above, but select **SAP Build Process Automation** as the service. Save the endpoints.api value and uaa credentials for later.

## Create a Destination for API Portal API access

A new destination using the **API Portal API access** service key details can be used by Kyma to retrieve billing information from API Portal for the invoicing scope of the mission.

  1. Navigate to the subaccount in SAP BTP cockpit.
  2. Select **Destinations**.
  3. Create a new destination called **api-portal**.
  4. Provide the details of your API Portal API access service key, which will look something like this:
  * Description=Destination for APIM platform API
  * Type=HTTP
  * name=api-portal
  * clientId=sb-apiaccess|api-portal-xsuaa
  * clientSecret=secret
  * Authentication=OAuth2ClientCredentials
  * tokenServiceURL=https://tenant.authentication.hana.ondemand.com/oauth/token
  * ProxyType=Internet
  * URL=https://apiportal.cfapps.hana.ondemand.com
  * tokenServiceURLType=Dedicated
      <br><br>[<img src="./img/API_Destination.png" width="50%">](./img/API_Destination.png)
  5. You may receive a 401 error when testing the destination due to accessing the server root. This is ok and you can proceed with the next steps.
    
