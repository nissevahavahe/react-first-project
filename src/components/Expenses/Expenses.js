import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(item  => 
        item.date.getFullYear().toString() === filteredYear );
    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={props.selected} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((items, index) =>(
        <ExpenseItem
            key={items.id}
            title={items.title}
            amount={items.amount}
            date={items.date}/>
        ))}
        </Card>
    )
}
export default Expenses