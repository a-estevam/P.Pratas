
import BannerHero from '../../Components/BannerHero/BannerHero';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
import './Home.css'
import { Link } from 'react-router-dom';



const Home = () =>{
    return(
        <>
            <BannerHero/>
            <br />
            <hr  className='container'/>
            <ItemListContainer/>
        </>
    )
}

export default Home