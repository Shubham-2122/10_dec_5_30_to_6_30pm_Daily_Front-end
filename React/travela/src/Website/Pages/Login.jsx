import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Login() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Uid")){
            redirect("/")
        }
    },[])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        try {

            const { email, password } = form

            if (!email.trim() || !password.trim()) {
                console.log("Pls Required field...!")
                toast.error("Pls Required field...!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/user?email=${email}`)

            if(res.data.length === 0){
                toast.error("Email Does not match...!")
                return false
            }

            let user = res.data[0]

            // password not match
            if(user.password !== password){
                toast.error("Password does not match..")
                return false
            }

            if(user.status == "block"){
                toast.error("Account has been block..!")
                return false
            }

            localStorage.setItem("Uid",user.id)
            localStorage.setItem("Uname",user.name)
            redirect("/")
            toast.success("Login successfully..!")

        } catch (error) {
            console.log("Api not Found", error)
            toast.error("Api not Found..!")

        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <form action="" onSubmit={getsubmit}>
                            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                    <p className="text-white-50 mb-3">Please enter your login and password!</p>

                                    <MDBInput name='email' value={form.email} onChange={getchange} wrapperClass='mb-4 w-100' label='Email address' id='formControlLg' type='email' size="lg" />
                                    <MDBInput name='password' value={form.password} onChange={getchange} wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg" />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                    
                                    <h6>Create <Link to="/New" >New Account</Link> </h6>

                                    <MDBBtn size='lg'>
                                        Login
                                    </MDBBtn>


                                </MDBCardBody>
                            </MDBCard>
                        </form>

                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    )
}

export default Login
