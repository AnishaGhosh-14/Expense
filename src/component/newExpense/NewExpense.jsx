import React from 'react'
import "./NewExpense.css"

import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {

  const saveExpenseDataHandler=(prevValue)=>{
      const expenseData={
           ...prevValue,
           id:Math.random.toString()
      };
      //console.log(expenseData);
      props.onChangeHandler(expenseData);
  }
  return (

    <div className='new-expense'>
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}
