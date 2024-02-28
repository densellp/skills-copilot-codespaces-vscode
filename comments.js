// Create web server
// 1. Create a Web Server
// 2. Read the comments.json file
// 3. Send the comments.json file to the client
// 4. Listen on port 3000

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('comments.json', (err, data) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});