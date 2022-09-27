As a final step in this mission scope, browse the developer portal as a guest, identify an interesting API Product, and submit an access request. As an administrator, approve that request and have the new developer automatically onboarded to the full SAP API Management, Business Hub Enterprise experience. This section tests all of the integration points between SAP BTP services.
  1. Run your developer portal in Preview mode, or See: [Build and Deploy it to SAP BTP](https://github.com/SAP-samples/btp-s4hana-nocode-extension/blob/main/create-application/deploy/README.md).
  2. Navigate from API Product to API Product Details by selecting the **API Business Hub Enterprise - Guest Access** product, or any other one in your environment. If you've already run [Get Started with Integration Suite - API Management](https://discovery-center.cloud.sap/missiondetail/3062/3072/) you should have several more API Products.
  3. Check out the Swagger documentation for the **Guest Access for Developer Portal** proxy by selecting it from the card list if you completed the optional scope item.
  4. Click the **Request Access to this API** button.
  5. Complete the form with some relevant values and click submit.
    ![Filled out form](img/FilledForm.png)

  6. If any of the requests fail to complete, check the network tab of your Chrome Developer tools for details on the failing request.
  7. Access the **Application Development Lobby** and select the inbox icon.
    ![Application development lobby inbox](./img/inbox.png)

  8. Fill out the form and approve the request
    ![Approve request](./img/TestInboxApproval.png)

  9. If everything works, the new user will now be registered in the Business Hub Enterprise under **Manage**.
    ![Registered Users](./img/RegisteredUsers.png)

  10. If any of the process steps failed, you can find the details under the **Monitor** > **Process and Workflow Instances** section of the Application Development UI.
    ![Monitor workflow instance](./img/MonitorError.png)

Congratulations on completing the Low Code Developer Portal mission scope!
