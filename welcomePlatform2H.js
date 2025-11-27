// Your task is to write a program in Node.js that focuses on manipulating these strings using various string methods:

// Tasks:

// Store the person’s full name and welcome message as string values.
//     Example data:
//     fullName = "  Sarah Johnson  ";
//     welcomeMsg = "   Welcome to the new platform! Hope you enjoy your 

// Create a Node.js object to hold the data (full name and welcome message) with a method to format and display the details.
// Inside the object’s method, perform the following string operations:
//   Display the first character of the full name using a string method.
//   Show the total number of characters in the welcome message.
//   Display the first 15 characters of the welcome message using two different string methods (e.g., slice() and substring()).
//   Convert the full name to uppercase.
//   Convert the welcome message to lowercase.
//   Trim extra spaces from the welcome message.
//   Split the full name into an array containing the first and last name.
//   Find the position of the word "welcome" in the message (case-insensitive).
//   Combine the full name and welcome message into a single string using a joining method (e.g., concatenation or template literals).
//   Call the object’s method to display the formatted output using console.log()

let person={
     fullName : "Sarah Johnson",
     welcomeMsg : "   Welcome to the new platform! Hope you enjoy your ",
     display:function()
     {
        console.log("First Character of the full name:"+this.fullName.charAt(0));
        console.log("Total no.of chars in welcome msg:"+this.welcomeMsg.length);
        console.log("1st 15 chars of welcome msg:"+" "+"slice():"+this.welcomeMsg.slice(0,15)+" "+"substring:"+this.welcomeMsg.substring(0,15));
        console.log(this.fullName.toUpperCase());
        console.log(this.welcomeMsg.toLowerCase());
        console.log(this.welcomeMsg.trim());
        let name=this.fullName.split(" ")
        console.log(name);
        console.log(this.welcomeMsg.search(/welcome/i));
        console.log(this.fullName.concat(" "+this.welcomeMsg));
     }
}
person.display();