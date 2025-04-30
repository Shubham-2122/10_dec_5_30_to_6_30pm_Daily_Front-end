import React, { createContext, useState } from 'react'
import CompoD from './CompoD'
import CompoC from './CompoC';

export const data1 = createContext()

function CompoA() {

    const [name,setname] = useState("varj patel");
    const [form,setform] = useState({
        count : 0,
        name : "data"
    })

  return (
    <div>
      <h1>Hello Compo  A</h1>

      {/* 1) create context */}
      {/* 2) provide context data pass */}
      {/* 3) cusmuer usecontext */}
      <data1.Provider value={{name,setname,setform,form}}>
        <CompoC />
        <CompoD />
      </data1.Provider>
    </div>
  )
}

export default CompoA
