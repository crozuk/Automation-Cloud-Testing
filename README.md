# Automation Cloud Testing
A basic test application utilising  ([Automation Cloud](https://automation.cloud) to crawl a website and return data in JSON format and save to file. 

This example fetches the English Premier League table using an Automation Cloud service (script to be added to repo) and saves the response to a JSON file (response.js). The app then serves this file via a HTTP response (index.js). The automation service (fetch.js) is triggered every 3 days and the JSON file (response.js) is updated daily.