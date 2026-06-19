const express = require('express');
const http = require('http');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is running on port 3000');

  http.get('http://localhost:3000', (res) => {
    console.log(`Status Code: ${res.statusCode}`);

    if(res.statusCode === 200) {
      console.log('Test passed: Received 200 OK');
      server.close();
      process.exit(0);
    } else {
        server.close();
        process.exit(1);
    }
  }).on('error', (err) => {
    console.error(`Test failed: ${err.message}`);
    server.close();
    process.exit(1);
  });
});
