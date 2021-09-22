# Automation Cloud Testing
A basic test application utilising  [Automation Cloud](https://automation.cloud) to crawl a website and return data in JSON format and save to file. 

This example fetches the English Premier League table using an Automation Cloud service (script to be added to repo) and saves the response to a JSON file ([response.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/response.json)). The app then serves this file via a HTTP response ([index.js](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/index.js)). The automation service ([fetch.js](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/fetch.js)) is triggered every 3 days and the JSON file ([response.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/response.json)) is updated daily.

The Automation Cloud app secret key required for authorisation should be stored in a file named ‘.env’ in the root directory. File format below -

`secret=app_key`

This utilises the ‘dotenv’ node package referenced in the package file ([package.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/package.json)).