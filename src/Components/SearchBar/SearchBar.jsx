
import { MagnifyingGlass } from "@phosphor-icons/react";
import "./searchBar.css"


const SearchBar = () => {
    return(
        <div className="search">
            <MagnifyingGlass size={32} />
            <input type="text" placeholder="O que deseja" />
        </div>
    )
}

export default SearchBar

