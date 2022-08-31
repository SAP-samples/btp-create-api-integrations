# Build a low code Developer Portal
In this section, you will build a low code app in SAP AppGyver. Unlike previous walkthroughs such as the [Custom mobile HR app](https://github.com/SAP-samples/successfactors-extension-calculate-employee-seniority/tree/mission-sfsf-mobile-appgyver/04-CreateSAPAppGyverProject) and [Covid certificate checker](https://github.com/SAP-samples/cap-appgyver-covid-certcheck/tree/main/tutorials/4_AppGyverApp) we won't provide exhaustive steps for recreating this application. You can find all the key steps listed below, but in a leaner fashion.

## API Product Home
1. Access SAP AppGyver from the BTP cockpit and create a new application
2. Enable BTP authentication
3. Create a new integration and select the LCDevPortal destination from the previous step
4. Enable the Applications, APIProducts, and APIProxies entities and save (use the browse data feature to make sure everything is working)
5. Open the default empty page and rename it to **Home**. Create 2 more pages and name them **Applications Detail** and **API Product Detail**
6. On the **Home** page install and add a Basic card list component to the canvas
7. Edit the configuration and select the APIProducts data source. Set content, id, label, and title to the formulas below and save the component
   1. LOOKUP(source.record, "name")
   2. LOOKUP(source.record, "name")
   3. "Published on " + FORMAT_DATETIME_LOCAL(DATETIME(NUMBER(SUBSTRING(LOOKUP(source.record, "published_at"), 6, 19))), "MM-DD-YYYY")
   4. LOOKUP(source.record, "title")
  
  Previewing the home screen should show you the products available in your tenant
  ![Home screen preview](img/PreviewHomeScreen.png)

## API Product Detail
At the time of writing, OData associations and expands are not yet supported via destinations. Therefore, we will make some HTTP calls directly to the underlying API gateway using the same credentials.

1. Create an app variable called **selectedProduct** and set the value type to text
2. Open **API Product Detail** and add a page parameter called **APIProduct** with type text
3. Create a page variable called pv_APIProxies to store information about the proxies inside an API Product. Set it to be a list and the item type to be an object before adding the named properties.

  ![Page variable](img/PageVariable.png)

4. Return to the home screen and add a navigation to the component tap event of the basic list. Set the page parameter to a formula based on the component id, which we configured in the previous steps.

  ![Home navigation](img/HomeNav.png)

5. On **API Product Detail** page, customize the headers and add a centered text field. Set the value to the APIProduct page parameter.
6. Add a basic card and set Repeat with to be pv_APIProxies. Then, bind the title and content to the title and name fields of the current data item in repeat.

  ![Basic card](img/DetailCard.png)

7. Add logic to the Page mounted event to send an HTTP request. You may need to install this component from the flow function market.
8. Set the URL to a formula like this (updating the virtual-host and datacenter pieces to match your environment):

"https://virtual-host.prod.apimanagement.datacenter.hana.ondemand.com/sapapimanagementguest/odata/1.0/data.svc/APIProducts('"+params.APIProduct+"')?$format=json&$expand=ToAPIProxies,ToAPIResources,ToRatePlans"

9. Create a header under optional inputs to hold the basic authentication header. You can use a formula to encode the values at runtime:

  ![Basic Auth](img/basicauth.png)

  Note that the format is a Base64 encoding of  ```API Key:API Secret``` so if your API Key is ABC and the Secret is 123 you would Base64 encode ABC:123 which is QUJDOjEyMw==

  In this case, the formula would be ```"Basic " + ENCODE_BASE64("ABC:123")```

10. Add a set page variable node and connect the first output node from the HTTP request to it. Select pv_APIProxies and set the assigned value to the following formula, which will form an array out of the expanded ToAPIProxies response

  MAP(outputs["HTTP request"].resBodyParsed.d.ToAPIProxies.results, {name: item.name, title: item.title, "service_code": item.service_code})

  ![Assigned value of parameter](img/SetPageVar.png)

11. Previewing the app should now let you navigate from an API Product to the Detail page where you see the API Proxies inside a product, as in the below

  ![API Product Detail](img/APIProductDetail%20view.png)

## Application Details
Create another page to display the API Keys for this system user. So far, you have implemented several controls over access to your BTP account, namely:
* A read-only service account onboarded to the Business Hub Enterprise tenant
* A service instance in the context of that user
* An API Proxy, protected by a rather trivial Basic Authentication scheme
* A BTP destination to manage the Basic Authentication credentials
  
However, we are providing the basic authentication credentials for the custom HTTP requests we make from the low code application. Although this is less than ideal (you can see the authorization header in Chrome developer tools), we can freely distribute this API Key to internal users due to the read-only nature of the underlying account. We could further protect the endpoint from denial of service attack and other malicious activity, by applying rate limits to the API proxy or other policies

  1. Create a new page called **Application Detail**
  2. Customize the title and add a Basic Card list
  3. Edit the configuration and select the Applications integration
     * Map content to the formula ```"API Key: " + LOOKUP(source.record, "app_key")```
     * Map id to id
     * label to developer_id
     * title to title
  4. Enable navigation and configure items for the home and applications pages. 
  5. Preview the app check the new page

    ![Application Detail](img/ApplicationDetail.png)