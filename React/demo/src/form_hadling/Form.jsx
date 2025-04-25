import React, { useState } from 'react'

function Form() {

    const [name,setname]= useState("");
    const [email,setemail] = useState("");
    const [address,setaddress] = useState("")

    const getchange=(e)=>{
        setaddress(e.target.value)
        console.log(address)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form action="">
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea value={address} onChange={getchange} className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                        </div>
                        <div className="mb-3">
                         
                        <input type="submit"  />
                        </div>
                    </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form
