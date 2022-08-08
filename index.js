const http = require('http');
const url = require('url');

const hostName = "0.0.0.0";
const port = 3000;


const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
});

server.listen(port, hostName, () =>{
    console.log("server started running on http://{hostName}:{port}/");
});
