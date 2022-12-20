export const getAllPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZA_REQ":
      return {...state,};
      case "GET_PIZZA_SUCCESS":return{
        pizzas:action.payload
      }
      case "GET_PIZZA_FAILED":return{
        error:action.payload
      }
      default:{
        return state
      }
  }
};
