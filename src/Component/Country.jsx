import React from 'react'
import country1 from "./country1.jpg"
import country2 from "./country2.jpg"
import country3 from "./country3.jpg"
import country4 from "./country4.jpg"
import country5 from "./country5.jpg"
export default function Country() {
  return (
    <div>
      <img src={country1} alt="" />
      <p className='text-[2.5rem] font-bold pl-5 mt-20'>Discovering Our Biggest Successes: The Stories</p>
      <p className='text-[2.5rem] font-bold pl-5 text-slate-500'>Behind Our Great Achievements</p>
      <p className='text-[1.05rem] tracking-tight pl-5 mt-8'>Embarking on a journey to reunite families, we recently had the privilege of assisting a</p>
      <p className='text-[1.05rem]  pl-5'>couple in securing their spouse's visa.</p>
      <div className='flex justify-center mx-10 mt-12'>
        <div>
            <img src={country2} alt="" className='rounded-3xl hover:shadow-2xl h-[10rem] w-[28rem] cursor-pointer'/>
        </div>
        <div>
            <img src={country3} alt="" className='rounded-3xl hover:shadow-2xl h-[10rem] w-[28rem] cursor-pointer'/>
        </div>
      </div>
      <div className='flex justify-center mx-10'>
        <div>
            <img src={country4} alt="" className='rounded-3xl hover:shadow-2xl h-[10rem] w-[28rem] cursor-pointer'/>
        </div>
        <div>
            <img src={country5} alt="" className='rounded-3xl hover:shadow-2xl h-[10rem] w-[28rem] cursor-pointer'/>
        </div>
      </div>

    </div>
  )
}
