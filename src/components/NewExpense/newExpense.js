import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isHidden, setIsHidden] = useState(true);
    const isHiddenHandler = () => {
        setIsHidden(hidden => !hidden)
        console.log(isHidden)
    }

    const SaveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData ={
            ...enteredExpenseData,
            id : Math.random().toString
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {isHidden  ? 
                <button onClick={isHiddenHandler}>Add new expense</button>
            : 
                <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} isHidden={isHiddenHandler}/>
            }
        </div>
    );
};

export default NewExpense;