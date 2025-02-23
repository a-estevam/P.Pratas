import { useState, useEffect } from 'react';
import './ItemDaLista.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDaLista = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollectionRef = collection(db, "Items");
    
    getDocs(itemsCollectionRef).then((querySnapshot) => {
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData); 
    });
  }, []);

  return (
    <div className="item">
      {products.map((product) => (
        <div className="item_container" key={product.id}>
          <p className={`item_category ${product.categoryId}`}>{product.categoryId}</p>
          <img id="item_img" src={product.imageId} alt={product.title} />
          <p className="item_stock">Preço: R${product.price}</p>
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