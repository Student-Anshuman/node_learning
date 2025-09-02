const http = require("http");
const fs = require("fs");
const homeHandler = require("./home");

const cartHandler = ((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/cart') {
    res.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Myntra Page</title>
      </head>
      <body>
        <header>Go to Shopping</header>
        <main>
          <h1>Welcome to Myntra</h1>
          <h1>Add Your Cart</h1>
          <nav>
            <a href="/">Home</a>
            
          </nav>
          
        </main>
      </body>
    </html>`);
    res.end();
  }

  if (req.url === '/') {
    homeHandler(req, res);
    return res.end();
  }
});



module.exports = cartHandler;
