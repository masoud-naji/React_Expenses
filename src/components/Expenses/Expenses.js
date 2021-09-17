import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const allYears = props.items.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === 2019 || 2020 || 2021 || 2022
    );
  });

  console.log(filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        {filteredYear === "All" ? (
          <section>
            <ExpensesChart expenses={allYears} />
            <ul className="expenses-list">
              {props.items.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))}
            </ul>
          </section>
        ) : (
          <section>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
          </section>
        )}
      </Card>
    </div>
  );
};

export default Expenses;

//old way to map item whitout .map
// <div className='expenses'>
//     test expenses
//     <ExpensItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date} />
//     <ExpensItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date} />
//     <ExpensItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date} />
//     <ExpensItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date} />
// </div>
