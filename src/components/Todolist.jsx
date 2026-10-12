import { useState } from "react"


function Todolist({ searchText, filter }) {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    function addTodo(text) {
        if (text.length <= 5) return;
        setTodo([...todo, { id: Date.now(), text: text, done: false }]);
        setText("")
    }
    function deleteTodo(id) {
        console.log("ID>>>>", id)
        console.log("LIST>>>>", todo)
        setTodo(todo.filter(item => item.id !== id));

    }
    function toggleTodo(id) {
        setTodo(todo.map(item => item.id === id ? { ...item, done: !item.done } : item));
    }
    function handleOnInputChange(textInput) {
        console.log("INPUT>>>", textInput)
        setText(textInput)
    }

    const doneCount = todo.filter(item => item.done).length

    const filterTodos = todo
    .filter(item => item.text. toLowerCase(). includes(searchText.toLowerCase()))
    .filter(item => {
        if (filter === "active") return !item.done;
        if (filter === "done") return item.done;
        return true;
    });

    return (
        <div className="panel">
            <div className="panel-label">ຈຸດກວດ 2</div>
          

            <div className="add-row">
                <input type="text" value={text} onChange={e => handleOnInputChange(e.target.value)} placeholder="ເພິ່ມວຽກ..." />
                <button className="btn add"
                    onClick={() => addTodo(text)}
                >add</button>
            </div>
            <div style={{ height: '1rem' }}></div>
            <div className="todo-count"><b>{doneCount}</b> of {filterTodos.length} done</div>
            {filterTodos.length === 0 ? (
                <div className="empty">ຍັງບໍມີວຽກ</div>
            ) : (
                <ul className="todos">
                    {filterTodos.map(item => (
                        <li className={item.done ? "done" : ""}>
                            <span className="text"
                                onClick={() => toggleTodo(item.id)}
                            >
                                {item.text}</span>


                            <button className="del"
                                onClick={() => deleteTodo(item.id)}

                            >ລຶບ</button>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}
export default Todolist