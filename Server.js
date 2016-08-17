var express = require('express');
var app = express();

app.use(express.static(__dirname + "/ContactList"))

app.get('contactlist', function(req, res){
  console.log("GET request received!");
})

app.listen(3000);
console.log('Server running on port 3000')
