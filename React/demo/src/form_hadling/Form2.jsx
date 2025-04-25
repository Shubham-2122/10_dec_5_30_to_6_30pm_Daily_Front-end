import React, { useState } from 'react'

function Form2() {

    const [form,setform]= useState({
        name : "",
        urnmae : "",
        email : "",
        password : "",
        text : ""
    })

    // form hadnling data api pass
    const gechnage=(e)=>{
        setform({
            ...form,
            // name = value
            [e.target.name] : e.target.value 
        })
        console.log(form)
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 m-auto">
                    <form action="">
                        <div>
                            {/* <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" value={form.name} onChange={(e)=>{setform({...form,name:e.target.value})}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Urname</label>
                                <input type="text" value={form.urnmae} onChange={(e)=>{setform({...form,urnmae:e.target.value})}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your user name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={(e)=>{setform({...form,email:e.target.value})}} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                                <input type="password" value={form.password} onChange={(e)=>{setform({...form,password:e.target.value})}} className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea value={form.text} className="form-control" onChange={(e)=>{setform({...form,text:e.target.value})}} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" />
                            </div> */}
                               <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" value={form.name} onChange={gechnage} name='name'  className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Urname</label>
                                <input type="text" value={form.urnmae} onChange={gechnage} name='urnmae' className="form-control" id="exampleFormControlInput1" placeholder="Enter your user name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" value={form.email} onChange={gechnage} name='email'  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">password</label>
                                <input type="password" value={form.password} onChange={gechnage} name='password' className="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea value={form.text} name='text' onChange={gechnage} className="form-control"  id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" />
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form2
