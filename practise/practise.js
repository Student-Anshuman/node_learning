const http = require("http");
const fs = require("fs");
const cartHandler = require("./container/cart");
const homeHandler = require("./container/home");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {
    homeHandler(req, res);
  }


  if (req.url === '/cart') {
    cartHandler(req, res);
  }

  if (req.url === '/men') {
    
    
  }
  else if (req.url === '/women') {
    res.write('<h1>Welcome to myntra for women</h1>');
    res.write('<button>Go to Home</button>');
    return res.end();
  }
  else if (req.url === '/kids') {
    res.write('<h1>Welcome to myntra for kids</h1>');
    res.write('<button>Go to Home</button>');
    return res.end();
  }
  else if (req.url === '/beauty') {
    res.write('<h1>Welcome to myntra for beauty products</h1>');
    res.write('<button>Go to Home</button>');
    return res.end();
  }
  else if (req.url === '/cart') {
    res.write('<h1>Welcome to myntra cart page</h1>');
    res.write('<button>Go to Home</button>');
    return res.end();
  }

  
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});