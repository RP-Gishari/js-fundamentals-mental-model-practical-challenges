
// // 1. VARIABLES & SCOPE: Track budget data safely
// let monthlyBudget = 2000;
// const categories = ['food', 'transportation', 'entertainment'];
// // Challenge: Prevent accidental budget overwrites

const { Contact } = require("lucide-react");



// // 2. FUNCTIONS: Core budget operations
// function addExpense(amount, category, description) {}
// function calculateRemaining() {}
// function getExpensesByCategory(category) {}



 let monthlyBudget = 2000;



 const categories = ['food', 'transportation', 'entertainment'];




const expense = [{
    amount: 500,
    category: 'food',
    description: 'lunch',
    date: '2024-08-21'

}, 
{
    amount: 100,
    category: 'transportation',
    description: 'lunch',
    date: '2024-08-21'
},

{
    amount: 500,
    category: 'food',
    description: 'entertainment',
    date: '2024-08-21'
}

]
function addExpense() {
    
        let  total =  expense[0].amount + expense[1].amount + expense[2].amount 

   return function calculateRemaining() {
const remaining = monthlyBudget - total

}
 }
const exp = addExpense()

console.log(exp())




















