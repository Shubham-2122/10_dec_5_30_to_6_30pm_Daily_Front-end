import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Not() {

    const redirect = useNavigate()

    const back=()=>{
        redirect("/")
    }

    return (
        <div>
            <header>
        

                <div className='p-5 text-center bg-light'>
                    <h1 className='mb-3'>Page Not Found 404</h1>
                    <h4 className='mb-3'>Subheading</h4>
                    {/* <Link className='btn btn-primary' to="/" role='button'>
                        Back to Home
                    </Link> */}

                    <button role='button' onClick={back} className='btn btn-primary'>
                        back to home
                    </button>
                    
                    {/* <button role='button' onClick={()=>{redirect("/")}} className='btn btn-primary'>
                        back to home
                    </button> */}
                </div>
            </header>
        </div>
    )
}

export default Not
