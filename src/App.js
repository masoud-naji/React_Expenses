import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/NewExpense";
import { useState } from "react";
import React from "react";
const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Laptop",
    amount: 2450,
    date: new Date(2019, 9, 14),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpensHandler = (expense) => {
    setExpenses((prevEpenses) => {
      return [expense, ...prevEpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onAddExpense={addExpensHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
