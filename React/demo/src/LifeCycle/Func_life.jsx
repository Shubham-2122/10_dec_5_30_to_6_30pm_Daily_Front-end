import React, { useState } from 'react'

function Func_life() {
 
    // 1) mouting phase
    const [name,setname] = useState("bhavik patel")
 
    return (
    <div>
      <h1>Hello name :-{name}</h1>

    {/* 2) updating phase */}
      <button onClick={()=>setname("het patel")}>Change name</button>
    </div>
  )
}

export default Func_life
