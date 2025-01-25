import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Produto from '../Pages/Produto/Produto'




const RoutesComponents = () =>{
    return(
        <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/produto/:id' element = {<Produto/>}/>
        </Routes>
    )
}

export default RoutesComponents