import Li from "../Li/Li"
import { List } from "@phosphor-icons/react";
import "./NavBar.css";


const NavBar = () =>{
    return(
        <nav>
            <ul className="navBar_li" >
                <Li to="" label="Anéis"/>
                <Li to="" label="Brincos"/>
                <Li to="" label="Correntes"/>
                <Li to="" label="Pulseiras"/>
            </ul>
                <List className="List" size={32} />
        </nav>
    )
}
export default NavBar
