var http = require('http');
var currentDate = require('./mymodule');
//import upper from "upper-case";
var upper = require('upper-case');



http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write(upper.upperCase(req.url));
    //res.write('Current date is: ' + currentDate.currentDate() );
    res.end();
}).listen(8080);