import ItemDaLista from "../ItemDaLista/ItemDaLista"



const ItemListContainer = () => {
    return(
        <section className="itemList container">
            <h1>
                Produtos
            </h1>
                <ItemDaLista/>
        </section>
    )
}

export default ItemListContainer