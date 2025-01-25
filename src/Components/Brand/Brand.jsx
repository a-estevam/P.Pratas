import { Link } from "react-router-dom"
import logo from "../../assets/imagens/Ppratas_brand.svg";
import './Brand.css'


const Brand = () => {
    return(
        <div className="brand">
            <Link>
             <img src={logo} alt="logo" srcset="" />
            </Link>
        </div>

    )
}


export default Brand