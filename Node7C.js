// You're building a small website helper in Node.js. When someone visits your site using specific paths like /home or /services, 
// your program should try to load and show the correct HTML file (e.g., home.html, services.html). 
// If the page is successfully shown, display a message in the console that says which page was viewed using an event. If the page doesn't exist, show a custom message saying the page was not found.
// You need to:
// Create a Node.js server.
// Load the correct HTML file based on the URL.
// Show a message in the console using a custom event when the page loads.
const http=require('http');
const fs=require('fs');
const url=require('url');
http.createServer(function(req,res)
{
    const q=url.parse(req.url,true);
    const filename="."+q.pathname;
    fs.readFile(filename,function(err,data)
    {
        if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    console.log("page was viewed using an event");
    return res.end();
    })
}).listen(8080);