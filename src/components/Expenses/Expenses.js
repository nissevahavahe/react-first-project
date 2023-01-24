import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) =>{

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter(item  => 
        item.date.getFullYear().toString() === filteredYear );
    
    let expenseContent = <p>No expenses found.</p>
    
    if(filteredExpenses.length > 0){
        expenseContent  = filteredExpenses.map((items, index) =>(
            <ExpenseItem
                key={items.id}
                title={items.title}
                amount={items.amount}
                date={items.date}/>
            ))
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected={props.selected} onChangeFilter={filterChangeHandler} />
               {/* {filteredExpenses.length === 0 ? (
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
        }
        {/* {
        filteredExpenses.length === 0 && <p>No expenses found.</p>    
        } */}
        {/* {
        filteredExpenses.length > 0 && 
        filteredExpenses.map((items, index) =>(
            <ExpenseItem
                key={items.id}
                title={items.title}
                amount={items.amount}
                date={items.date}/>
            ))
        } */}
        {expenseContent}
        </Card>
    )
}
export default Expenses