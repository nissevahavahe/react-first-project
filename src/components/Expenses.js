import './Expenses.css'
import ExpenseItem from './ExpenseItem.js';
import Card from './Card';
const Expenses = (props) =>{

    const object = props.expenses.map((items, index) =>(
        <ExpenseItem
            key={index}
            title={items.title}
            amount={items.amount}
            date={items.date}/>

    ))
    
    return(
        <Card className="expenses">
            {object}
        </Card>
    )
}
export default Expenses