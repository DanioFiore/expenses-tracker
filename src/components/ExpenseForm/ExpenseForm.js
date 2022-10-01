import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
    const [titleInput, setTitleInput] = useState('')
    const inputTitleChangeHandler = (event) => {
        setTitleInput(event.target.value);
    }

    const [amountInput, setAmountInput] = useState('')
    const inputAmountChangeHandler = (event) => {
        setAmountInput(event.target.value);
    }

    const [dateInput, setDateInput] = useState('')
    const inputDateChangeHandler = (event) => {
        setDateInput(event.target.value);
    }

    const submitNewExpenseHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: titleInput,
            amount: amountInput,
            date: new Date(dateInput),
        }
        props.onSaveExpenseData(expenseData)
        setTitleInput('')
        setAmountInput('')
        setDateInput('')
    }

    return (
        <div className="form-container">
            <form onSubmit={submitNewExpenseHandler}>
                <div className="input-form__container">
                    <label>Title</label>
                    <input type="text" className="input-form" value={titleInput} onChange={inputTitleChangeHandler} />
                </div>
                <div className="input-form__container">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" className="input-form" value={amountInput} onChange={inputAmountChangeHandler} />
                </div>
                <div className="input-form__container">
                    <label>Date</label>
                    <input type="date" className="input-form" value={dateInput} onChange={inputDateChangeHandler} />
                </div>
                <div className="button-form__submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;