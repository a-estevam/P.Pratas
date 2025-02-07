import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import "./CartView.css";

const CartView = () => {
  const { cart, increment, decrement } = useContext(CartContext);

  // Cálculo do total considerando preço e quantidade
  const totalPrice = cart.reduce(
    (total, item) =>
      total + (parseFloat(item.price) || 0) * (item.quantity || 1), 
    0
  );

  return (
    <div className="cartView container">
      <h2>Seu Carrinho</h2>

      {cart.length === 0 ? (
        <div>
          <p>O carrinho está vazio.</p>
          <Link to="/">Voltar para a loja</Link>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cartView_item">
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name || "Produto"}
                  className="cartView_image"
                />
                <div className="cartView_content">
                  <h3>{item.name || "Nome não disponível"}</h3>
                  <p>
                    Preço: R$ {parseFloat(item.price).toFixed(2) || "0.00"}
                  </p>
                  <p>Quantidade: {item.quantity || 1}</p>
                  <div className="cartView_controls">
                    <button onClick={() => decrement(item)}>-</button>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
          <button className="cartView_checkout">Finalizar Compra</button>
        </>
      )}
    </div>
  );
};

export default CartView;
