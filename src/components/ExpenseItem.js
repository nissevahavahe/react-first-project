import './ExpenseItem.css'

function ExpenseItem () {
    const expenseDate = new Date("2023-01-01");
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 300.00;


    return (
        <div className="expense-item">
            <div>J{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;