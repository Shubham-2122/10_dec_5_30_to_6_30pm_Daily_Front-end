import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
       <h1>hello this B component</h1>
       <h1>hello name :- {name}</h1>

       <button onClick={()=>setname("himni patel")}>Change name</button>

       <C name={name} setname={setname} />
    </div>
  )
}

export default B
