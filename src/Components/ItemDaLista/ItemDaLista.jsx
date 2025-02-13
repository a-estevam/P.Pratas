import { useState, useEffect } from 'react';
import './ItemDaLista.css';
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDaLista = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const itemsRef = doc(db, "Items", "uyXLON8VSjmxLCopp7PC");
    
    getDoc(itemsRef).then((snapshot) => {
      if (snapshot.exists()) {
        const productData = { id: snapshot.id, ...snapshot.data() };
        setProducts([productData]); // Coloca o produto em um array
      }
    });
  }, []);

  return (
    <div className="item">
      {products.map((product) => (
        <div className="item_container" key={product.id}>
          <p className={`item_category ${product.categoryId}`}>{product.categoryId}</p>
          <img id="item_img" src={product.imageId} alt={product.title} />
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
