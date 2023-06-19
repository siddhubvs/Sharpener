import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  /*const [userInput,setUserInput]=useState({
        name:'',
        price:'',
        date:''
    })*/
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const dateChangeHandler=(event)=>{
    setDate(event.target.value);
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
        name:name,
        price:price,
        date:new Date(date)
    }

    console.log(expenseData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-29"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <br></br>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
