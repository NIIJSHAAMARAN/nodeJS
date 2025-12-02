// Create a small Node.js program using the file system module that does the following:

// Create a file named user.txt.

// Ask the student to store a welcome message like "Welcome John" (you can directly write this string into the file).

// Then read the content from the file and check if the name in the file is "John" using a function.

// If the name matches, display "Valid User" in the terminal. Otherwise, display "Unknown User".

const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.readFile("user.txt",function(err,data)
    {
        if(err) throw err;
        else{
            let value=data.toString();
            let pos=value.search("John");
            if(pos!=-1)
            {
                console.log('Valid User');
            }
            else
                console.log("Unknown User");
        }
       return res.end();
    })
}).listen(8080);