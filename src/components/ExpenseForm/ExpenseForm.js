import styles from "./ExpenseForm.module.css";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
    const titleInputRef = useRef();
    const amountInputRef = useRef();
    const dateInputRef = useRef();

    const [isValid, setIsValid] = useState(true)
    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null);
    }

    const submitNewExpenseHandler = (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredAmount = amountInputRef.current.value;
        const enteredDate = dateInputRef.current.value;

        if (enteredTitle.trim().length === 0 || enteredAmount.trim().length === 0 || enteredDate.trim().length === 0) {
            setIsValid(false);
            setError({
                title:'An error occured!', 
                message:'Title, Amount and Date input are REQUIRED!',
            })
            return;
        }

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData)
        titleInputRef.current.value = '';
		amountInputRef.current.value = '';
		dateInputRef.current.value = '';
        setIsValid(true);
    }

    return (
        <React.Fragment>
            {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <div className={`${styles["form-container"]} ${!isValid && styles.invalid}`}>
                <form onSubmit={submitNewExpenseHandler}>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Title</label>
                        <input type="text" className={`${styles["input-form"]}`} ref={titleInputRef} />
                    </div>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" className={`${styles["input-form"]}`} ref={amountInputRef} />
                    </div>
                    <div className={`${styles["input-form__container"]}`}>
                        <label>Date</label>
                        <input type="date" className={`${styles["input-form"]}`} min="2019-01-01" max="2022-12-31" ref={dateInputRef} />
                    </div>
                    <div className={`${styles["button-form__submit"]}`}>
                        <Button className={`${styles['submit-button']}`} type='submit'>Submit</Button>
                        <Button className={`${styles['cancel-button']}`} onClick={props.stopEditing}>Cancel</Button>
                    </div>
                </form>
            </div>
        </React.Fragment>

    );
}

export default ExpenseForm;

