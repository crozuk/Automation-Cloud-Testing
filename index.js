const fs = require('fs')
var http = require('http');

data = fs.readFileSync('response.json', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(JSON.parse(data));  
  });

//Fetch updated JSON (2 days)
setInterval(function () {
  
  //Fetch updated table
  //require('child_process').fork('fetch.js');
  
  data = fs.readFileSync('response.json', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    //console.log(JSON.parse(data));  
  });
  
  //console.log("beep")
  console.log(JSON.parse(data))

}, 172800000)


//Fetch updated table (3 days)
setInterval(function () {
  
  //Fetch updated table
  require('child_process').fork('fetch.js');
  

}, 259200000)

//create a server object:
http.createServer(function (req, res) {
  res.write(data);
  res.end();
}).listen(3001); 

