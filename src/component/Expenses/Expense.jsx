import React from 'react'
import { useState } from 'react';
import Card from '../UI/Card';
import Expensive from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import "./expnse.css"


export default function Expense(props) {
  const [year,setyear]=useState('2020')
  const yearFilter=(years)=>{
    setyear(years);
  }
  return (
    
     <Card className='expenses'>
      <ExpensesFilter defaultYear={year} onfiltered={yearFilter}/>
      {props.item.map(expense=><Expensive 
      key={expense.id}
      title={expense.title} 
      amount={expense.amount}
      date={expense.date} />
       )}

      {/* <Expensive
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />

      <Expensive
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />

      <Expensive
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />

      <Expensive
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      /> */}
    </Card>
    
  )
}
