import React from 'react'
import servicepic17 from "./servicepic17.png"

export default function Newsletter() {
  return (
    <div className='mt-[40.5rem] flex justify-between bg-white shadow-lg  w-auto mx-5 rounded-2xl'>
    <div className='p-16'>
        <p className='text-[0.9rem]'>NEWSLETTER</p>
        <p className='text-[1.5rem] tracking-tight font-bold'>Subscribe to the free newsletter to receive the latest</p>
        <p className='text-[1.5rem] tracking-tight font-bold'>news & case studies!</p>
        <div className='flex gap-4 mt-5'>
            <div className='rounded-xl bg-slate-200 px-3 py-5 w-fit '>
                <input type="text" placeholder='Your e-mail address' className='text-[1rem] bg-transparent w-[32vw]' />
            </div>
            <div className='px-10 py-5  rounded-xl w-fit bg-green-500 cursor-pointer hover:bg-blue-500'>
                <p className='text-[1rem] text-white font-bold'>Subscribe</p> 
            </div>
        </div>
    </div>
    {/* ------------------------------pic=---------------------------- */}
    <div>
       <img src={servicepic17} alt="" className='h-[20rem]'/>
    </div>

    </div>
  )
}
