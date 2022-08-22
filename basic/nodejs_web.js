
// import module
//var logger = require("./logger");
//logger.log("hello");

//https module
/*
const http = require('http');
const server = http.createServer();

server.on('connection', (socket)=>{
    console.log("new connections...");
});

server.listen(3000);
console.log("Server is running on port 3000!!! ");
*/

/// New
var http = require('http');// server side programming
var server1 = http.createServer((req, resp) =>{
    if(req.url == '/'){
        resp.write('hellow demo');
        resp.end();
    }
    if(req.url == '/data'){
        resp.write(JSON.stringify([1,2,3]));
        resp.end();
    }
});

server1.createServer(function(request, response){
    console.log(request.url);
    response.write("this is demo");
});

server1.listen(3000);
console.log("Server is running on port 3000!!! ");



/*
http://localhost:3000/

Node Package Manager
Asyn JavaScript
CRUD
Data Validation
Authentication and Authorization-jwt token
Handling and logging erros
Unit and integration Testing
Test Drivern Developement
Deployement
Lib

CURD Operations
GET /api/customers
GET /api/customsers/1
PUT /api/customsers/1
DELETE /api/customsers/1
POST /api/customers

*/