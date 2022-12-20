import React, { useReducer } from 'react'
import CartContext from './CartContext'; 
const DefaultState={
  items:[],
  totalAmount:0

}
 const reducer=(state,action)=>{
if(action.type==='ADD'){
  const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);//ye true de ga agar item ho agr na ho to false ye eke function hai
 
 let updatedItems;

 const existingItem=state.items[existingCartItemIndex];//item ko find kiya
 
  if(existingItem){
  const updatedItem={...existingItem,
      amount:existingItem.amount+action.item.amount
  };//agar to wo hai to srf amount ko chnge kre bus kis s ko nai
  updatedItems=[...state.items];
  updatedItems[existingCartItemIndex]=updatedItem;//old state new state add kr de hai

  }
  else{
    updatedItems=state.items.concat(action.item);
  }
  const afterAddingItemAmount=state.totalAmount+action.item.price*action.item.amount;
  return({
    items:updatedItems,
    totalAmount:afterAddingItemAmount
  })
}
if(action.type==='REMOVE')
{
  const existingCartItemIndex=state.items.findIndex((item)=>item.id=== action.id);
  const existingItem=state.item[existingCartItemIndex];
  const updatedtotalAmount=state.totalAmount-existingItem.price;
  let updatedItems;
  if(updatedtotalAmount===1)
  {
    updatedItems=state.items.filter(item=>item.id!==state.id);
  }else
  {
     updatedItems=[...state.item];
    const updatedItem=[{...existingItem,amount:existingItem.amount-1}]
    updatedItems[existingCartItemIndex]=updatedItem;//override ye add kr diya hai
  }
 
  return{
    items:updatedItems,
    totalAmount:updatedtotalAmount,

  }
  
}
return DefaultState;
}

const CartProvider = (props) => {
 const [NewState,dispatch]=useReducer(reducer,DefaultState);
 

   const addItemHandler=(item)=>{
  dispatch({type:'ADD',item:item})
   }
   const removeItemHandler=(id)=>{
    dispatch({type:'REMOVE',id:id})
   }
    const CartCtxt={
        items:NewState.items,//yaha ju, na wo updated values assign kr de hai
        totalAmount:NewState.totalAmount,
        removeItem:removeItemHandler,
        addItem:addItemHandler,
    };

  return (
    <CartContext.Provider value={CartCtxt}>{props.children}</CartContext.Provider>
  );
}

export default CartProvider