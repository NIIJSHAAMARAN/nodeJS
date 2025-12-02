const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.open('newFile2.txt','w',function(err,file)
    {
        if(err) throw err;
        fs.writeFile(file,'nijisha amaran',function(err)
        {
            if(err) throw err;
            console.log("content written");
        });
        console.log('file saved!');
    });
}).listen(8080);