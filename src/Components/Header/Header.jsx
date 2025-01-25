import Brand from "../Brand/Brand"
import CartWidget from "../CartWidget/CartWidget"
import NavBar from "../NavBar/NavBar"
import './Header.css'


const Header = () => {
    return(
        <header className="">
            <div className="header-Content">
                <Brand/>
                <NavBar/>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header