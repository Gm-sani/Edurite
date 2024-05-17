import React, { useEffect, useState } from 'react'
import slider1 from "./slider1.jpg"
import slider2 from "./slider2.jpg"
import slider3 from "./slider3.jpg"

export default function Slider() {

    const [selected , Setselected ] = useState(0)
    const [images , Setimages] =useState([slider1,slider2,slider3])


   //  -------------------------------------- img slider-----------------------------
    useEffect(()=>{
     
        setInterval(() => {
            Setselected(selected => selected < 2 ? selected + 1 : 0 )
            console.log(selected)
        }, 5000);
      },[])
    //   ----------------------------------------------------------------------------------


  return (
    <div>
        <div>
        <img src={images[selected]} alt="" className='h-[90vh] w-[95vw] m-auto object-cover'/>
        </div>
      
    </div>
  )
}
