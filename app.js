const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const reqRespHandler =(req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};


const server = http.createServer(reqRespHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});