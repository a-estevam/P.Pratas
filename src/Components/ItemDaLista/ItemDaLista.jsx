import { useState, useEffect } from 'react';
import './ItemDaLista.css';
import { Link, useParams } from 'react-router-dom';
import data from '../../data.json';

const ItemDaLista = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setProducts(data);
  }, []);

  const filteredProduct = id ? products.find(product => product.id === id) : null;

  return (
    <div className="item">
      {products.map((product) => (
        <div className="item_container " key={product.id}>
          <p className={`item_category ${product.category}`}>{product.category}</p>
          <img id="item_img" src={product.photoId} alt={product.product} />
          <p className="item_stock">Em estoque: {product.stock} peças</p>

          <Link to={`/ItemDetail/${product.id}`}>
            <button className="item_btn">Saiba Mais</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemDaLista;