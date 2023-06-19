import './ExpenseItem.css';

function ExpenseDetails(props){
    return (
          <div className='expense-item__description'>
            <h2>{props.name}</h2>
            <div className='expense-item__price'>${props.price}</div>
          </div>
        
      );
}
export default ExpenseDetails;