const OPTION =[
    { key: "all", label: "All"},
    { key: "active", label: "Active"},
    { key: "done", label: "Done"},
]

function FilterButtons( {value, onChange }){

    return(
        <div className="filter-row">
            {OPTION.map(item =>(
            <button
                key={item.key}
                className={"filter-btn" + (value === item.key ? " active ":"")}
                onClick={()=> onChange(item.key)}
            >
              {item.label}
            </button>
            ))}
        </div>
       
    )
}
export default FilterButtons