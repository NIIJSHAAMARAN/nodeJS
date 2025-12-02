const http=require("http");
const server=http.createServer(function(req,res){
    // let html=`<!DOCTYPE html>
    // <html>
    // <head>
    // </head>
    // <body>
    // Hello world
    // </body>
    // </html>`;
    // res.write(html);



    // let urlString=req.url;
    // res.write(urlString);

    // var method = req.method;
    // res.write(method);

    
//    var headers = req.headers;
//    var userAgent = headers['user-agent'];
//    res.write(userAgent);


    // res.statusCode=200;
    // res.statusCode=404;
    // res.statusMessage="Not found";

    // res.setHeader("content-Type","text/html");
     res.writeHead(200, "ok", {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
});
server.listen(8080)