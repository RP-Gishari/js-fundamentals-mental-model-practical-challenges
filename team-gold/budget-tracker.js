
const monthlyBudget = 1000;
const expense = [
  {
    amount: 500,
    category: 'food',
    description: 'lunch',
    date: '2024-08-21',
  },
  {
    amount: 100,
    category: 'transportation',
    description: 'lunch',
    date: '2024-08-21',
  },

  {
    amount: 500,
    category: 'entertainment',
    description: 'entertainment',
    date: '2024-08-21',
  },
];

function addExpense() {
  let total = expense[0].amount + expense[1].amount + expense[2].amount;

  console.log(`This is the total expense amount $${total}`);

  return function calculateRemaining() {
    const remaining = monthlyBudget - total;
    if (remaining > 0) {
      console.log(`Your remaining is $${remaining}`);
    } else {
      console.log('You are out of budget');
    }
  };
}
const exp = addExpense();
exp();
