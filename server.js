const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate a long-running task
  let count = 0;
  const interval = setInterval(() => {
    count++;
    console.log('Count:', count);
    if (count === 5) {
      clearInterval(interval);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Request processed!');
    }
  }, 1000);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});