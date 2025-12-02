const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.appendFile("newfile.txt"," welcome",function(err)
    {
        if(err) throw err;
        console.log("File saved");
    });
}).listen(8080);