import React, { useReducer } from 'react'


const initalvalue = 0

export const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state += 1;
            break;
        case 'decrement':
            return state -= 1;
            break;
        case "zero":
            return initalvalue
            break;

        default:
            return state
            break;
    }
}

function Usedata() {
  
    // comana logic use
    const [count,dispatch] = useReducer(reducer,initalvalue)

    return (
    <div>
      <h1>hello count :- {count}</h1>

      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>decrement</button>
      <button onClick={()=>dispatch('zero')}>Zero</button>
    </div>
  )
}

export default Usedata
