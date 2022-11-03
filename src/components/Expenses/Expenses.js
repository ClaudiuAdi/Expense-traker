import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

// Receiving and sending date to another component
function Expenses(props) {
  // year by whom we display the expenses
  const [filteredYear, setFilteredYear] = useState("2021");

  // function that changes the year from the choice made in the child component(ExpensesFilter)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // filters the expenses by year
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* Show something in case the list is clear */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
