import Counter from "./components/counter"
import Todolist from "./components/Todolist"
import SearchBar from "./components/SearchBar"
import { useState } from "react"
import FilterButtons from "./components/FilterButtons"

function App() {
  const [searchText, SetSearchText] = useState("")
  const [filter, setFilter] = useState("all")
  return (
    <div className="wrap">
      <h1>My Todo list</h1>


      <div className="panel">
        <div className="panel-label">ຈຸດກວດທີ່1</div>
        <SearchBar searchText={searchText} onChange={SetSearchText} />
        
        <FilterButtons value={filter} onChange={setFilter}/>
      

    

      </div>
     
     <Todolist searchText={searchText} filter={filter}/>

      
    </div>
  )

}

export default App
