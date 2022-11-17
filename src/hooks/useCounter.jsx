import React from 'react'
import { useState } from 'react'

function useCounter(initialState = 0, prev, max, min) {
const [count, setCount] = useState(initialState,)

const changeNumberInc = () => {
    if (count >= max) {
     return   alert("Sorry, reached the maximum number")
    }
    setCount(count + prev)
}
const changeNumberDec = () => {
    if (count > 0) {
        setCount(count - prev)
     }else if (count === min) {
        alert("Sorry, reached the minimum number")
     }
}

const resetNumber = () => {
    setCount(initialState)
}

  return {changeNumberInc, changeNumberDec, count, resetNumber}
}

export default useCounter