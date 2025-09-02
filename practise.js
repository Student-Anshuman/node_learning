const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/men') {
    res.write('<h1>Welcome to myntra for men</h1>');
    return res.end();
  }
  else if (req.url === '/women') {
    res.write('<h1>Welcome to myntra for women</h1>');
    return res.end();
  }
  else if (req.url === '/kids') {
    res.write('<h1>Welcome to myntra for kids</h1>');
    return res.end();
  }
  else if (req.url === '/beauty') {
    res.write('<h1>Welcome to myntra for beauty products</h1>');
    return res.end();
  }
  else if (req.url === '/cart') {
    res.write('<h1>Welcome to myntra cart page</h1>');
    return res.end();
  }

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

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});