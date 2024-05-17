import React from 'react'
import contactus1 from "./contactus1.jpg"
import paki from "./pakisatn.png"
export default function Contactus4() {
  return (
    <div>
      <img src={contactus1} alt=""/>
      <div className='bg-slate-50 pt-32 pb-24'>
        <img src={paki} alt="" className='h-16 m-auto'/>
        <p className='text-[1.65rem] font-bold underline text-center'>(01) Lahore Office</p>
        <p className='text-[1.30rem] text-slate-500 text-center'>Office 23, First Floor, Gul Plaza</p>
        <p className='text-[1.30rem] text-slate-500 text-center'>Barkat Market Lahore</p>
        <p className='text-[1.30rem] text-slate-500 text-center'>+92-300-1488995</p>
        <p className='text-[1.30rem] text-slate-500 text-center'>+92-300-2488996</p>
      </div>
    </div>
  )
}
