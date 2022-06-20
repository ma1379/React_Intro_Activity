import React, { useState } from 'react';
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm.js"

function newExpense(props) {
    const [isEditing, setIsEditing] = useState(false);
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    function startEditingHandler() {
        setIsEditing(true);
    }
    function stopEditingHandler() {
        setIsEditing(false);
      }
    return (
        <div className='new-expense'>
            {isEditing === false && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>
        </div>
    );
}
export default newExpense;