import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData){
  const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
  }
  props.onAddExpense(expenseData);
  console.log(expenseData)
  }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}
export default NewExpense;