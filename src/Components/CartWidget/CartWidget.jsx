import { useContext } from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import "./CartWidget.css";
import CartContext from "../../Context/CartContext.jsx";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);


  return (
    <Link to="/cartView">
      <div className="cart">
        <ShoppingCart size={32} />
        <div className="cart_item">{totalItems}</div>
      </div>
    </Link>
  );
};

export default CartWidget;
