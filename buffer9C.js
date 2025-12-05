
// Create a buffer from the message "NodeJS is fast".

// Slice the buffer to extract only the word "NodeJS" and print it.

// Create another buffer from the word "Powerful".

// Compare both buffers ("NodeJS" and "Powerful") and display which one comes first alphabetically.

// Convert the "NodeJS" buffer to JSON and print the result.

var buf1=new Buffer.from('NodeJS is fast');
var sliceRes=buf1.slice(0,6);
console.log(sliceRes.toString());
var buf2=new Buffer.from('Powerful');
var comp=buf1.compare(sliceRes);
if(comp<0)
    console.log(buf1 +" comes before "+sliceRes);
else if(comp===0)
    console.log(buf1+"is same as "+sliceRes);
else
    console.log(buf1+" comes after "+sliceRes);
var conRes=sliceRes.toJSON();
console.log(conRes);


