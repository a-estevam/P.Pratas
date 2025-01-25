import './Li.css'
import { Link } from 'react-router-dom'


const Li = ({to, label}) =>{
    return(
        <>
        <Link to={to}>
            <li>{label}</li>
        </Link>
        </>
    )
}

export default Li