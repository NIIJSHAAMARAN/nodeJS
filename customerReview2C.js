// A local cafe wants to create a basic program to manage customer reviews. Each review includes the customer's name and their comment. Your task is to:

// Tasks:

// Store a customer's name and review comment as separate values.
// Create a JavaScript object with name and comment properties to represent the review.
// Write a function that takes the review object as input and prints a thank-you message, including the customer's name in uppercase and only the first 20 characters of the comment.
// Use appropriate string methods to format the name and comment as specified.
// Call the function with the review object in the main program and display the output.

let review={name:"Ramu",Comment:"Good Service,Quality food,Affordable price"}
function display(customer)
{
    console.log(customer.name.toUpperCase()+" "+"Thank you for your feedback"+" "+customer.Comment.slice(0,21))

}
display(review)