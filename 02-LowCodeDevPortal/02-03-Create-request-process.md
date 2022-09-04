## Create a process to onboard and provision new developers with access
Now that the portal is functional, we can provide an onboarding experience for users who browse the API catalog and want to gain access. With SAP Process Automation, we'll receive an inbound API request from the low-code portal, and initiate an approval request for a portal administrator. Once access is granted, the developer will automatically be registered with the Business Hub Enterprise, assigned roles, and provisioned with an application and API Key. 

* Create process and configure API trigger
* Implement actions projects for outbound API calls
* Configure API proxies for action handling
* Release process and retrieve definition id