import React from 'react'
import slide1 from './supportslider1.jpg'
import slide2 from './supportslider2.jpg'
import slide3 from './supportslider3.jpg'
import slide4 from './supportslider4.jpg'
import slide5 from './supportslider5.jpg'
import { useNavigate } from 'react-router-dom'
export default function Partner() {

    const navigate =useNavigate();



  return (
    <div className='bg-gray-200 pt-16'>
     <p className='text-[2.5rem] text-center font-bold font-sans'>
     OUR PARTNERS AND SUPORTERS
     </p>
     {/* ------------------------slider----------------------- */}
     <div className='flex gap-3 pt-10 justify-between px-3'>
        <div className='bg-slate-700 p-2 rounded-2xl'>
            <img src={slide1} alt="" className='rounded-2xl h-44'/>
        </div>
        <div className='bg-slate-700 p-2 rounded-2xl'>
            <img src={slide2} alt="" className='rounded-2xl h-44'/>
        </div>
        <div className='bg-slate-700 p-2 rounded-2xl'>
            <img src={slide3} alt="" className='rounded-2xl h-44'/>
        </div>
        <div className='bg-slate-700 p-2 rounded-2xl'>
            <img src={slide4} alt="" className='rounded-2xl h-44'/>
        </div>
        <div className='bg-slate-700 p-2 rounded-2xl'>
            <img src={slide5} alt="" className='rounded-2xl h-44'/>
        </div>
     </div>
     {/* ----------------------------Appointment---------------------------- */}
     <div className='mt-16 bg-green-600 p-12 m-5 rounded-3xl text-white pb-14'>
        <p className='text-sm font-sans italic font-light'>Wanna travel with evisa?</p>
        <div className='flex justify-between'>
            <div>
            <p className='text-[2.5rem] pt-1 font-bold tracking-tighter'>Create Unforgettable</p>
            <p className='text-[2.5rem]  font-bold tracking-tighter'>Moments with Us</p>
            </div>
            <div className='px-8 py-3 mt-7 bg-white w-fit h-fit rounded-3xl text-sm font-semibold font-mono  text-black hover:bg-green-700 hover:text-white cursor-pointer'>
                <p onClick={()=>{navigate("contact")}}>Book a Appionment's </p>
            </div>
        </div>
     </div>
    </div>
  )
}
