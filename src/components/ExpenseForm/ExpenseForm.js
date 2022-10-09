import styles from "./ExpenseForm.module.css";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

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

    const [isValid, setIsValid] = useState(true)
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const submitNewExpenseHandler = (event) => {
        event.preventDefault();
        if (titleInput.trim().length === 0 || amountInput.trim().length === 0 || dateInput.trim().length === 0) {
            setIsValid(false);
            setError({
                title:'An error occured!', 
                message:'Title, Amount and Date input are REQUIRED!',
            })
            return;
        }

        const expenseData = {
            title: titleInput,
            amount: +amountInput,
            date: new Date(dateInput),
        }
        props.onSaveExpenseData(expenseData)
        setTitleInput('')
        setAmountInput('')
        setDateInput('')

        setIsValid(true);
    }

    return (
        <div>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <div className={`${styles["form-container"]} ${!isValid && styles.invalid}`}>
                <form onSubmit={submitNewExpenseHandler}>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Title</label>
                        <input type="text" className={`${styles["input-form"]}`} value={titleInput} onChange={inputTitleChangeHandler} />
                    </div>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" className={`${styles["input-form"]}`} value={amountInput} onChange={inputAmountChangeHandler} />
                    </div>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Date</label>
                        <input type="date" className={`${styles["input-form"]}`} value={dateInput} min="2019-01-01" max="2022-12-31" onChange={inputDateChangeHandler} />
                    </div>
                    <div className={`${styles["button-form__submit"]}`}>
                        <button className="submit-button" type="submit">Submit</button>
                        <button className="cancel-button" type="button" onClick={props.stopEditing}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ExpenseForm;