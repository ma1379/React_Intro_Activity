import React, {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.Title);
    function ClickHandler() {
        setTitle('Update');
    }
    return(
    <Card className='expense-item'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={ClickHandler}>Change Title</button>
    </Card>
    );
}
export default ExpenseItem;