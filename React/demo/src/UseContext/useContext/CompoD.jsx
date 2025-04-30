import React, { useContext } from 'react'
import { data1 } from './CompoA'

function CompoD() {

    const {name,setname} = useContext(data1)

  return (
    <div>
          <h1>Hello Compo  D</h1>

          <h1>Hello name :- {name}</h1>
          <button onClick={()=>setname("Shubham jadav")}>Change name</button>
    </div>
  )
}

export default CompoD
