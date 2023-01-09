# Deploy Kyma components for API Federation

1. Ensure you have completed the [Kyma deployment prerequisites](../03-APIMonetizationStripe/03-01-Deploy-kyma-components.md#prepare-the-kyma-deployment-prerequisites) from the API Monetization with Stripe use case scope.
2. Checkout the **api-federation** branch of the sap-samples [GitHub repository](https://github.com/SAP-samples/btp-create-api-integrations/tree/api-federation).
3. Open the Helm chart values.yaml file in the **chart** directory and update the <your_docker_account> placeholder with your Docker Hub username.
4. Ensure you're logged in to Docker Hub by running the docker login command in your terminal.
5. Execute the npm command build-deploy:kyma with the following parameters

    ```$ npm run build-deploy:kyma --image_name=<your_docker_account>/api-federation-cap --namespace=<namespace>```

     * image_name - Name of the image, including your docker account like **\<your_docker_account\>/api-federation-cap**
     * namespace - Name of the Kyma namespace like **trial** or **default** (Kyma namespace needs to be created before deployment)