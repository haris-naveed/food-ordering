import axios from 'axios';
// action ka nader action dispacth kra h to thunk use krte hai
 const getAllPizza=()=>async(dispatch)=>{ //ye ek action bnay hai hum na

    dispatch({type:'GET_PIZZA_REQ'});//YE REDUCOR KALIYE ACTION HIA
    try{
     const {data}=await axios.get('http://localhost:8000/api');
    
    //  console.log(data);
     dispatch({type:'GET_PIZZA_SUCCESS',payload:data});
    }catch(error){
        dispatch({type:'GET_PIZZA_FAILED',payload:error});

    }
}
export default getAllPizza;