import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <div className="item-container">
            <div>
                <h2>{props.date}</h2>
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