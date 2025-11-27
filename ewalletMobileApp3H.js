// You are helping to design a basic e-wallet feature for a mobile app. The user should be able to add money and spend money. 
// You also want to make sure the system detects if the user is "guest" and prevent them from using the wallet.
//  Your Tasks:
// Create variables to store:
// The user’s name: "Alex"
// The initial balance: 1000
// Amount added: 500
// Amount spent: 700
// Write a function updateWallet() that:
// Accepts the user's name, current balance, amount added, and amount spent
// Returns "Access Denied" if the user is "guest"
// Otherwise, calculates and returns the updated balance
// Print the final balance using the function.
// Print whether the final balance is greater than 0 using a comparison operator.
// Use typeof to confirm the data type of the final balance.

let user_name="Alex";
let init_balance=1000,amount_added=500,amount_spent=700;
function updateWallet(name,curr_bal,amt_add,amt_spent)
{
   let result=(name=="guest")?"Acess Denied":curr_bal+amt_add-amt_spent;
   console.log("Final balance:"+result);
   console.log("Final balance>0:"+(result>0));
   console.log(typeof result);
}
updateWallet(user_name,init_balance,amount_added,amount_spent)