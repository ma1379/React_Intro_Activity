import React from 'react';
import "./newExpense.css";
import ExpenseForm from "./ExpenseForm.js"

function newExpense() {
    return (
        <div className = 'new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>
    );
}
export default newExpense;