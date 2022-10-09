import styles from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {

    const dropdownChangeHandler = (event) => {
        const filteredYear = event.target.value;
        props.onFilterChange(filteredYear);
    } 
    return (
        <div className={`${styles['expenses-filter']}`}>
            <div>
                <label>Filter by year</label>
                <select className={styles.select} onChange={dropdownChangeHandler} value={props.startDate}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;