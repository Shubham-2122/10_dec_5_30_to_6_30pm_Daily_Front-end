import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader'
import axios from 'axios'

function Blogmanage() {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blogs")
        // console.log(res.data)
        setblogs(res.data)
    }

    const [blogdata, setblogdata] = useState({
        id: "",
        name: "",
        posted: "",
        desc: "",
        date: "",
        img: ""
    })


    // view data one
    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`)
        console.log(res.data)
        setblogdata(res.data)
    }


    // delete data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/blogs/${id}`)
        console.log(res.data)
        fetchdata()
    }

    return (
        <div>
            <AHeader title="Blog manage" name="Blogs" />

            <div classname="container">
                <h1 className='text-center'>hello this Blog Page</h1>
                <table className="table">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#id</th>
                            <th scope="col">name</th>
                            <th scope="col">posted</th>
                            <th scope="col">desc</th>
                            <th scope='col'>date</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log(blogs)
                            blogs && blogs.map((data, index) => {
                                console.log(data)
                                return (
                                    <tr className='text-center' key={index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.posted}</td>
                                        <td>{data.desc}</td>
                                        <td>{data.date}</td>
                                        <td>
                                            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger' onClick={() => removedata(data.id)}>Delete</button>
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
                                            <div className="blog-item">
                                                <div className="blog-img">
                                                    <div className="blog-img-inner">
                                                        <img className="img-fluid w-100 rounded-top" style={{height:"200px"}} src={blogdata.img} alt="Image" />
                                                        <div className="blog-icon">
                                                            <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{blogdata.date}</small>
                                                        <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                                        <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a>
                                                    </div>
                                                </div>
                                                <div className="blog-content border border-top-0 rounded-bottom p-4">
                                                    <p className="mb-3">{blogdata.posted}</p>
                                                    <a href="#" className="h4">{blogdata.name}</a>
                                                    <p className="my-3">{blogdata.desc}</p>
                                                    <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
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

export default Blogmanage
