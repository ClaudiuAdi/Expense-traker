import React from "react";
import "./ExpenseDate.css";

// Receving data from another component
function ExpenseDate(props) {
  const monthYear = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthYear}</div>
      <div lassName="expense-date__year">{year}</div>
      <div lassName="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
