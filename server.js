// server.js
const http = require('http');

// Define port
const PORT = 3000;

// Create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! Server is running without node_modules.\n');
});

// Start listening
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
