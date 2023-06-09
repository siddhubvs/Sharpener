import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
import ExpenseDetails from './ExpenseDetails';
function ExpenseItem(props) {
    const deleteExpense=()=>{}
    return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails name={props.name} price={props.price}/>
      <button onClick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
