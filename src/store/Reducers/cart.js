const initialState = {
  carts: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      //state.carts.map(value => ({...value}));
      const newCart = state.carts.map(value => ({...value}));
      const item = action.payload.item;

      var check = newCart
        .map((itcart) => itcart.id)
        .indexOf(parseInt(`${item.id}`));
      if (check === -1) {
        newCart.push(item);
      } else {
        newCart[check].amount += parseInt(item.amount);
      }

      console.log(newCart);

      return { ...state, carts: newCart };
    }
    default:
      return state;
  }
};
