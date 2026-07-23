import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }


  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0)
  }

  return (

    <div className="container">
      <h1>React Counter App</h1>


      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>

      </div>
    </div>

  )
}

export default App;