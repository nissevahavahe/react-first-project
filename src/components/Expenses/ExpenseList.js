import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
    
    if(props.expenses.length === 0){
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return <ul className="expenses-list"> 
        {props.expenses.map((items) =>(
            <ExpenseItem
                key={items.id}
                title={items.title}
                amount={items.amount}
                date={items.date}/>
            ))}
        </ul>
};


export default ExpenseList;