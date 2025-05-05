import React from 'react'
import Headers from '../Coman/Headers'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Headers />
      <h1 className='p-5 bg-info'>hello This About page</h1>
      <div className="container">
        <Link to="about1">About 1</Link>
        <Link to="about2">About 2</Link>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default About
