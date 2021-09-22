# Automation Cloud Testing
A basic test application utilising  [Automation Cloud](https://automation.cloud) from [UBIO](https://ub.io) to crawl a website and return data in JSON format and save to file. 

This testing project utilises the web scraping functionality provided by Automation Cloud to fetch and save data. This is a basic workflow and no inputs/variables are used.

This example fetches the English Premier League table from the official website ([www.premierleague.com](https://www.premierleague.com)) using an Automation Cloud service ([noInput_TEST.automation](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/noInput_TEST.automation)) and saves the response to a JSON file ([response.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/response.json)). The app then serves this file via a HTTP response ([index.js](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/index.js)). 

Example JSON result -

`{"position":"1","team":"Chelsea","points":"13","played":"5","won":"4","drawn":"1","lost":"0","goal_difference":"+11","next-match":"Manchester City Saturday 25 September 2021 CHE 12:30 MCI"}`

A static index page ([index.html](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/static/index.html)) is served with a link to the JSON file. All HTTP requests are handled by the '[express](https://www.npmjs.com/package/express) node package.

The automation service ([fetch.js](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/fetch.js)) is triggered every 3 days and the JSON file ([response.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/response.json)) is updated daily when the app is running.

The Automation Cloud app secret key required for authorisation should be stored in a file named ‘.env’ in the root directory. File format below -

`secret=app_key`

This utilises the '[dotenv](https://www.npmjs.com/package/dotenv)' node package referenced in the package file ([package.json](https://github.com/crozuk/Automation-Cloud-Testing/blob/master/package.json)).