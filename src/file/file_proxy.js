const http = require('http');
const fs = require('fs');

const port = 8080;
const proxyServer = http.createServer((req, res) => {
  const url = req.url;
  const path = `./${url}`;

  fs.exists(path, (exists) => {
    if (exists) {
      fs.readFile(path, (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error reading file');
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', getContentType(path));
        res.end(data);
      });
    } else {
      res.statusCode = 404;
      res.end('File not found');
    }
  });
});

proxyServer.listen(port, () => {
  console.log(`Proxy server listening on port ${port}`);
});

function getContentType(path) {
  const extension = path.split('.').pop().toLowerCase();
  switch (extension) {
    case
 
'html':
      return
 
'text/html';
    case
 
'css':
      return
 
'text/css';
    case
 
'js':
      return
 
'application/javascript';
    case
 
'jpg':
      return
 
'image/jpeg';
    case 'png':
      return 'image/png';
    default:
      return 'application/octet-stream';
  }
}