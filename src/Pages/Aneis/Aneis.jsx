import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Aneis = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, "Items");
      const q = query(itemsCollection, where("categoryId", "==", categoryId));

      try {
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div>
      <h1>{categoryId}</h1>
      {products.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.imageId} alt={product.title} style={{ width: "100px" }} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Preço: R${product.price}</p>
              <p>Estoque: {product.stock}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Aneis;
