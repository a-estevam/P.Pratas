import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";
import CartContext from "../../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [localAmount, setLocalAmount] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `https://api.sheety.co/1ecd5578eb3668a6655d7078aa050b72/apiPPratas/products/${id}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProduct(data.product);
        }
      } catch (error) {
        console.error("Erro ao buscar o produto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = () => {
    if (localAmount < product.stock) {
      setLocalAmount(localAmount + 1);
    } else {
      alert(`A quantidade máxima em estoque é ${product.stock}.`);
    }
  };

  const handleDecrement = () => {
    if (localAmount > 1) {
      setLocalAmount(localAmount - 1);
    }
  };

  const handleBuy = () => {
    if (product) {
      addToCart(product, localAmount);
      alert(
        `${localAmount} unidade(s) de ${product.products} foram adicionadas ao carrinho.`
      );
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
          <h3>Categoria: {product.category}</h3>
          <h1>{product.products}</h1>
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
