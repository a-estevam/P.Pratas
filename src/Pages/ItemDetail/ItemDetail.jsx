import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import CartContext from "../../Context/CartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [localAmount, setLocalAmount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "Items", id);
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      }
    });
  }, [id]);

  const handleIncrement = () => {
    if (product && localAmount < product.stock) {
      setLocalAmount(localAmount + 1);
    }
  };

  const handleDecrement = () => {
    if (localAmount > 1) {
      setLocalAmount(localAmount - 1);
    }
  };

  const handleBuy = () => {
    if (product) {
      const itemToCart = {
        id: product.id,
        title: product.title,
        price: parseFloat(product.price),
        imageId: product.imageId || "https://via.placeholder.com/150",
        quantity: localAmount,
      };

      addToCart(itemToCart, localAmount);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product container">
      <div className="product-content">
        <img className="product-img" src={product.imageId} alt={product.title} />
        <div className="product-description">
          <h3>Categoria: {product.categoryId}</h3>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <span>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          <h3 className="stock">Em estoque: {product.stock} peças</h3>
          <div className="buttons">
            <div className="quantidade counter_itens">
              <button className="card_button" onClick={handleDecrement}>-</button>
              <span id="value">{localAmount}</span>
              <button className="card_button" onClick={handleIncrement}>+</button>
            </div>
            <button className="product_btn" onClick={handleBuy}>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;