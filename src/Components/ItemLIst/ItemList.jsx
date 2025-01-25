import { useState, useEffect } from 'react';
import './ItemList.css';
import { Link, useParams } from 'react-router-dom';

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const url = 'https://api.sheety.co/1ecd5578eb3668a6655d7078aa050b72/apiPPratas/products';

    const getProducts = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProducts(data.products);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="item">
      {products.map((product) => (
        <div className="item_container" key={product.id}>
          <p className={`item_category ${product.category}`}>{product.category}</p>
          <img className="item_img" src={product.photoId} alt={product.product} />
          <p className="item_stock">Em estoque: {product.stock} peças</p>

          <Link to={`/produto/${product.id}`}>
            <button className="item_btn">Saiba Mais</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
