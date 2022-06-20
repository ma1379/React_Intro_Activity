import React, {useState} from 'react';
import "./Expenses.css";
import Card from './Card.js';
import ExpenseFilter from './NewExpense/ExpensesFilter';
import ExpenseList from './ExpenseList';

function Expenses(props) {
    const[filteredYear,setFilteredYear]=useState("2020");
    function filterChangeHandler(selectedYear){
       setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });
    return (
     <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpenseFilter>
        <ExpenseList items={filteredExpenses}></ExpenseList>

     </Card>
    );
}

export default Expenses;