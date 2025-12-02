// You are asked to create a simple Node.js web server that responds differently based on the URL path requested by the user. Your server should:
// Listen on port 3000.
// Respond with a simple HTML page for these routes:
//       / : Show a welcome message, e.g. "Welcome to the Home Page!"
//      /about : Show a short description, e.g. "This is a simple Node.js server."
//      /contact : Show contact info, e.g. "Contact us at contact@example.com."
// For any other route, respond with a plain text message: "404 Page Not Found."
// Use the http core module to create the server.
// Handle the request and response objects correctly.
const http=require('http');
const server=http.createServer(function(req,res)
{
   if(req.url==='/')
    {
        res.writeHead(200, "ok", {'Content-Type': 'text/html'});
        res.write('<h1>Welcome to the Home Page!</h1>');
        res.end();
    }
    else if(req.url==='/about')
    {
        res.writeHead(200, "ok", {'Content-Type': 'text/html'});
        let html=`<!DOCTYPE html>
                    <html>
                    <head></head>
                    <body><h1>This is a simple Node.js server.</h1>`;
        res.write(html);
        res.end(); 
    }
    else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
     res.end("<h1>Contact us at contact@example.com.</h1>");
  }
    
    // if(req.url==='/random')
    else 
    {
       
         res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }

  

});
server.listen(3000); 