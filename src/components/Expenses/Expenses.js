import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) =>{

    const object = props.expenses.map((items, index) =>(
        <ExpenseItem
            key={index}
            title={items.title}
            amount={items.amount}
            date={items.date}/>

    ))
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        //console.log('Expenses.js')
        //console.log(selectedYear);
        setFilteredYear(selectedYear)
    }
    
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {object}
        </Card>
    )
}
export default Expenses