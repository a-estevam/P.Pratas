import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export const useCart = () => {
  return React.useContext(CartContext);
};

export default CartContext;