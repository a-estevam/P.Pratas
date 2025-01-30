import { useState } from "react";
import ItemDaLista from "../Components/ItemDaLista/ItemDaLista";


const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    return(
        <>
            <CartContext.Provider value={[]}>
                <ItemDaLista/>
            </CartContext.Provider>
        </>
    )
}

export default CartProvider