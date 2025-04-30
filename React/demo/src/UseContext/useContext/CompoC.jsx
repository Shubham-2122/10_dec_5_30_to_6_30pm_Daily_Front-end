import React, { useContext } from 'react'
import { data1 } from './CompoA'

function CompoC() {

    const {form,setform} = useContext(data1)

  return (
    <div>
          <h1>Hello Compo  C</h1>
       

          <h1>hello name : {form.name}</h1>
          <button onClick={()=>setform({...form,name : "raj sharma"})}>Chnage name</button>

          <h1>Hello count : {form.count}</h1>
          <button onClick={()=>setform({...form,count : form.count + 1})}>Incmrent</button>
          <button onClick={()=>setform({...form,count : form.count - 1})}>decmrent</button>
    </div>
  )
}

export default CompoC
