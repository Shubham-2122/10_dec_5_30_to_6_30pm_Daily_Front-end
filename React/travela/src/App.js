import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Website/Pages/Services";
import Package from "./Website/Pages/Package";
import Blog from "./Website/Pages/Blog";
import NotFound from "./Website/Pages/NotFound";
import Destination from "./Website/Pages/Destination";
import Gallery from "./Website/Pages/Gallery";
import Booking from "./Website/Pages/Booking";
import Contact from "./Website/Pages/Contact";
import Tour from "./Website/Pages/Tour";
import Testimonial from "./Website/Pages/Testimonial";
import Guides from "./Website/Pages/Guides";
import Dashboard from "./Admin/Apages/Dashboard";
import Blogmanage from "./Admin/Apages/Blogmanage";
import Guidsmange from "./Admin/Apages/Guidsmange";
import BlogsAdd from "./Admin/Apages/BlogsAdd";
import Alogin from "./Admin/Apages/Alogin";
import { ToastContainer, toast } from 'react-toastify';
import Login from "./Website/Pages/Login";
import Register from "./Website/Pages/Register";
import Editprofile from "./Website/Pages/Editprofile";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pack" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/testi" element={<Testimonial />} />
        <Route path="/guide" element={<Guides />} />
        <Route path="/login" element={<Login />} />
        <Route path="/New" element={<Register />} />
        <Route path="/edit" element={<Editprofile />} />


        {/* Not found */}
        <Route path="*" element={<NotFound />} />


        {/* Admin */}
        <Route path="/dash" element={<Dashboard />} />
        <Route path="/blogmanage" element={<Blogmanage />} />
        <Route path="/guidemanage" element={<Guidsmange />} />
         <Route path="/blogadd" element={<BlogsAdd />} />
         <Route path="/alogin" element={<Alogin />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
