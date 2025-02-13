import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import CartContext from "../../Context/CartContext";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const [localAmount, setLocalAmount] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, "Items", "uyXLON8VSjmxLCopp7PC");  // Usando a sua id fornecida
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      } else {
        console.warn("Produto não encontrado!");
      }
    });
  }, []);

  const handleIncrement = () => {
    if (product && localAmount < product.stock) {
      setLocalAmount(localAmount + 1);
    } else {
      alert(`A quantidade máxima em estoque é ${product?.stock}.`);
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
        name: product.products,
        price: parseFloat(product.price),
        image: product.photoId || "https://via.placeholder.com/150",
        quantity: localAmount || 1,
      };

      addToCart(itemToCart);
      alert(`${localAmount} unidade(s) de ${product.products} foram adicionadas ao carrinho.`);
    }
  };

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product container">
      <div className="product-content">
        <img
          className="product-img"
          src={product.photoId}
          alt={product.products}
        />
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
              <button className="card_button" onClick={handleDecrement}>
                -
              </button>
              <span id="value">{localAmount}</span>
              <button className="card_button" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className="product_btn" onClick={handleBuy}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
