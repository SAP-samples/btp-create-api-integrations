## Integrate the portal and process
Now that your low code portal is built and request API access process deployed, the final step is to integrate the two, so that the process can be invoked from a request form in the portal.
  1. Open the **API Product Detail** page in SAP AppGyver.
  2. Add a button to the bottom of the canvas and set the label to **Request Access to this API**.
  3. Create a new page called **API request form**.
  4. Customize the header and add three input fields below. Name them **First Name**, **Last Name**, and **Email**.
  5. Add a dropdown field component and set the label to **API Product**..
  6. Add a button and name it **Submit**.
  7. Create a page parameter called **APIProduct** (just like the API Product Detail page).
  8. Add logic to the Request access button back on the **API Product Detail** page to open the request form and pass the page parameter **APIProduct**.
  9. Create an App Variable called **APIList** as a list of objects with 2 properties called **id**, and **title**.
     ![App Variable](https://user-images.githubusercontent.com/6976027/193349093-9cd52512-8813-4158-90cd-5bb57b2b085b.png)

  10. Open the **Home** page, select the Basic Card list and **Open in component template editor** to modify the outputs of the component to store the list of API Products during the initial refresh.
     <br><br>[<img src="./img/ComponentEditor.png" width="70%">](./img/ComponentEditor.png)

  11. Select **PROPERTIES** and add  a list of objects to output values with 2 properties:
      * Property key: **idDesc**
      * id
      * title
     <br><br>[<img src="./img/OutputValues.png" width="70%">](./img/OutputValues.png)

  12. Return to **VIEW**, select **BASIC CARD LIST 1** from the tree, **Show logic for BASIC CARD LIST**, add a **Set output value** node, and connect it to the output of **Set private data variable**.
       ![Configure mapping](img/BasicCardLogic.png)
  13. Set the output value to **idDesc** and configure the value as a mapping. Select the output from the get record collection node as the source data.
       <br><br>[<img src="./img/SetOutputValue.png" width="70%">](./img/SetOutputValue.png)
  14. Set the map values to **ID** and **Description**.
  15. Exit the editor and save the application.
  16. Add a **Set app variable** node to the Basic card list and connect it to component tap event
  17. Set the assigned value of **APIList** to the selected component value **List of ids and descriptions**
      ![Set APIList from Basic Card](https://user-images.githubusercontent.com/6976027/193351932-2795561c-91d0-4469-9e1b-b13799975f57.png)


  18. Return to **API request form** page and set the option list and selected value properties of the **API Product** dropdown.
      <br><br>[<img src="./img/RequestForm.png" width="70%">](./img/RequestForm.png)

  19. Use the following formula for the option list:
   ```MAP<item>(appVars.APIList, { label: LOOKUP(item, "title"), value: LOOKUP(item, "id") })```
  20. A preview of the app now shows the dropdown list populated and the selected product highlighted as the default.
      ![App preview](img/PopulatedForm.png)

  21. Add a REST integration under **Data > Classic data entities** and point to the API Proxy for the Workflow Instance endpoint (e.g. https://virtual-host.test-or-prod.apimanagement.datacenter.hana.ondemand.com/workflow/rest/v1/workflow-instances). Name the resource ID **registrations** as this resource will submit a developer registration request via the process deployed in the previous section.
  22. Enable the POST method and add a basic authentication header if you applied security. This would again be the Base 64 encoded API Key and Secret for the proxy. Disable the other methods, such as GET COLLECTION and GET RECORD as they are not allowed by the API Proxy.
    <br><br>[<img src="./img/RESTprops.png" width="70%">](./img/RESTprops.png)

  22. Set a custom schema for the POST and enter the input structure from the process:
      * context (object)
        * apiproduct (text)
        * country (text)
        * emailid (text)
        * firstname (text)
        * lastname (text)
        * userid (text)
      * definitionId (text)  
    <br><br>[<img src="./img/RESTcustomschema.png" width="70%">](./img/RESTcustomschema.png)
  
  22. You can see the input structure in the **Process Details** section of the deployed **Developer_Onboarding** process:

      ![image](https://user-images.githubusercontent.com/6976027/193618400-7dfab432-0809-4093-8adc-f07f2cb2f540.png)

  24. Save the data entity.
  25. Add another classic data entity and select Marketplace search.
  26. Install the **RestCountries** sample data entity.
  27. Configure the **RestCountries** entity with a query parameter and the following properties:
      * Key: fields
      * Label: fields
      * Value: name,alpha2Code
  28. Add a data variable to the **API Request form** page for RestCountries. 
  29. Duplicate the API Product dropdown and rename it to Country.
  30. Set the option list to a mapping, select the data variable for RestCountries, and set the label and value fields to name and alpha2Code respectively.
  31. Set the **selected value** property of the dropdown to No Value.
  32. Add a page variable with type object, name it **processContext**, and repeat the field names for the process inputs. You can flatten the object by adding definition id as a direct property. The mapping to the REST endpoint will be handled below.
      ![image](https://user-images.githubusercontent.com/6976027/193621052-546084e9-7839-4430-ae3a-e5d4f0d6cbfc.png)

  33. Set the **Component onChange** event for each input field in the request form to the corresponding named property of the processContext variable. Set the value to a formula ```STRING(self.value)```
    <br><br>[<img src="./img/selfValue.png" width="70%">](./img/selfValue.png)

  34. Use the email field for user id as well, so apply two consecutive **Set page variable** nodes attached to each other.
    <br><br>[<img src="./img/emailUserid.png" width="70%">](./img/emailUserid.png)

  35. Add logic to the submit button, starting with an **If condition**. Set the Condition to a formula ```IF(IS_NULLY(pageVars.processContext), false, true)```. Note that we really need to check every field to ensure they aren't blank but for simplicity sake we'll check the entire object.
  36. For Output 1, attach a Create Record node and configure the record properties as a custom object, mapping the page variable values to it. You can retrieve the values from the 2 dropdown menus directly by using **Component Properties > Another component's property or output value** option. Make sure you add the workflow definition id retrieved in the previous section.
    <br><br>[<img src="https://user-images.githubusercontent.com/6976027/193625005-90bf0195-d793-494c-8592-18d0140338ab.png" width="70%">](https://user-images.githubusercontent.com/6976027/193625005-90bf0195-d793-494c-8592-18d0140338ab.png)

  34. For Output 2, attach a Toast dialog and set the message to **Please complete all fields**.
  35. Add an additional toast dialog to the outputs of the **Create record** node to notify of success or failure. Fill out the dialog options:
    ![Submit button](./img/submitButton.png)
  36. Save the application.
