import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// the logic for creating a new expense
function NewExpense(props) {
  // define a state that tells us if the user wants to add an expense
  const [isEditing, setIsEditing] = useState(false);

  // receiving an expense from the form created
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // adding and id
    };
    props.onAddExpense(expenseData); // calling the function in the App.js component from here (child component)
    setIsEditing(false); //after calling the function in the app.js setting the state to false since the creation of the expense is over
  };

  // function which sets the isEditing variable to true(is editing)
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // function which sets the isEditing variable to false(is not editing)
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* isEditing = false (not creating an expense)=> we display the button for creating a new expense */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* isEditing = true (we are creating a new expense) =>  we display 2 buttons one for canceling the creation and one for adding the created expense to the list of exepenses */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
