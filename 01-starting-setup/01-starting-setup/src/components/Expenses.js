import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card.js.js.js"
import ExpensesFilter from './newExpense/ExpensesFilter';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020")
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expenses =>{
        return expenses.date.getFullYear().toString() === filteredYear;
      });    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
            {filteredExpenses.map((expensesElement) => (
                <ExpenseItem
                    key = {expensesElement.id}
                    title={expensesElement.title}
                    amount={expensesElement.amount}
                    date={expensesElement.date}
                ></ExpenseItem>
            ))}
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </Card>
    );
}
export default Expenses;