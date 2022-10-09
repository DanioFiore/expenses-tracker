import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, {useState} from "react";
import ExpensesChart from "../Chart/ExpensesChart";

const Expenses = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.addExpense(expenseData)
        
    }

    const [filterDate, setFilterDate] = useState('2022');
    const filterChangeHandler = (selectedYear) => {
        setFilterDate(selectedYear)
        
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterDate;
    })

    const [isEditing, setIsEditing] = useState(false)

    const startEditingHandler = (event) => {
        setIsEditing(true);
    }

    const stopEditingHandler = (event) => {
        setIsEditing(false);
    }


    let content = <p style={{textAlign: 'center'}}>No Expenses for this year.</p>
    if(filteredExpenses.length > 0) {
        content = filteredExpenses.map((element) => (<ExpenseItem id={element.id} key={element.id} title={element.title} amount={element.amount} date={element.date} onDelete={props.deleteItem} />))
    }

  

    return (
        <div>
            <div className={`${styles["button__form-container"]}`}>
                <h1 className={`${styles["main-title"]}`}>EXPENSES TRACKER</h1>
                <h6 className={`${styles["main-subtitle"]}`}>Keep tracked your expenses!</h6>
                {!isEditing && <button className={`${styles["new-expense-button"]}`} onClick={startEditingHandler}>Add Expense</button>}
            </div>
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} stopEditing={stopEditingHandler}/>}
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseFilter onFilterChange={filterChangeHandler} startDate={filterDate}/>
            <div className={`${styles["expenses-container"]}`}>
                {content}
            </div>
        </div>

    )
}

export default Expenses;