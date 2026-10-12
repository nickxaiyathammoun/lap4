//import { useState } from "react"
//const [searchText, SetSearchText] = useState("")

function SearchBar({searchText, onChange}){
    return(
        <div className="search-row">
        <span className="icon">🔍</span>
        <input
        type="text"
        placeholder="ຄົ້ນຫາ... / search"
        value={searchText}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
)
}
export default SearchBar