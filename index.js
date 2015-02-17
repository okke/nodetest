var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello from inside a container!');
});


console.log("Start test server on port 8080");
app.listen(8080);
console.log("done");
