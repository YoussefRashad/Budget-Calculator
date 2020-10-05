
import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

import './App.css'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')): [];

export default function App() {

  // Hooks
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [budget, setBudget] = useState('')
  const [alert, setAlert] = useState({ show: false })
  const [edit, setEdit] = useState(false)
  const [ID, setID] = useState(0)

  useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses])


  const handleCharge = (e)=> setCharge(e.target.value)
  const handleBudget = (e)=> setBudget(e.target.value)

  const handleSubmit = (e)=>{
    e.preventDefault()
    if( charge !== '' && budget > 0 ){
      if(edit){
        const tempExpenses = expenses.map((item)=>{
          return item.ID === ID ? { ...item, charge, budget } : item
        });
        setExpenses(tempExpenses)
        setEdit(false)
        handleAlert({ type: "success", text: "item edited" });
      }
      else{ 
        const singleExpense = { ID: uuid(), charge, budget}
        setExpenses([...expenses, singleExpense])
        handleAlert({ type: "success", text: "item added" });
      }
      setCharge('')
      setBudget('')
    }else{
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  }

  const handleAlert = ({type, text})=>{
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show: false})
    }, 3000);
  }
  const handleEdit = (ID)=>{
    const expense = expenses.find((item)=> item.ID === ID)
    setCharge(expense.charge)
    setBudget(expense.budget)
    setEdit(true)
    setID(expense.ID)
  }

  const clear = ()=>{
    setExpenses([])
    handleAlert({ type: "danger", text: "all items deleted" });
  }

  const handleDelete = (ID)=>{
    const tempExpenses = expenses.filter(item=> item.ID !== ID)
    setExpenses(tempExpenses)
    handleAlert({ type:'danger', text:'item deleted'})
  }

  return (
    < >
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1> Budget Calculator</h1>

      <main className="App">

        <ExpenseForm
          charge = {charge}
          budget = {budget}
          handleBudget = {handleBudget}
          handleCharge = {handleCharge}
          handleSubmit = {handleSubmit}
          edit={edit}
        />

        <ExpenseList 
          expenses = {expenses} 
          handleEdit = {handleEdit}
          clear = {clear}
          handleDelete = {handleDelete}
        />
        
      </main>

      <h1>
        Total Spending : <span className="total">$ {
          expenses.reduce((acc, curr)=>{
            return acc += parseFloat(curr.budget)
          },0)
        }
        </span>
      </h1>

    </>
  )
}
