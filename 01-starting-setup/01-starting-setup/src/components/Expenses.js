import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from './Card.js';
import ExpenseFilter from "./newExpense/ExpensesFilter.js";


function Expenses (props){
    const[filteredYear , setFilteredYear] = useState("2020");
    function filterChangeHandler (selectedYear){
        setFilteredYear(selectedYear);
    }
    
    const filteredExpenses = props.items.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });

    return (
 <Card className = "expenses">
    <ExpenseFilter selected = {filteredYear} onFilterChange ={filterChangeHandler}></ExpenseFilter>
    {filteredExpenses.map((expensesElement) => (
        <ExpenseItem
          key = {expensesElement.id}
          title={expensesElement.title}
          amount={expensesElement.amount}
          date={expensesElement.date}
        ></ExpenseItem>
      ))}
 </Card>
   
   );
}

export default Expenses;