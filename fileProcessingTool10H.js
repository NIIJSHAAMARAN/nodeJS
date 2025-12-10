// You are helping a team that is working on a file-processing tool. 
// They give you two small files: intro.txt and conclusion.txt.
//  They want you to:
// Read the content from both files using streams
// Merge them together (i.e., intro.txt content followed by conclusion.txt)
// Save the merged result into a new file called full_report.txt
// Write a Node.js program to achieve this using stream piping and buffer concatenation.
//  Display a message like "Merging complete!" after saving the final file.
var fs=require('fs');
var data1 = [];
var data2 = [];
var rdsStream1=fs.createReadStream('intro.txt');
var rdsStream2=fs.createReadStream('conclusion.txt');
rdsStream1.on("data", function(chunk) {
    data1.push(chunk);  
});

rdsStream1.on("end", function() {

    rdsStream2.on("data", function(chunk) {
        data2.push(chunk);
});
 rdsStream2.on("end", function() {

        var finalBuffer = Buffer.concat([...data1, ...data2]);

        var wrStream = fs.createWriteStream("full_report.txt");

        wrStream.write(finalBuffer);

        wrStream.end();

        wrStream.on("finish", function() {
            console.log("Merging complete!");
        });

    });

});

rdsStream1.on("error", console.error);
rdsStream2.on("error", console.error);

