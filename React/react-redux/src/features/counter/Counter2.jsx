import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { zero } from './counterSlice'

function Counter2() {

    const count = useSelector((state)=>state.counter.value)


    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello this count {count}</h1>

      <button onClick={()=>dispatch(zero())}>ZERo</button>
    </div>
  )
}

export default Counter2
