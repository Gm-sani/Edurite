import React from 'react'
import University1 from "./university1.jpg"
export default function University() {
  return (
    <div className='mt-12'>
      <p className='text-lg font-serif font-light italic text-center pt-5'>Discover New Destination</p>
      <p className='text-[2.5rem] font-sans font-bold  text-center pt-1'>Popular University</p>
      <div className='flex justify-center mt-8'>
        <img src={University1} alt="" className='h-[26rem]' />
      </div>
    </div>
  )
}
