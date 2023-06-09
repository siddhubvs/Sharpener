import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
import { useState } from 'react';
function ExpenseItem(props) {
    const [name,setName]=useState(props.name);
    const [price,setPrice]=useState(props.price);
    const change=()=>{
     setName('Updated');
     setPrice('100');
    }
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails name={name} price={price}/>
      <button onClick={change}>Update Expense</button>
    </Card>
  );
}
