const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.unlink("newFile2.txt",function(err)
    {
        if(err) throw err;
        console.log("File deleted");
    });
}).listen(8080);