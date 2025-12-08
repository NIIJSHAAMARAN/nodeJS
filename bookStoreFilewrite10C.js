// You are helping a small local bookstore store their book summary in a text file and then read it back to display on the screen. Do the following:

// Write the sentence "Books are a uniquely portable magic." into a file named book.txt.

// Once writing is complete, read the content from book.txt and display it on the console.

// Handle errors gracefully and show a message when writing and reading are completed.

var fs=require('fs');

var data='Books are a uniquely portable magic.';
var wrStream=fs.createWriteStream('book.txt');
wrStream.write(data,'utf8');
wrStream.end();
wrStream.on('finish',function()
{
     console.log("Writing has completed.");
     var rdata='';
    var rdsStream=fs.createReadStream('book.txt');
    rdsStream.setEncoding("utf8");
    rdsStream.on('data',function(chunk){
    rdata+=chunk;
    });
    rdsStream.on('end',function()
    {
        console.log(rdata);
        console.log("Reading from file completed");

    });
    rdsStream.on('error',function(err)
    {
        console.log(err.stack);
    });
});
wrStream.on('error', function(err) {
   console.log(err.stack);
});


