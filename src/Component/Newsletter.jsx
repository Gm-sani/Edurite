import React from 'react'
import servicepic17 from "./servicepic17.png"

export default function Newsletter() {
  return (
    <div className='mt-[33rem] flex justify-between bg-white shadow-lg  w-auto mx-5 rounded-2xl'>
    <div className='p-12'>
        <p className='text-xs'>NEWSLETTER</p>
        <p className='text-xl tracking-tight font-bold'>Subscribe to the free newsletter to receive the latest</p>
        <p className='text-xl tracking-tight font-bold'>news & case studies!</p>
        <div className='flex gap-4 mt-5'>
            <div className='rounded-xl bg-slate-200 px-3 py-3 w-fit '>
                <input type="text" placeholder='Your e-mail address' className='text-xs bg-transparent w-[32vw]' />
            </div>
            <div className='px-8 py-4  rounded-xl w-fit bg-green-500 cursor-pointer hover:bg-blue-500'>
                <p className='text-xs text-white font-bold'>Subscribe</p> 
            </div>
        </div>
    </div>
    {/* ------------------------------pic=---------------------------- */}
    <div>
       <img src={servicepic17} alt="" className='h-[17rem]'/>
    </div>

    </div>
  )
}
