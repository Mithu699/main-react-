import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("clicked", counter)
    setCounter(prevCounter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Increase Value {counter}
      </button>

      <br />

      <button onClick={removeValue}>
        Decrease Value {counter}
      </button>
    </>
  )
}

export default App
// ui updation ko react control krta hai taki js se easily way me kaam kr sake hmlog more efficiency ke sath kaam krte rhe 
