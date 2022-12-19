import React ,{useState} from 'react'
import "./expenseForm.css"

export default function ExpenseForm(props) {

//   ye ni likh kr yeh bhi lik skte h 

//   const[userInput,setuserInput]=useState({
//     settitle:'',
//     setamount:'',
//     setdate:''
//   })
   
    // function changeHandle (event){
    //    const{name,value}=event.target;
    //    setuserInput(prevValue=>{
    //     return{
    //         ...prevValue,
    //         [name]:value
    //     }
             
    //    });
    //  }

  const [title,settitle]=useState('');
  const [amount,setamount]=useState('');
  const [date,setdate]=useState('');

  const changeHandletitle=(event)=>{
    console.log("tittle changedd!!")
    settitle(event.target.value);

 }


    

    const changeHandleAmount=(event)=>{
        console.log("tittle changedd!!")
        setamount(event.target.value);
 
     }

     const changeHandleDate=(event)=>{
        console.log("tittle changedd!!")
        setdate(event.target.value);
 
     }

     const submitHandle=(event)=>{
       event.preventDefault()
       const expenseData={
          title:title,
          amount:amount,
          date:new Date(date)

       }
       props.onSaveExpenseData(expenseData);
       //console.log(expenseData);
       settitle("");
       setamount("");
       setdate("");


    }
  return (

    <form onSubmit={submitHandle}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type="text" 
            name='settitle' 
            // onChange={changeHandle} 
            //value={userInput.settitle}
            value={title}
            onChange={changeHandletitle}
          
            >
                
            </input>
        </div>

        <div className='new-expense__control'>
            <label>Amount</label>
            <input type="number" min='0,01' step="0.01" 
            name='setamount'
             //onChange={changeHandle } 
             //value={userInput.setamount} 
             value={amount}
             onChange={changeHandleAmount}
          
             ></input>
        </div>


        <div className='new-expense__control'>
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" 
             name='setdate' 
           // onChange={changeHandle} 
           //value={userInput.setdate}
           value={date}
           onChange={changeHandleDate}
         
            ></input>
        </div>
        </div>
    
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
        
    </form>
  )
}
