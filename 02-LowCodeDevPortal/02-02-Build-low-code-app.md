# Build a low code Developer Portal
In this section, you will build a low code app in SAP AppGyver. Unlike previous walkthroughs such as the [Custom mobile HR app](https://github.com/SAP-samples/successfactors-extension-calculate-employee-seniority/tree/mission-sfsf-mobile-appgyver/04-CreateSAPAppGyverProject) and [Covid certificate checker](https://github.com/SAP-samples/cap-appgyver-covid-certcheck/tree/main/tutorials/4_AppGyverApp) we won't provide exhaustive steps for recreating this application. You can find all the key steps listed below, but in a leaner fashion.

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