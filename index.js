//File System
const fs = require('fs')

//Initial data read
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
const port = 3001;

//Static file path
app.use(express.static('static'));

//Index page
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//JSON file
app.get('/response.json', (req, res) => {
  res.json(JSON.parse(data))
})

//Start server
app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
