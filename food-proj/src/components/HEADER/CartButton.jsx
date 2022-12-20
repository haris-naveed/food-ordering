import React, { useContext } from 'react';
import CartIcon from '../CART/CartIcon';
import CartContext from '../../store/CartContext';


const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const TotalNumOfItems= cartCtx.items.reduce((curNUm,item)=>{
    return curNUm+item.amount;
  },0);
  return (
    <button className='p-2 bg-amber-700 text-white  space-x-2 px-6 bg-buttoncolour  w-fit  content-around items-center flex border rounded-lg ' onClick={props.onClick} >
    
      <CartIcon/>
      
        <span> your cart</span>
        <span  className='bg-badgecolour py-1 px-3 '>{TotalNumOfItems}</span>

    </button>
    
  )
}

export default HeaderCartButton