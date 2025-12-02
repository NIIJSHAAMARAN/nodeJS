const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.rename("newfile.txt",'renamedFile.txt',function(err)
    {
        if(err) throw err;
        console.log("File renamed");
    });
}).listen(8080);