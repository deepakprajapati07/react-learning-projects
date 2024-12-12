import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='container'>
      <h1>Simple Counter</h1>
      <div className='counterDisplay'>
        <h3>{count}</h3>
        <div className='btnConatiner'>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default App
