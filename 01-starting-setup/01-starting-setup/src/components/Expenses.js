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
    
  return (
    <Card className='expenses'>
      <ExpensesFilter onFilterChange={filterChangeHandler} selected={filteredYear}></ExpensesFilter>
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