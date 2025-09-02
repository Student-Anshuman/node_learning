const http = require("http");
const fs = require("fs");

const homeHandler = ((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

 
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
          <nav>
            <a href="/">Home</a>
            <a href="/men">Man</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/beauty">Beauty</a>
            <a href="/cart">Cart</a>
          </nav>
        </main>
      </body>
    </html>`);
  res.end();
});

module.exports = homeHandler;