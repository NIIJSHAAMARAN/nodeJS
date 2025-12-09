// Create a buffer from the sentence: "Node.js buffers are powerful".
// Write "FAST " at the beginning of that buffer using buffer write methods.
// Create another buffer with the sentence: " and flexible!".
// Combine both buffers into a single one.
// Convert the final buffer to a readable string and save it to a .txt file.
// Log the full path of the file using global path info.
// Save the file as buffer_output.txt in the same directory as your script.


var buf1=new Buffer.from("Node.js buffers are powerful");
var buf2=new Buffer.alloc(20);
len=buf2.write('FAST');
console.log(len);
var buffer3=new Buffer.from(" and flexible!")
var concatStr=Buffer.concat([buf1,buffer3]);
console.log("String is: "+concatStr.toString());
const fs = require('fs');
const path = require('path');
const outputPath = path.join(__dirname, "buffer_output.txt");
fs.writeFileSync(outputPath,concatStr);
console.log("File saved at:", outputPath);
