import { useState } from 'react'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(0);
  let maxValue = 20;

  return (
    <>
      <div className="flex flex-col items-center bg-red-500 p-5 w-full">
        <h1>Chai aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <button
          onClick={() => setCounter(counter < maxValue ? counter + 1 : counter)}
        >
          Add value
        </button>
        {/* use arrow function to update state so it doesnt conflict with render */}
        {/* &emsp; */}
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}>
          Remove value
        </button>
        {counter === 0 ? (
          <h2>Counter value is 0. Start adding values.</h2>
        ) : null}
        {counter === maxValue ? (
          <h2>Counter value is 20! Can't add more.</h2>
        ) : null}
        <hr />
      </div>
    </>
  );
}

export default App
