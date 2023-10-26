import { db } from "../videosDb"


const SearchBar = () => {
    function changeHandle() {
        
    }
    return(
        <div className="input-container">
            <input placeholder="seach" type="text" onChange={changeHandle} className="input" id="input"/>
        </div>
    )
}

export default SearchBar