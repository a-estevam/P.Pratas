import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetail.css";





const ItemDetail = () => {

  
  const [amount, setAmount] = useState(0) 
  
  
  

  const increment = () =>{
    if(amount >= product.stock){
       alert(`A quantidade do estoque é de ${product.stock} peças`)
       
    } else{
         setAmount(amount +1)
         
    }
}

const decrement = () =>{
    if(amount == 0){
        if (btnRef.current) {
            
        }
       
    } else{
        setAmount(amount -1)
         
         
    }
}

  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

// ************************

const handleBuy = () => {
  if (amount > 0) {
    addToCart(product, amount); 
    alert(`${amount} unidade(s) de ${product.products} foram adicionadas ao carrinho.`);
  } else {
    alert("Escolha uma quantidade para comprar.");
  }
};


//************************** 




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
          <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
          <h3 className="stock">Em estoque: {product.stock} peças</h3>

          
          <div className="buttons">
          <div className="quantidade counter_itens">
            <button className="card_button" onClick={decrement}>-</button>
            <span id="value">{amount}</span>
            <button className="card_button" onClick={increment}>+</button>
          </div>
          <button className="product_btn" onClick={handleBuy}>comprar</button>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default ItemDetail;
