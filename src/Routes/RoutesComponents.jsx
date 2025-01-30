import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ItemDetail from '../Pages/ItemDetail/ItemDetail'




const RoutesComponents = () =>{
    return(
        <Routes>
         <Route path='/' element = {<Home/>}/>
         <Route path='/ItemDetail/:id' element = {<ItemDetail/>}/>
        </Routes>
    )
}

export default RoutesComponents