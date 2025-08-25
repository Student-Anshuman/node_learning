// Simple Nod.js server
const http = require("http");

const server = http.createServer((req, res) => {
  // res.setHeader('Content-Type', 'json');

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  

  if (req.url === '/') {
    res.write('<body><h1>Welcome to home page</h1></body>');
  } else if (req.url.toLowerCase() === '/products') {
    res.write('<body><h1>Welcome to products page</h1></body>');
    return res.end();
  } else {
    res.write('<body><h1>404 Page not found</h1></body>');
    return res.end();
  }
  res.write('<body><h1>Hello Coder</h1></body>');
res.write('</html>');
  return res.end();

});

const PORT = 3000;
server.listen(PORT, () => { 
  console.log(`Server is running on port http://localhost:${PORT}`);
});

