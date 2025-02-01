import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import RoutesComponents from './Routes/RoutesComponents'
import Footer from './Components/Footer/Footer'


function App() {
  

  return (
  
      
        <BrowserRouter>
        <Header/>
        <RoutesComponents/>
        <Footer/>
        </BrowserRouter>
      
   
  )
}

export default App
