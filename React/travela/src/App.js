import React from "react";
import Home from "./Website/Pages/Home";
import About from "./Website/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./Website/Pages/Services";
import Package from "./Website/Pages/Package";
import Blog from "./Website/Pages/Blog";
import NotFound from "./Website/Pages/NotFound";
import Destination from "./Website/Pages/Destination";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/pack" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
         <Route path="/destination" element={<Destination />} />

        {/* Not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
