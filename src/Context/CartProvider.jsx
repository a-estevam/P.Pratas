import { useState } from "react";
import CartContext from "./CartContext"

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (product, quantity) => {
        setCart((prevCart) => [
          ...prevCart,
          { ...product, quantity },
        ]);

    //pegar o ID
    //pegar o produto
    //pegar a quantidade
    //pegar o valor
    

    }
  

    return(
        <CartContext.Provider>
            {children}
        </CartContext.Provider>

    )
}

export const useCart = () => useContext(CartContext);