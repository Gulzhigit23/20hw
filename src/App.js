import React from 'react'
import useCounter from './hooks/useCounter'

function App() {
  const {changeNumberInc, changeNumberDec,count,resetNumber } = useCounter(0,5,50,0)
  
  return (
    <div>
      {/* <input value={count} type="text" /> */}
      <h1>{count}</h1>
      <button onClick={changeNumberInc}>+</button>
      <button onClick={changeNumberDec}>-</button>
      <button onClick={resetNumber}>reset</button>
    </div>
  )
}

export default App
