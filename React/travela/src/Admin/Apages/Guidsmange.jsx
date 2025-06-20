import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import axios from 'axios'

function Guidsmange() {

    const [guide,setguide] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/guies")
        console.log(res.data)
        setguide(res.data)
    }

     // delete data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/guies/${id}`)
        console.log(res.data)
        fetchdata()
    }

       const [blogdata, setblogdata] = useState({
            id: "",
            name: "",
            Designation: "",
            img: ""
        })

     // view data one
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`)
        console.log(res.data)
        setblogdata(res.data)
    }

    

    return (
        <div>
            <AHeader title="Guide Manage" name="Guide" />
            <div className="container">
                <h1 className='text-center'>hello this Guid Page</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Images</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            guide && guide.map((data,index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.Designation}</td>
                                        <td>
                                            <img src={data.img} style={{height:"50px",width:"50px"}} alt="" />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>getdata(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>removedata(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                    <div className="col-12">
                                            <div className="guide-item">
                                                <div className="guide-img">
                                                    <div className="guide-img-efects">
                                                        <img src={blogdata.img} style={{height:"250px"}} className="img-fluid w-100 rounded-top" alt="Image" />
                                                    </div>
                                                    <div className="guide-icon rounded-pill p-2">
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                                                        <a className="btn btn-square btn-primary rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                                                    </div>
                                                </div>
                                                <div className="guide-title text-center rounded-bottom p-4">
                                                    <div className="guide-title-inner">
                                                        <h4 className="mt-3">{blogdata.name}</h4>
                                                        <p className="mb-0">{blogdata.Designation}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guidsmange
