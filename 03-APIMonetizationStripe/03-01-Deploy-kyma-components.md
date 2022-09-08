# Prepare the Kyma deployment prerequisites
* Create yourself a **Docker Hub** (https://hub.docker.com/) account if not available yet
* Make sure that **docker**, **helm** and **kubectl** are installed on your local device and that you can use them from your command line
* Install the **pack** tool (https://buildpacks.io/docs/tools/pack/) to your local device and make sure you can use it from your command line<br>
  Note: **pack** allows you to simplify the process of creating Docker images without the need of creating a Dockerfile yourself
* Checkout the **stripe** branch of the sap-samples GitHub repository https://github.com/SAP-samples/btp-create-api-integrations/tree/stripe 
* Download the **kubeconfig.yaml** file of your Kyma cluster and make sure the KUBECONFIG environment variable is set correctly as described in the [Kubernetes documentation](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/#set-the-kubeconfig-environment-variable)
* In Windows PowerShell the command to set the environment variable looks like e.g. `$ENV:KUBECONFIG="C:\path\to\kubeconfig.yaml"`

# Deploy the invoicing components to Kyma
* Checkout the stripe branch of the sap-samples GitHub repository
* Change to the **btp-invoicing** directory and install the npm dependencies
* Go to **btp-invoicing/chart/values.yaml** and update **<<your_docker_account>>** with your Docker Hub username
* If your target Kyma namespace is not named **trial** go to **btp-invoicing/chart/charts/web-application/templates/network-policy.yaml** and update the **kubernetes.io/metadata.name** property
* Do a **docker login** to login to Docker Hub from your command line
* Execute the npm command **build-deploy:kyma** with the following parameters
  - image_name - Name of your image like **btp-invoicing**
  - namespace - Name of your Kyma namespace like **trial** or **default**
* A sample call looks like - `npm run build-deploy:kyma --image_name=btp_invoicing --namespace=trial`
* Change to the **cron-job** directory
* If your target Kyma namespace is not named **trial** go to **cron-job/chart/templates/deployment.yaml** and update the **INVOICING_SERVICE_NAMESPACE** environment variable value
* Execute the npm command **deploy:kyma** with the following parameters
  - namespace - Name of your Kyma namespace like **trial** or **default**
* A sample call looks like - `npm run deploy:kyma --namespace=trial`
* 