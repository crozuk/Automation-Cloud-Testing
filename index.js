//File System
const fs = require('fs')

//Initla data read
data = fs.readFileSync('response.json', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(JSON.parse(data));  
  });

//Fetch updated JSON (1 day)
setInterval(function () {
  
  data = fs.readFileSync('response.json', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(JSON.parse(data));  
  });
  
  //console.log("beep")
  console.log(JSON.parse(data))

}, 86400000)


//Fetch updated table (3 days)
setInterval(function () {
  
  //Fetch updated table
  require('child_process').fork('fetch.js');
  

}, 259200000)

//Express server
var express = require('express');
var app = express();
const port = 3001

app.get('/', (req, res) => {
  res.json(JSON.parse(data))
})

app.listen(port, () => {
  console.log(`JSON response at http://localhost:${port}`)
})
