## Create a process to onboard and provision new developers with access
Now that the portal is functional, we can provide an onboarding experience for users who browse the API catalog and want to gain access. With SAP Process Automation, we'll receive an inbound API request from the low-code portal, and initiate an approval request for a portal administrator. Once access is granted, the developer will automatically be registered with the Business Hub Enterprise and assigned roles. It can be further extended to provision an application and API Key if desired. 

1. Access the Application Development by selecting SAP Process Automation from your SAP BTP cockpit under **Instances and Subscriptions**.
2. Create a process and configure API trigger:
    * Import the process from the [provided mtar](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/Developer_Onboarding.mtar).
    * Open the process and ensure that there are no errors or warnings in the designer.
    * Update the **Recipients** property by typing your account email address into the Users field. Delete the **btp-admin** entry which is provided as part of a sample integration with SAP Cloud Identity Authentication Service for a future mission scope.
      ![Update recipients](./img/recipientGroups.png)
    
2. Implement the actions project and destination for outbound API calls:
    * Create an SAP BTP destination from the [provided template](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/LCDevPortal_Reg.destination.txt) and ensure the correct properties are set. See: [Manage Destinations](https://help.sap.com/docs/PROCESS_AUTOMATION/a331c4ef0a9d48a89c779fd449c022e7/0fb074dff1644f2abb047175a9dfd0c1.html?q=destination&locale=en-US).
    * Add the destination in the **Settings** section of the SAP Process Automation lobby. See: [Configure BTP Destinations in SAP Process Automation
](https://developers.sap.com/tutorials/spa-create-destination.html).
    * Download and import the [provided API Proxy](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/DevPortal_RegisteringUsers_CF.zip) and configure the Target EndPoint and Cloud Foundry policy to use the client credentials of your [Developer Portal admin instance](https://github.com/SAP-samples/btp-create-api-integrations/blob/main/01-GettingStartedGuide/01-05-Create-service-instances.md#create-a-service-instance-for-developer-portal-api-access). Client credentials are maintained in the config.js script. This is a simplified version of the [API Business Hub Enterprise - Registering Users](https://api.sap.com/api/DevPortal_RegisteringUsers_CF/overview) scoped for the POST operation.
    * You should secure this proxy and destination with similar BasicAuth and Verify API Key policies as in the previous example. They are omitted here for convenience.
3. Configure API proxies for action handling:
    * Import the provided [API proxy](https://github.com/SAP-samples/btp-create-api-integrations/blob/low-code-dev-portal/Workflow_Instance_API.zip) to your instance of SAP API Management.
    * Update the Target EndPoint URL to match your environment.
    * You can apply similar Basic Authentication and/or API Key verification to protect the endpoint but the provided policy does not contain them.
    * Configure the Client ID, Client Secret (maintained in config.js like the previous step), and Token endpoint properties in the policy from the values in the SAP Process Automation service key you saved previously.
    * If you added security to the Workflow Instance API, add the v1_workflow-instances method to the Guest Access API Product you created earlier. If you experience any problems, try [recreating the system application](https://github.com/SAP-samples/btp-create-api-integrations/blob/main/02-LowCodeDevPortal/02-01-Prepare-api-proxy.md#prepare-sap-api-management-for-service-account-access) from the previous step.
        ![Add APIs](https://user-images.githubusercontent.com/6976027/193324224-4cc82519-f7c6-4952-a733-a06eab44d4b7.png)
 
4. Release process and retrieve definition id
    * Release and deploy the process, selecting the newly configured destination at deploy time.
    * Retrieve the definition id of the newly released process for use in the developer portal. This can be done either through the SAP Process Automation lobby under **Monitor > Manage > Processes and Workflows** or through the [Workflow definitions](https://api.sap.com/api/SAP_CP_Workflow_CF/resource) API.
