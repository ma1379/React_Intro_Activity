import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card.js";
import ExpensesFilter from "./newExpense/ExpensesFilter.js";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(selectedYear) {
      setFilteredYear(selectedYear);
    }

    return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}></ExpensesFilter>
      {props.items.map((expensesElement) => (
        <ExpenseItem
          key={expensesElement.id}
          title={expensesElement.title}
          amount={expensesElement.amount}
          date={expensesElement.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;