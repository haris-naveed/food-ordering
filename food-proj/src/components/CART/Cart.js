
import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/CartContext';
import CartItem from '../CART/CartItem'
const Cart = (props) => {
  const ctxt = useContext(CartContext);
  const totalAmount = ctxt.totalAmount.toFixed(2);
  const isEmpty = ctxt.items.length > 0;
  const cartItemAddHandler = (item) => {
    ctxt.addItem({ ...item, amount: 1 });
  }
  const cartItemRemoveHandler = (id) => {
    ctxt.removeItem(id);

  }
  const cartItems = <ul className={classes['cart-items']}>{ctxt.items.map((item) =>
    <li><CartItem
      key={item.id}
      price={item.price}
      name={item.name}
      amount={item.amount}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}

    />

    </li>)}

  </ul>;
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
        {isEmpty && <button className={classes.button}>order</button>}
      </div>
    </Modal>

  );
}

export default Cart;