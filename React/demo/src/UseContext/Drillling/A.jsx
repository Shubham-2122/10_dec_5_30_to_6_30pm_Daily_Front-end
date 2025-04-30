import React, { useState } from 'react'
import B from './B'

function A() {

    const [name,setname] = useState("het patel")

  return (
    <div>
      <h1>hello this A component</h1>
      <B name={name} setname={setname} />
    </div>
  )
}

export default A
