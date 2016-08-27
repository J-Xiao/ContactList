var express = require('express');
var app = express();

app.use(express.static(__dirname + "/ContactList"))

app.get('contactlist', function(req, res){
  console.log("GET request received!");
  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  })
})

app.post('/contactlist', function (req, res){
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc){})
})

app.listen(3000);
console.log('Server running on port 3000')
