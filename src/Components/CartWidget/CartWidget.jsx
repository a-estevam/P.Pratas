import { useContext } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import "./CartWidget.css";
import CartContext from "../../context/CartContext";


const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart">
      <ShoppingCart size={32} />
      <div className="cart_iten">{totalItems}</div>
    </div>
  );
};

export default CartWidget;
