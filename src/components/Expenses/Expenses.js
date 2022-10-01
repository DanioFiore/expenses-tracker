import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const Expenses = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.addExpense(expenseData)
        
    }

    return (
        <div>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
            <div className="expenses-container">
                {props.items.map((element) => (<ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date.getFullYear()} />))}
            </div>
        </div>

    )
}

export default Expenses;