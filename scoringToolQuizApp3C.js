// You're building a simple scoring tool for a quiz app. Each student earns points for correct answers and loses points for wrong answers.
// Scoring Rules:

// 4 points for each correct answer
// -1 point for each wrong answer

// If the student’s name is "Unknown", the system should return "Invalid Student"
// Your Tasks:
// Store the following in variables:
// Student name: "Rahul"
// Correct answers: 4
// Wrong answers: 1
// Write a function getFinalScore() that:
// Accepts name, correct, and wrong as parameters
// Uses a ternary operator to:
// Return "Invalid Student" if name is "Unknown"
// Otherwise, return the score calculated by (correct * 4) - (wrong * 1)
// Call the function and print the result.
// Use typeof to print the type of the result.
let student_name="Rahul";
let correct_ans=4,wrong_ans=1;
function getFinalScore(name,cAns,wAns)
{
   let  result=(name==="Unknown")?"Invalid Student":(cAns*4)-(wAns*1)
   console.log("Result:"+result);
   console.log(typeof result);
}
getFinalScore(student_name,correct_ans,wrong_ans);
