// Simple Nod.js server
const http = require("http");

const server = http.createServer((req, res) =>{
  console.log(req);
  process.exit();  // stop event loop
  
});

const PORT = 3000;
server.listen(PORT, () => { 
  console.log(`Server is running on port http://localhost:${PORT}`);
});

