const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./worker.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Request processed: ${result}`);
  });

  worker.on('error', (err) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error processing request');
    console.error(err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// worker.js
const { parentPort } = require('worker_threads');

let count = 0;
const interval = setInterval(() => {
  count++;
  console.log('Count:', count);
  if (count === 5) {
    clearInterval(interval);
    parentPort.postMessage('Request processed in worker');
  }
}, 1000);