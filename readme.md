<img src="https://raw.githubusercontent.com/carlospetrucio/People-Search-ServiceNow-Widget/main/ignore_files_md/computer-illustration.png" min-width="250px" max-width="250px" width="400px" align="right" alt="Computador CarlosPetrucio">

# People Search
<img src="https://img.shields.io/badge/PeopleSearch-Active-brightgreen">

📜 This widget allows the creation of a search field that uses the user's "userid" to consult their data in the user table and display it to those who consult directly in the service portal or employee center.

💡 Simplifies the user consultation process for the end user.  
💡 Allows you to create filters in the query through the script, selecting which types of users can be queried or ignored..  
💡 Ready-to-use script. (copy and paste).    
💡 The user fields to be displayed can be easily changed.

You must know how to create a new widget.
```
https://docs.servicenow.com/bundle/rome-servicenow-platform/page/build/service-portal/task/create-new-widget.html
```
To make changes regarding the types of users that can be queried, you must understand the basics of GlideRecord
```
https://docs.servicenow.com/bundle/washingtondc-api-reference/page/app-store/dev_portal/API_reference/GlideRecord/concept/c_GlideRecordAPI.html
```
## 🛠️ Widget People Search was built with

Applications and Frameworks that I used to create the project.

* [ServiceNow](https://docs.servicenow.com/bundle/washingtondc-release-notes/) - ServiceNow with instance in Washington DC version.
* [BootStrap](https://getbootstrap.com/docs/5.1/) - Framework for developing interface and front-end components with version v5.1.3.
* [Angular](https://code.angularjs.org/1.5.3/docs/api) - JavaScript FrameWork with version 1.5.3.  



### 🔧 Installation


<details><summary><b>Show instructions</b></summary>

  
Step 1 - Download the project from github so that you have your version of the code and can customize it, if necessary.

![image](https://github.com/carlospetrucio/People-Search-ServiceNow-Widget/assets/50377984/52558b56-7c7f-4360-a337-1a28eabc0c61)


Step 2 - Using the filter navigator, search for the widget module inside Application menu Service Portal.    

![image](https://github.com/carlospetrucio/People-Search-ServiceNow-Widget/assets/50377984/c2c8c6da-b3e1-4e7f-b3c0-aa93c89397fc)


Step 3 - Use the "New" button to create a new widget.    

![image](https://github.com/carlospetrucio/People-Search-ServiceNow-Widget/assets/50377984/0ad01cf1-c592-438c-a1a5-8428c632da78)

Step 4 - Now you must define a name, description and “ID” for your widget, then click on the context menu and save. (Burger Menu)
Remember to add the necessary role to the "roles" option if you want to limit the widget's display to certain types of users.

![image](https://github.com/carlospetrucio/People-Search-ServiceNow-Widget/assets/50377984/a125ed48-82fb-45cb-ba45-e3483ab1856f)
