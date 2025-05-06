import React, { useRef } from 'react'
import Headers from '../Layout/Coman/Headers'

function UseRef() {

    const refelement = useRef()

    const getdata=()=>{
        refelement.current.focus();
        refelement.current.style.color = "red";
        refelement.current.style.background = "blue"
    }

    return (
        <div>

            {/* useRef is a React Hook that lets you reference a value that’s not needed for rendering. */}
            {/*ref dom manuple real dom  */}
            {/* useref :- re-render stop */}
            <Headers />
            <br />
            <input type="text" ref={refelement} />

            <button onClick={getdata}>Click me</button>


        </div>
    )
}

export default UseRef
