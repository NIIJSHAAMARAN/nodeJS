// Creates a file named profile.txt with the content:
// "Name: Riya\nAge: 22\nCity: Mumbai"

// Reads the content of the file and extracts only the name using string methods.

// Uses a function to check if the name is "Riya" and prints "Profile verified" if it matches, otherwise print "Invalid profile".

// Then, update the file to add the line: Status: Active

// Finally, rename the file to verified_profile.txt
const http=require('http');
const fs=require('fs');
http.createServer(function(req,res)
{
    fs.readFile("profile.txt",function(err,data)
    {
        if(err) throw err;
        else{
            let strData=data.toString();
            let parts = strData.split("\\n");
            let firstLine = parts[0];
            let name = firstLine.split(":")[1].trim();     
             if(name==="Riya")
            {
                console.log('Profile verified');
            }
            else
                console.log("Invalid profile");
        }
       return res.end();
    });
}).listen(8080);