import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function AHeader({name,title}) {
  
    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/alogin")
        toast.success("Admin logout Successs..")
    }

    return (
    <div>
       <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-primary px-5 d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                                <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                <a href="#"><small className="me-3 text-light"><i className="fa fa-user me-2" />Register</small></a>
                                <a href="#"><small className="me-3 text-light"><i className="fa fa-sign-in-alt me-2" />Login</small></a>
                                <div className="dropdown">
                                   {
                                    (()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                 <a href="#" className="dropdown-toggle text-light" data-bs-toggle="dropdown"><small><i className="fa fa-home me-2" /> Hello {localStorage.getItem("Aname")}</small></a>
                                            )
                                        }
                                    })()
                                   }
                                    <div className="dropdown-menu rounded">
                                        <a href="#" className="dropdown-item"><i className="fas fa-user-alt me-2" /> My Profile</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-comment-alt me-2" /> Inbox</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-bell me-2" /> Notifications</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-cog me-2" /> Account Settings</a>
                                        <a href="#" className="dropdown-item"><i className="fas fa-power-off me-2" /> Log Out</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar & Hero Start */}
                <div className="container-fluid position-relative p-0">
                    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                        <NavLink to="/dash" className="navbar-brand p-0">
                            <h1 className="m-0"><i className="fa fa-map-marker-alt me-3" />Travela</h1>
                            {/* <img src="img/logo.png" alt="Logo"> */}
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <NavLink to="/dash" className="nav-item nav-link">Dashboard</NavLink>
                                <NavLink to="/guidemanage" className="nav-item nav-link ">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/pack" className="nav-item nav-link">Packages</NavLink>
                                 <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blogs</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/blogmanage" className="dropdown-item">blog Manage</NavLink>
                                        <NavLink to="/blogadd" className="dropdown-item">blog Add</NavLink>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu m-0">
                                        <NavLink to="/destination" className="dropdown-item">Destination</NavLink>
                                        <NavLink to="/tour" className="dropdown-item">Explore Tour</NavLink>
                                        <NavLink to="/booking" className="dropdown-item">Travel Booking</NavLink>
                                        <NavLink to="/gallery" className="dropdown-item">Our Gallery</NavLink>
                                          <NavLink to="/guidemanage" className="dropdown-item">Travel Guides</NavLink>
                                        <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink>
                                    </div>
                                </div>
                              
                                 {
                                    (()=>{
                                        if(localStorage.getItem("Aid")){
                                            return(
                                                <>
                                                 <Link onClick={logout} className="nav-item nav-link">Alogout</Link>
                                                </>
                                            )
                                        }
                                        else{
                                            return(
                                                <>
                                                 <NavLink to="/alogin" className="nav-item nav-link">Alogin</NavLink>
                                                </>
                                            )
                                        }
                                    })()
                                 }
                            </div>
                           
                        </div>
                    </nav>
                </div>
                {/* Navbar & Hero End */}
                {/* Header Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">{title}</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">{name}</li>
                        </ol>
                    </div>
                </div>
                {/* Header End */}
            </div>
    </div>
  )
}

export default AHeader
