import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';
import ExpensesFilter from './newExpense/ExpensesFilter.js';
import Card from './Card.js';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    function filterChangeHandler(selectedYear) {
      setFilteredYear(filteredYear);
    }
    const filteredExpenses = props.items.filter(expenses =>{
      return expenses.date.getFullYear().toString() === filteredYear;
    });
  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear}></ExpensesFilter>
      {filteredExpenses.map((expensesElement) => (
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