import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import RoutesComponents from './Routes/RoutesComponents'
import Footer from './Components/Footer/Footer'
import { CartProvider } from './context/CartProvider.jsx'

// import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
// import { useEffect, useState } from 'react'




function App() {

  // const [products, setProducts] = useState([])

  // useEffect(() =>{
  //   const db = getFirestore();
  //   const ItemsCollection = collection(db, "items", "uyXLON8VSjmxLCopp7PC");
  //   getDocs(ItemsCollection).then((snapshot) =>{
  //     if (snapshot.size === 0) {
  //       console.log("No result")
  //     }
  //     setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
  //   })
    

  // }, [])
  

  return (
    
    <CartProviderovider>
      <BrowserRouter>
        <Header/>
        <RoutesComponents/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
      
   
  )
}

export default App
