import React ,{useState} from 'react'
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';
export default function ExpenseItem(props) {
    // const expDate = new Date(2022, 5, 16);
    // const expdiscp='car insurence';
    // const expprice= 900.89;

    
    const[title,settitle]=useState(props.title);
   const clickhandler=()=>{
    //console.log("hfjf");
    settitle("updated")
   }

  return (
    <>
      <Card className='expense-item'>
        {/* <div>{props.date.toISOString()}</div> */}
        <ExpenseDate date ={props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        
        <div className='expense-item__price'>{props.amount}</div>
        {/* <button onClick={clickhandler}>button</button> */}
        </div>
      </Card>
    </>
  )
}
