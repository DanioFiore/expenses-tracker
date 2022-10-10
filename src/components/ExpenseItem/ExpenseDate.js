import React from "react";
import styles from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <React.Fragment>
            <div className={`${styles["date-container"]}`}>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
        </React.Fragment>
    );
}

export default ExpenseDate;