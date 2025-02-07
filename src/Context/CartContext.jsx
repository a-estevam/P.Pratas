import React from "react";

const CartContext = React.createContext({
  cart: [],
  addToCart: (product, quantity) => {},
  increment: (product) => {},
  decrement: (product) => {},
});

export const useCart = () => {
  return React.useContext(CartContext);
};

export default CartContext;
