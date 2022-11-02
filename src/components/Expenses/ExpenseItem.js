import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// using state
function ExpenseItem(props) {
  console.log("Expense item evaluated by react");

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__desciption">
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
