const http = require('http');
const port = process.env.PORT || 3000;

let status = 'healthy';

const server = http.createServer((req, res) => {
  console.log('Request received');
  res.statusCode = status === 'healthy' ? 200 : 500;
  const msg =
    status === 'healthy' ? 'Hello Node!\n' : 'Internal Server Error\n';
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

setTimeout(() => {
  status = 'unhealthy';
  console.log('Server status changed to unhealthy');
}, 45000);
