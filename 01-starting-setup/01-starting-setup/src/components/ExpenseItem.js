import React from 'react';
import "./ExpenseItem.css"

function ExpenseItem() {
    return (
    <div className='expense-item'>
        <div>June 10th 2022</div>
        <div className='expense-item__description'>
            <h2>Expense Item!</h2>
            <div className='expense-item_price'>$294.67</div>
        </div>
    </div>
    );
}

export default ExpenseItem;