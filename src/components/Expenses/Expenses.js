import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import React, {useState} from "react";

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

    return (
        <div>
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} stopEditing={stopEditingHandler}/>}
            {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
            
            <ExpenseFilter onFilterChange={filterChangeHandler} startDate={filterDate}/>
            <div className="expenses-container">
                {filteredExpenses.map((element) => (<ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />))}
            </div>
        </div>

    )
}

export default Expenses;