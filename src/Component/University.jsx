import React from 'react'
import University1 from "./university1.jpg"
export default function University() {
  return (
    <div className='mt-20'>
      <p className='text-[1.4rem] font-serif font-light italic text-center pt-5'>Discover New Destination</p>
      <p className='text-[3.3rem] font-serif font-bold  text-center pt-1'>Popular University</p>
      <div className='flex justify-center mt-12'>
        <img src={University1} alt="" className='h-[32rem]' />
      </div>
    </div>
  )
}
