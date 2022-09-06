## Integrate the portal and process
Now that your low code portal is built and request API access process deployed, the final step is to integrate the two, so that the process can be invoked from a request form in the portal.
  1. Open the **API Product Detail** page in SAP AppGyver
  2. Add a button to the bottom of the canvas and set the label to **Request Access to this API**
  3. Create a new page called **API request form**
  4. Customize the header and add 3 input fields below. Name them **First Name**, **Last Name**, and **Email**
  5. Add a dropdown field component and set the label to **API Product**
  6. Add a button and name it Submit
  7. Create a page parameter called **APIProduct** (just like the API Product Detail page)
  8. Add logic to the Request access button to open the request form and pass the page parameter
  9. Create an App Variable called **APIList** as a list of object with 2 properties
     ![Create app variable](img/SetPageVar.png)

  10. Now we will modify the outputs of the Basic Card list on the Home page to store the list of API Products during the initial refresh
     ![Component Editor](img/ComponentEditor.png)

  11. Click **PROPERTIES** and add  a list of objects to output values with 2 properties as below (note the property key name for later)
     ![Output value](img/OutputValues.png)

  12. Return to **VIEW**, select **BASIC CARD LIST 1** from the tree, add a **Set output value** node, and connect it to the output of **Set private data variable**
     ![Set output value](img/SetOutputValue.png)

  13. Set the output value to **idDesc** and configure the value as a mapping, as below
     ![Configure mapping](img/BasicCardLogic.png)

  14. Exit and save the application
  15. Add a **Set app variable** node to the Basic card list and connect it to component tap event
  16. Set the assigned value of APIList to the selected component value **List of ids and descriptions**
     ![List of ids](img/SetAppVariable.png)

  17. Return to **API request form** page and set the option list and selected value properties as below
      ![Option list](img/RequestForm.png)

  18. Use the following formula for the option list:
   ```MAP<item>(appVars.APIList, { label: LOOKUP(item, "title"), value: LOOKUP(item, "id") })```
  19. A preview of the app now shows the dropdown list populated and the selected product highlighted as the default
      ![App preview](img/PopulatedForm.png)

  20. Add a REST integration under **Data** and point to the API Proxy for the Workflow Instance endpoint. Enable the POST method and add a basic authentication header
    ![REST properties](img/RESTprops.png)

  21. Set a custom schema for the POST and enter the input structure from the process
    ![POST custom schema](img/RESTcustomschema.png)\

  22. Install the REST countries data component from the component market
  23. Configure the REST entity with a query parameter
      * Key: fields
      * Label: fields
      * Value: name,alpha2Code
  24. Add a data variable to the form page for RestCountries 
  25. Duplicate the API Product dropdown and rename it to Country
  26. Set the option list to a mapping, select the data variable for RestCountries, and set the label and value fields to name and alpha2Code respectively
  27. Set selected value to No Value
  28. Add a page variable with type object, name it processContext, and repeat the field names for the process inputs
  29. Set the **Component onChange** event for each field in the request form to the corresponding named property of the processContext variable. Set the value to a formula ```STRING(self.value)```
  30. Use the email field for user id as well, so apply 2 consecutive **Set page variable** nodes attached to each other
  31. Add logic to the submit button, starting with an **If condition**. Set the value to ```IF(IS_NULLY(pageVars.processContext), false, true)```
      * Note that we really need to check every field to ensure they aren't blank but for simplicity sake we'll check the entire object
  32. For Output 1, attach a Create Record node and configure the record properties as a custom object, mapping the page parameter values to it. You can retrieve the values from the 2 dropdown menus directy by using Component Properties > Another component's property or output value option 
  33. For Output 2, attach a Toast dialog and set the message to something like, **Please complete all fields**
  34. Save the application