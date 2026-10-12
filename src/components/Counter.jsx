import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)

  function handClickCount() {
    setCount(count => count + 1)
  }
  function handClickDecrease() {
    if (count === 0) return;
    setCount(count => count - 1)
  }

  function handClickReset() {
    setCount(0)
  }
  return (
    <div className="panel">
      <div className="panel-label">ຈຸດທີ່1</div>
      <div className="counter-row">
        <button className="btn" onClick={handClickDecrease}>-</button>
        <span className="count">{count}</span>
        <button className="btn" onClick={handClickCount}>+</button>
        <button className="btn reset" onClick={handClickReset}>reset</button>
      </div>
    </div>
  )
}
export default Counter