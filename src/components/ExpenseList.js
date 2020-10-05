import React from 'react'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = ({expenses, handleEdit, handleDelete, clear}) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense)=>{
                    return(
                        <ExpenseItem
                            key={expense.ID}
                            expense={expense} 
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    );
                    })
                }
            </ul>
            {expenses.length > 0 && (
                <button className="btn" onClick={clear}>
                    Clear Expenses
                </button>
            )}
            
        </>
    )
}

export default ExpenseList;
