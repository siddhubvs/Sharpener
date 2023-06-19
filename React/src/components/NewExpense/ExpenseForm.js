import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm=()=>{
    
    const [name,setName]=useState('')
    const [price,setPrice]=useState('');
    const [date,setDate]=useState('');

    const nameChangeHandler=(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
        
    }

    const amountChangeHandler=(event)=>{
        console.log(event.target.value);
        setPrice(event.target.value);
    }

    const dateChangeHandler=(event)=>{
        console.log(event.target.value);
        setDate(event.target.value);
    }
    return (<form>
        <div className="new-expense_controls">
            <div className='new-expense__control'>
                <label>Name</label>
                <input type='text' onChange={nameChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-29" onChange={dateChangeHandler}/>
            </div>
        </div><br></br>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;
