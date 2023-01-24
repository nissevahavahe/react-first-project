import React, {useState} from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/newExpense';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date("2023-01-12"),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2023-01-01") },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 300.00,
    date: new Date("2022-07-14"),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date("2022-05-12"),
  },
];

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = expense => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });

  }

  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
        <p>Nils Vähä-Vahe / VAMK / BIT</p>
      </div>
  );
}

export default App;
