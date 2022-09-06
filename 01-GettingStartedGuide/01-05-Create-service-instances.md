# Enable access to Integration Suite platform API
The following steps allow you to create a service account for unregistered users to browse your API catalog

## Create a service account for Business Hub Enterprise guest access

  1. Access the Business Hub Enterprise URL and select **Manage**
  2. Select **Manage Users** > **Registered Users** and click the plus sign to add a new user
  3. Enter details for a generic user account and assign it the **Developer** role
     ![System user details](img/SystemAccount.png)

## Create a service instance for API access
A service instance lets us build a UI that retrieves data from Business Hub Enterprise as the service account. The details are located in the [SAP API Management help](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/dabee6e347f645a6805ec5b29f5d578c.html?locale=en-US)

  1. Navigate to the subaccount in the BTP cockpit
  2. Click **Instances and Subscriptions** and select **Create**
  3. Select **API Management, developer portal** from the Service list and fill out the remaining fields as below
     ![Service instance details](img/BHE_ServiceInstance.png)
  4. On the next tab, add the JSON parameters to provide access as the system user, providing the user id from the previous step
      ```
      {
      "role": "AuthGroup.API.ApplicationDeveloper",
      "developerId": "SYSTEM"
      }
      ```
  5. Complete the process and confirm the successful creation of the service instance
  6. Locate the service instance and create a service key. Make note of the JSON values which will look something like this
      ```
      {
      "url": "https://devportal.cfapps.hana.ondemand.com",
      "tokenUrl": "https://tenant.authentication.hana.ondemand.com/oauth/token",
      "developerId": "SYSTEM",
      "clientId": "sb-devportal-apiaccess|dev-portal-xsuaa",
      "clientSecret": "secret"
      }
      ```
  7. Create a service instance of SAP Process Automation along with a service key. Note the URL and credentials.