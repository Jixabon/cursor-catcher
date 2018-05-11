const http = require('http');

var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(server_port, server_ip_address, () => {
  console.log(`Server running at http://${server_ip_address}:${server_port}/`);
});