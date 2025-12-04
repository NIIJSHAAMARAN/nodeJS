// Create a small Node.js program that mimics a simple webpage server.
//  When the user visits a specific URL (like /about or /contact), your program should load and
//  show the corresponding HTML file (e.g., about.html, contact.html) using the built-in modules. 
// If the page doesn't exist, show a custom "Page Not Found" message. 
// Also, when a page is successfully loaded, your program should trigger a custom event (like "pageLoaded")
//  that logs a message to the console saying which page was loaded.
// Files to Create:
// about.html
// contact.html
// server.js
const http=require('http');
const fs=require('fs');
const url=require('url');
const events=require('events');
const eventEmitter=new events.EventEmitter();
const myEventHandler=function()
{
    console.log("Page was loaded")
}
eventEmitter.on("pageLoaded",myEventHandler)
http.createServer(function(req,res)
{
    const q=url.parse(req.url,true);
    const filename="."+q.pathname;
    fs.readFile(filename,function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'Content-Type':"text/html"});
            return res.end("Page Not Found");
        }
        
        eventEmitter.emit("pageLoaded");
    
        //  res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(data);
        //  return res.end();
        return res.end();
    });  
}).listen(8080);