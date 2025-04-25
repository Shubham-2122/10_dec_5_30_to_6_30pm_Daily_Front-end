import React, { useEffect, useState } from 'react'

function User() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=()=>{
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"GET"
        })
        .then((res)=>{
            // object
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            setuser(data)
        })
    }

  return (
    <div>
      <h1>hello user data call</h1>
      {
        user.map((users)=>{
            console.log(users)
            return(
                <h1>id :- {users.id} name :- {users.name}</h1>
            )
        })
      }
    </div>
  )
}

export default User
