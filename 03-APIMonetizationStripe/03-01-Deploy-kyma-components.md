# Prepare the Kyma deployment prerequisites
* Create yourself a **Docker Hub** (https://hub.docker.com/) account if not available yet
* Make sure that the latest versions of **docker**, **helm** and **kubectl** are installed on your local device and that you can use them from your command line
* Install the **pack** tool (https://buildpacks.io/docs/tools/pack/) to your local device and make sure you can use it from your command line<br>
  Note: **pack** allows you to simplify the process of creating Docker images without the need of creating a Dockerfile yourself
* Checkout the **stripe** branch of the sap-samples GitHub repository https://github.com/SAP-samples/btp-create-api-integrations/tree/stripe 
* Download the **kubeconfig.yaml** file of your Kyma cluster and make sure the KUBECONFIG environment variable is set correctly as described in the [Kubernetes documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/#set-the-kubeconfig-environment-variable)
* In Windows PowerShell the command to set the environment variable looks like e.g. `$ENV:KUBECONFIG="C:\path\to\kubeconfig.yaml"`

>**Important** - Please keep in mind, that in a Trial environment, your Kyma instance will expire after 14 days. To test the solution after 14 days, please delete your Kyma instance, setup a new one and redeploy the solution.

# Add the Stripe API Key as a secret to your Kyma environment
### Option 1: Using _kubectl_
Run the following command in your terminal:

```$ kubectl create secret generic stripe-key --from-literal=STRIPE_API_KEY=<stripe-secrect-key> --namespace <namespace>```

We expect the response _secret/stripe-secret created_ but to make sure it's avaialble on the namespace, execute:

```$ kubectl get secrets --namespace <namespace>```

The last entry should be the secret we just created.
```bash
NAME                                           TYPE                                  DATA   AGE
...                                            ...                                   ...    ...
stripe-key                                     Opaque                                1      11s
```

### Option 2: Via Kyma Dashboard
* Go to your Kyma target namespace (e.g. trial or default) and add a new secret in the **Configuration** section
* Name your secret **stripe-key** and add the **Secret Key** of your Stripe Developer portal as a new **Data** value named **STRIPE_API_KEY** 

  ![Stripe Key](./img/KYMA_StripeKey.png)


# Deploy the invoicing components to Kyma
* Checkout the stripe branch of the sap-samples GitHub repository
* Change to the **btp-invoicing** directory and install the npm dependencies doing an **npm install**
* Go to **btp-invoicing/chart/values.yaml** and update **<your_docker_account>** with your Docker Hub username
* If your target Kyma namespace is not named **trial** go to **btp-invoicing/chart/charts/web-application/templates/network-policy.yaml** and update the **kubernetes.io/metadata.name** property
* Do a **docker login** to login to Docker Hub from your command line
* Execute the npm command **build-deploy:kyma** with the following parameters

  ```$ npm run build-deploy:kyma --image_name=<your_docker_account>/btp-invoicing --namespace=<namespace>```
  - image_name - Name of the image incl. your docker account like **<your_docker_account>/btp-invoicing**
  - namespace - Name of the Kyma namespace like **trial** or **default** (Kyma namespace needs to be created before deployment)

* Change to the **cron-job** directory
* If your target Kyma namespace is not named **trial** go to **cron-job/chart/templates/deployment.yaml** and update the **INVOICING_SERVICE_NAMESPACE** environment variable value
* Execute the npm command **deploy:kyma** with the following parameters

  ```$ npm run deploy:kyma --namespace=<namespace>```
  - namespace - Name of your Kyma namespace like **trial** or **default**
