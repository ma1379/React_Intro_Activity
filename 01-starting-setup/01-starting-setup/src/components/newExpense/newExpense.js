import React from 'react';
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm.js"

function newExpense(props) {
    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className = 'new-expense'>
            <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default newExpense;