import { shoeArr } from "../data";
import { ADD, DELETE } from "./constant";

// rxreducer
const initialState = {
  shoeArr: shoeArr,
  cart: [],
};

export let shoeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD: {
      let cloneCart = [...state.cart];

      let idx = cloneCart.findIndex(item => item.id === payload.id);
      if (idx === -1) {
        let newShoe = { ...payload, soLuong: 1 };
        cloneCart.push(newShoe);
      } else {
        cloneCart[idx].soLuong += 1;
      }
      state.cart = cloneCart;
      return { ...state };
    }
    case DELETE: {
      let newCart = state.cart.filter(item => item.id !== payload);
      state.cart = newCart;
      return { ...state };
      // return { ...state, cart: newCArt };
    }
    default:
      return state;
  }
};
