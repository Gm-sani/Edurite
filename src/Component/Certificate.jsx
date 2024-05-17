import React from 'react'
import cert1 from "./certificate1.jpg"
import cert2 from "./certificate2.jpg"
import cert3 from "./certificate3.jpg"
export default function Certificate() {
  return (
    <div className='mt-[18rem] pt-[24rem]'>
      <p className='text-[1.5rem] font-serif font-light italic text-center pt-5'>Our Liabilty</p>
      <p className='text-[3.3rem] font-serif font-bold  text-center pt-2'>Our Certificate</p>
      <div className='flex justify-center gap-12 pt-12'>
        <div className=''>
            <img src={cert1} alt="" className='h-[18rem] cursor-pointer hover:p-1'/>
        </div>
        <div className=''>
            <img src={cert2} alt="" className='h-[18rem] cursor-pointer hover:p-1'/>
        </div>
        <div className=''>
            <img src={cert3} alt="" className='h-[18rem] cursor-pointer hover:p-1'/> 
        </div>
      </div>
    </div>
  )
}
