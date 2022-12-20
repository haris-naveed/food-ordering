import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/CartContext';
import { useContext } from 'react';

const MealItem = (props) => {
  const Ctxt=useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
const AddItemHandler=(amount)=>{
Ctxt.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price,
})
}
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id}  onAddCart={ AddItemHandler}/>
      </div>
    </li>
  );
};

export default MealItem;