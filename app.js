// Simple Nod.js server
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    
    res.write('<body><h1>Enter your detail</h1>');
    res.write('<form action="/submit-details" method = "POST" > ');
    res.write('<input type="text" name="name" placeholder="Enter your name"> ');
    res.write('<label for "gender"> Gender: </label> ');
    res.write('<input type="radio" id="male" name="gender" value="male"> ');
    res.write('<label for="male">Male</label> ');
    res.write('<input type="radio" id="female" name="gender" value="female"> ');
    res.write('<label for="female">Female</label> ');
    res.write('<button type="submit">Submit</button> ');
    res.write('</form> ');
    res.write('</body > ');
    res.write('</html>');
    return res.end();
   

  } else if ( req.url.toLowerCase === '/submit-details' && req.method === 'POST') {
    fs.writeFileSync("output.txt", "Anshuman")
      res.statusCode = 302;
    res.setHeader('Location', '/');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Enter your detail</h1></body>');
    res.write('</html> ');
      return res.end();
    } 
    
   
  res.write('<html>');
  res.write('<head><title>Complete coding</title></head>');
  res.write('</html>');
  return res.end();

});

const PORT = 3000;
server.listen(PORT, () => { 
  console.log(`Server is running on port http://localhost:${PORT}`);
});

