import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, zero } from './counterSlice'

function Counter() {

    const count = useSelector((state)=> state.counter.value)
    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Hello this counter componnet useing Redux</h1>

      <h1>Hello count :- {count}</h1>

      <button onClick={()=>dispatch(increment())}>incement</button>
      <button onClick={()=> dispatch(decrement())}>decement</button>
      <button onClick={()=>dispatch(zero())}>ZERO</button>
    </div>
  )
}

export default Counter
