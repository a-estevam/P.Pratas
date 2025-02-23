import { useContext, useState } from "react";
import CartContext from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./CartView.css";
import { db } from "../../main";

const CartView = () => {
  const { cart, increment, decrement, clearCart, removeItem } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const totalPrice = cart.reduce(
    (total, item) => total + (parseFloat(item.price) || 0) * (item.quantity || 1),
    0
  );

  const handleConfirmOrder = async (buyerData) => {
    try {
      const order = {
        buyer: buyerData,
        items: cart.map(item => ({
          id: item.id || "ID desconhecido",
          title: item.title || "Nome não disponível",
          price: item.price || 0,
          quantity: item.quantity || 1
        })),
        total: totalPrice || 0,
        date: new Date().toISOString(),
      };

      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, order);

      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Erro ao criar a ordem:", error);
    }
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      removeItem(item.id); // Remove o item se a quantidade for 1
    } else {
      decrement(item); // Diminui a quantidade normalmente
    }
  };

  return (
    <div className="cartView container">
      <h2>Seu Carrinho</h2>

      {cart.length === 0 ? (
        <div>
          {orderId ? (
            <div>
              <h3>Pedido realizado com sucesso!</h3>
              <p>ID da compra: <strong>{orderId}</strong></p>
              <Link to="/">Continuar comprando</Link>
            </div>
          ) : (
            <div>
              <p>O carrinho está vazio.</p>
              <Link to="/">Voltar para a loja</Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cartView_item">
                <img className="cartView_img" src={item.imageId || "https://via.placeholder.com/150"} alt={item.title || "Imagem não disponível"} />
                <div className="cartView_content">
                  <div className="cartView_div">
                    <h3>{item.title || "Nome não disponível"}</h3>
                  </div>
                  <div className="cartView_div">
                    <h4>Preço: R$ {parseFloat(item.price).toFixed(2) || "0.00"}</h4>
                  </div>
                  <div className="cartView_div">
                    <h4>Quantidade: {item.quantity || 1}</h4>
                  </div>
                  <div className="cartView_controls">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <button onClick={() => increment(item)}>+</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: R$ {totalPrice.toFixed(2)}</h3>

          {orderId ? (
            <div >
              <h3>Pedido realizado com sucesso!</h3>
              <p>ID da compra: <strong>{orderId}</strong></p>
              <Link  to="/"><button className="button">Continuar comprando</button></Link>
            </div>
          ) : showCheckout ? (
            <CheckoutForm onConfirm={handleConfirmOrder} />
          ) : (
            <button className="cartView_checkout" onClick={() => setShowCheckout(true)}>
              Finalizar Compra
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CartView;