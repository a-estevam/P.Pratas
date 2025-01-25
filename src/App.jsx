import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import RoutesComponents from './Routes/RoutesComponents'

function App() {
  

  return (
    <BrowserRouter>
      <Header/>
      <RoutesComponents/>
    </BrowserRouter>
  )
}

export default App
