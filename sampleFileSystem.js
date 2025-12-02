const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.readFile('demo.html',function(err,data)

    {
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);