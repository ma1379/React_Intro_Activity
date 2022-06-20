import React, {useState} from 'react';
import './ExpenseForm.css';


function ExpenseForm(props){

    const[enteredTitle, setEnteredTitle] = useState("");
    const[enteredAmount, setEnteredAmount] = useState("");
    const[enteredDate, setEnteredDate] = useState("");

    function titleChangeHandeler(event){
       setEnteredTitle(event.target.value);
    };

    function amountChangeHandeler(event){
        setEnteredAmount(event.target.value);
     };

     function dateChangeHandeler(event){
        setEnteredDate(event.target.value);
     };
    
    function submitHandler(event){
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    };


    return (
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value = {enteredTitle} onChange ={titleChangeHandeler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value = {enteredAmount} onChange ={amountChangeHandeler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value = {enteredDate} onChange = {dateChangeHandeler}></input>
        </div>
      </div>

      <div className = 'new-expense__actions'>
        <button type = 'submit'>Add Expense</button>
      </div>

</form>

    );

}

export default ExpenseForm;