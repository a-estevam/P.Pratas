import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import RoutesComponents from "./Routes/RoutesComponents";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "./Context/CartProvider.jsx";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState({})

  useEffect(()=>{
    const db = getFirestore();
    const itemsRef = doc(db, "Items", "uyXLON8VSjmxLCopp7PC")
    getDoc(itemsRef).then((snapshot) =>{
      if (snapshot.exists()){
        setProducts({id: snapshot.id, ...snapshot.data()})
      }
    })



  }, [])

  return (
    <CartProvider>
      {console.log(products)}
      <BrowserRouter>
        <Header />
        <RoutesComponents />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
