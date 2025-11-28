// You're creating a small Node.js program that introduces a user and shows their hobby details.
// Your task is to:
// Create a file called userInfo.js
// Store the user's name as a single lowercase string (e.g., "emma watson")
// Store their hobby (e.g., "playing guitar")
// Export these using an object
// Create another file called formatName.js
// Write a function that takes a full name like "emma watson" and returns "Emma Watson"
// Export this function using module.exports
// In your main file main.js:
// Import both local modules
// Use only string methods (like .toUpperCase(), .charAt(), .length, .slice())
// Display the formatted name, uppercase hobby and hobby length using console.log()
var user_details=require('./userInfo.js');
var user_name_format=require('./formatName.js');
console.log(user_name_format(user_details.user_name));
console.log(user_details.hobby.toUpperCase());
console.log(user_details.hobby.length);

