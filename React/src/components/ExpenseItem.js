import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div>
      <div className="expense-item h2">Expense Item</div>
      <div className="expense-item">
        <div className="expense-item h2">{props.name}</div>
        <div className="expense-item__price ">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
