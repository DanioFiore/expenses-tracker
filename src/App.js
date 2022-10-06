import './App.css';
import Expenses from './components/Expenses/Expenses';
import React, {useState} from 'react';

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94,
      date: new Date(2021, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799, 
      date: new Date(2021, 7, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294,
      date: new Date(2022, 6, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e5',
      title: 'Iphone 14',
      amount: 800,
      date: new Date(2021, 9, 10),
    },
    {
      id: 'e6',
      title: 'Diary',
      amount: 10,
      date: new Date(2021, 4, 11),
    },
    {
      id: 'e7',
      title: 'Crypto investment',
      amount: 200,
      date: new Date(2022, 4, 20),
    },
    {
      id: 'e8',
      title: 'Restaurant',
      amount: 100,
      date: new Date(2022, 8, 19)
    },
    {
      id: 'e9',
      title: 'Presents',
      amount: 130,
      date: new Date(2021, 11, 22),
    },
    {
      id: 'e10',
      title: 'jewellery',
      amount: 50,
      date: new Date(2022, 10, 10),
    },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <Expenses items={expenses} addExpense={addExpenseHandler} />
    </div>
  );
}

export default App;
