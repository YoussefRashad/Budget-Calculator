import React from 'react'
import { MdSend } from 'react-icons/md'

export const ExpenseForm = ({charge, budget, handleBudget, handleCharge, handleSubmit, edit}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="charge">Charge</label>
                        <input 
                            type="text"
                            name="charge"
                            id="charge"
                            className="form-control"
                            value={charge}
                            onChange={handleCharge}
                            placeholder="e.g. rent"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">Budget</label>
                        <input 
                            name="budget"
                            id="budget"
                            className="form-control"
                            value={budget}
                            onChange={handleBudget}
                            placeholder="e.g. 100"
                        />
                    </div>
                </div>
                <button className="btn">
                    {edit ? 'edit' : 'submit'}
                    <MdSend className="btn-icon"/>
                </button>
            </form>
        </>
    )
}

export default ExpenseForm;
