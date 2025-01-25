import { useParams } from 'react-router-dom'

const Produto = () =>{
    const { id } = useParams();

    return(
        <>
        return <div>Você está visualizando o post com ID: {id}</div>;
        </>
    )
}

export default Produto