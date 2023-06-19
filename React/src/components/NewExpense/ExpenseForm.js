import './ExpenseForm.css'

const ExpenseForm=()=>{
    
    const inputChangeHandler=(event)=>{
        console.log(event.target.value);
    }
    return (<form>
        <div className="new-expense_controls">
            <div className='new-expense__control'>
                <label>Name</label>
                <input type='text' onChange={inputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' min="0.01" step="0.01" onChange={inputChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-29" onChange={inputChangeHandler}/>
            </div>
        </div><br></br>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}
export default ExpenseForm;