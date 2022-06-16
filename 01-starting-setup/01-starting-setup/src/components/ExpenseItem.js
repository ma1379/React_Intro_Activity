import React from 'react';
import "./ExpenseItem.css";

function ExpenseItem(){
    return (
             <div className='expensive-item' >
                <div>June 10th 2022</div>
             <div className='expensive-item__description'><h2>Car Insurance</h2>
             <div className='expensive-item__price'>$294.67</div>
             </div>
             </div>

    );
}

export default ExpenseItem;