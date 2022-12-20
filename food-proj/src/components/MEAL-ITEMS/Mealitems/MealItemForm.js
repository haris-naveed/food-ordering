import { useRef,useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
  const[formValid,SetValid]=useState(true);
  const enterAmountInputRef=useRef();

  const formSubmitHandler=(event)=>{
  event.preventDefault();

  const EnteredValue=enterAmountInputRef.current.value;//+esko string sa number mai convert kr de ga
  const ConvertedEnteredValue=+EnteredValue;
  if(ConvertedEnteredValue <0 || ConvertedEnteredValue >5  || EnteredValue.trim().length===0){
  SetValid(false);
  return;
  }
  props.onAddCart(ConvertedEnteredValue);
}
  
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
      ref={enterAmountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!formValid &&<p>please enter valid data 1-5 </p>}
    </form>
  );
};

export default MealItemForm;