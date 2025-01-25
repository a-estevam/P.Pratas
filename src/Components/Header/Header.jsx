import Brand from "../Brand/Brand"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import SearchBar from "../SearchBar/SearchBar"
import './Header.css'


const Header = () => {
    return(
        <header className="">
            <div className="header-Content container">
                <Brand/>
                <NavBar/>
                <SearchBar/>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header