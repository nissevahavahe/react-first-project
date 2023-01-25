import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(item  => 
        item.date.getFullYear().toString() === filteredYear );
    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={props.selected} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList expenses={filteredExpenses}/>
        </Card>
    )
}
export default Expenses







               /* {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
        ) : (
            filteredExpenses.map((items, index) =>(
                <ExpenseItem
                    key={items.id}
                    title={items.title}
                    amount={items.amount}
                    date={items.date}/>
                ))
        )}     */
    
    /* {
    filteredExpenses.length === 0 && <p>No expenses found.</p>    
    } */
    /* {
    filteredExpenses.length > 0 && 
    filteredExpenses.map((items, index) =>(
        <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date}/>
        ))
    } */