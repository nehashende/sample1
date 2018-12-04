var http = require('http');

//User defined module:
var d = require('./MyModule1');

//File operations
var fileN = require('fs')

var url = require('url');

var uc = require('upper-case');

http.createServer(function (req,res)
{
    var q = url.parse(req.url,true);
    var fileName = "." + q.pathname;

    fileN.readFile(fileName,function(err,data)
    {
        if(err)
        {
            res.writeHead(404, {'Content-Type' : 'text/html'});
            return res.end("Error : 404 , File not found.");
        }     
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        
        //Printing URL:
        res.write(req.url  + "<br></br>");

        //Just some text:
        res.write("Hello Neha, Good Morning, HAND, cya!!<br></br>");

        //User defined module:
        res.write("Today is : " + uc(d.myDateTime()) + "<br></br>");

        //File operations:
        res.write("Reading and printing file data : <br>" +data + "<br></br>");
    
        res.end();
    });   
}).listen(8080);

var url1 = require('url');
var addr1 = "http://localhost:8080/default.htm?year=2017&month=february";
var q1 = url1.parse(addr1,true);

console.log(q1.host);
console.log(q1.pathname);
console.log(q1.search);

var qData1 = q1.query;
console.log(qData1.month);