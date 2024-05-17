import React from "react"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"
import {
  Routes,
  Route
} from "react-router-dom";
import Home from "./Component/Home"
import Aboutus from "./Component/Aboutus"
import Service from "./Component/Service"
import Contactus from "./Component/Contactus"
import Country1 from "./Component/Country1"

function App() {
 
  
  return (
    <>
     <div className="bg-gray-50 ">
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<Aboutus/>}/>
      <Route path="service" element={<Service/>}/>
      <Route path="country" element={<Country1/>}/>
      <Route path="contact" element={<Contactus/>}/>
    </Routes>

    <Footer/>

     </div>
    </>
  )
}

export default App
