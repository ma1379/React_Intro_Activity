import React, {useState} from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import ExpensesFilter from './newExpense/ExpensesFilter.js';
import Card from './Card.js';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2021");
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
        <ExpenseList
          items={filteredExpenses}
        ></ExpenseList>
      ))}
    </Card>
  );
}
export default Expenses;