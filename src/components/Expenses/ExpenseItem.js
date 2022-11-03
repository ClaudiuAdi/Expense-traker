import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        {/* send data to the child component(ExpenseItem) */}
        <ExpenseDate date={props.date} />
        {/* display the data received from the parent component(ExpensesList) */}
        <h2>{props.title}</h2>
        <div className="expense-item__desciption">
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
