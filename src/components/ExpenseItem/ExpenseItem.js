import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";
import React from "react";

const ExpenseItem = (props) => {
    
    const deleteHandler = (event) => {
        props.onDelete(props.id)
    }
   
    return (
        <React.Fragment>
            <div className={`${styles["item-button-container"]}`}>
                <div onClick={deleteHandler} className={`${styles["item-container"]}`}>
                    <div>
                        <ExpenseDate date={props.date} />
                    </div>
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                    <div>
                        <p>{props.amount}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ExpenseItem;