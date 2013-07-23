var fs = require('fs');

var express = require('express');



var app = express.createServer(express.logger());

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/assets/img", express.static(__dirname + '/assets/img'));
//app.use("/styles", express.static(__dirname + '/styles'));

app.get('/', function(request, response) {
	answer = fs.readFileSync('index.html').toString();
	//answer = fs.readFileSync(request).toString();
	response.send(answer);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
