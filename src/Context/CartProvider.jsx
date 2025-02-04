import { useState, useContext } from "react";
import CartContext from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });

    setAmount((prevAmount) => prevAmount + quantity);
  };

  const increment = (product) => {
    if (amount >= product.stock) {
      alert(`A quantidade do estoque é de ${product.stock} peças`);
    } else {
      setAmount((prevAmount) => prevAmount + 1);
      addToCart(product, 1);
    }
  };

  const decrement = (product) => {
    if (amount > 0) {
      setAmount((prevAmount) => prevAmount - 1);
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return updatedCart.filter((item) => item.quantity > 0);
      });
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, amount, increment, decrement }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);