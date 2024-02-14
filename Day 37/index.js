const http = require("http");

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Check if the requested URL is "/"
  if (req.url === "/") {
    // If it is, send "Hello Vishal" as the response
    res.end("Hello Vishal");
  } else {
    // If it's not, send a 404 Not Found response
    res.writeHead(404);
    res.end("404 Not Found");
  }
});

// Define the port number to listen on
const port = 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  // console.log(process.env);
});
