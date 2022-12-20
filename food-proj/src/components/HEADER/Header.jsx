import React, { useEffect } from 'react';

import CartButton from '../HEADER/CartButton';
import {useSelector,useDispatch} from 'react-redux';
import { Button } from '@mui/material';

const Header = (props) => {

    // const dispatch=useDispatch();
    const data=useSelector((state)=>state.getAllPizzaReducer.pizzas);
    const datas=useSelector((state)=>state);


    useEffect(() => {
        if(data)
      console.log(data,datas)
    }, [data,datas])

    const Logout=()=>{
        console.log("i am clicked");

       props.dispatch({type:'LOGOUT'});

    }
    
    return (
        <div>
            <header  className='  z-10  flex text-white font-bold text-xl py-2 gap-10 bg-headercolour ' >
            <Button sx={{color:"white",fontSize:"20px"}} variant="h2">REACT MEAL</Button>
                <Button sx={{color:"white",fontSize:"20px"}} variant="h2">HOME</Button>
                <Button sx={{color:"white",fontSize:"20px"}} onClick={Logout} variant="h2">LOGOUT</Button>

                {/* <a href="#"> log in </a>
                <a href="#"> Register </a> */}
                <CartButton onClick={props.onShowCart} />
              
            </header>

            {/* <div className='  z-0 overflow-hidden w-full h-96 '  >
                <img  className=' object-cover   w-full h-full transform -rotate-1  -translate-y-4 -translate-x-1  ' src={mealimage} alt="" />
            </div> */}

        </div>

 

    )
}

export default Header;