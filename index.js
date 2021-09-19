const fs = require('fs')
var http = require('http');

const data = fs.readFileSync('response.json', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
});

console.log(JSON.parse(data));

//create a server object:
http.createServer(function (req, res) {
  res.write(data);
  res.end();
}).listen(3001); 

