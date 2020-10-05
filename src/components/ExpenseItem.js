import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{expense.charge}</span>
                <span className="amount">${expense.budget}</span>
            </div>
            <div>
                <button 
                    className="edit-btn"
                    aria-label="edit button"
                    onClick={()=>handleEdit(expense.ID)}
                >
                    <MdEdit />
                </button>

                <button 
                    className="clear-btn"
                    aria-label="clear button"
                    onClick={()=>handleDelete(expense.ID)}
                >
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem;