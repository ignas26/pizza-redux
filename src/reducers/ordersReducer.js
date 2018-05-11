const ordersReducer = (state = [], action) => {
  console.log(action, 'inside orders reducer');
  switch (action.type){
    case 'ADD_PIZZA' :
      return [...state, action.payload];
    case 'ADD_DRINK' :
      return [...state, action.payload];
    default : return state
  }
};

export default ordersReducer