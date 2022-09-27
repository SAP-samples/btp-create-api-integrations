# Activate SAP Integration Suite, API Management capability

* Access the SAP Integration Suite link from your BTP subaccount under Instances and Subscriptions
* Select **Add Capabilities**
* Check the **Design, Develop and Manage APIs** option and click Next.
* Check the **Enable API Business Hub Enterprise** option and click Next.
* Click **Activate** to initiate the process.

The activation can take a few minutes, so wait until the status has changed to **Active** before proceeding. Note down the URL of the API Portal and Business Hub Enterprise.
<br><img src="img/IS_APIActivation.png" width="70%">

See: [Setting Up API Management API Portal from Integration Suite](https://help.sap.com/docs/SAP_CLOUD_PLATFORM_API_MANAGEMENT/66d066d903c2473f81ec33acfe2ccdb4/f6eb4332cd5144ef91f4a84cc614ba1c.html?locale=en*US) for the complete process.

Once the activation is complete, return to the SAP BTP cockpit and assign the **APIManagement.SelfService.Administrator** role collection to your user account. This allows us to access the newly provisioned API Portal with full control.

# Configure the API Management Service

Now, you can select the API Management capability from the SAP Integration Suite home page. 

1. Specify Non Production under the account field.
2. Enter a virtual host name and notification contact. 
3. Leave the default checkbox to make yourself the API Portal administrator. 
4. Confirm the settings.
