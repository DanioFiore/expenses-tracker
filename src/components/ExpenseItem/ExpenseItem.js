import styles from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
    return (
        <div className={`${styles["item-container"]}`}>
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
    );
}

export default ExpenseItem;