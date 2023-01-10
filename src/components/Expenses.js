import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
function Expenses(props){

    const object = props.expenses.map((items, index) =>(
        <ExpenseItem
            key={index}
            title={items.title}
            amount={items.amount}
            date={items.date}/>

    ))
    
    return(
        <div className="expenses">
            {object}
        </div>
    )
}
export default Expenses