import React from 'react'
import servicespic1 from "./servicepic1.jpg"
import servicespic3 from "./servicepic3.jpg"
import servicespic4 from "./servicepic4.jpg"
import servicespic5 from "./servicepic5.jpg"
import servicespic6 from "./servicepic6.jpg"
import servicespic7 from "./servicepic7.jpg"
import servicespic8 from "./servicepic8.jpg"
import servicespic9 from "./servicepic9.jpg"
import servicespic10 from "./servicepic10.jpg"
import servicespic11 from "./servicepic11.jpg"
import servicespic12 from "./servicepic12.png"
import servicespic13 from "./servicepic13.jpg"
import servicespic14 from "./servicepic14.jpg"
import servicespic15 from "./servicepic15.jpg"
import servicespic16 from "./servicepic16.jpg"

export default function Services1() {


  return (
    <div className='bg-slate-200 mb-3 pb-1'>
      <img src={servicespic1} alt="" />
      <div className='flex gap-2 text-[3.3rem] font-sans tracking-wider justify-center font-bold pt-16'>
        <p className=''>Easy study</p>
        <p className='text-slate-600'>abroad</p>
        </div>
    {/* ---------------------------container-------------------- */}
    <div className='flex justify-center gap-8 mt-5 '>
    <div>
        <img src={servicespic3} alt="" className=' h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic4} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic5} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    </div>
    {/* -----------------------------container row 2---------------------------------- */}
    <div className='flex justify-center gap-8 mt-5'>
    <div>
        <img src={servicespic6} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic7} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic8} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    </div>
    {/* -----------------------------container row 3---------------------------------- */}
    <div className='flex justify-center gap-8 mt-5'>
    <div>
        <img src={servicespic9} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic10} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    <div>
        <img src={servicespic11} alt="" className='h-[16rem] rounded-xl hover:shadow-slate-500 hover:shadow-lg cursor-pointer'/>
    </div>
    </div>
        {/* -------------------------visa container------------------------ */}
      {/* -------------------------------background-------------------------- */}
      <div className='relative mt-[8rem] '>
        <img src={servicespic12} alt="" className='h-screen ml-[22.5rem] absolute'/>
        <div className='pl-5 pt-16 absolute '>
            <p className='text-[3.3rem] font-bold'>Visa types and eligibility</p>
            <p className='text-[3.3rem] font-bold text-slate-400'>assessment</p>
            <p className='text-[1.3rem] pt-2 font-light'>Choosing the ideal destination for immigration is a pivotal</p>
            <p className='text-[1.3rem] font-light'>decision that can shape the trajectory of your life.</p>
            <div className='flex gap-7 mt-5'>
                <div>
                <img src={servicespic13} alt="" className='h-[6.7rem] rounded-lg border border-slate-100 hover:shadow-lg cursor-pointer'/>
                </div>
                <div>
                <img src={servicespic14} alt="" className='h-[6.7rem] rounded-lg border border-slate-100 hover:shadow-lg cursor-pointer'/>
                </div>
            </div>
{/* -------------------------2nd row---------------------------- */}
            <div className='flex gap-7 mt-5'>
                <div>
                <img src={servicespic15} alt="" className='h-[6.7rem] rounded-lg border border-slate-100 hover:shadow-lg cursor-pointer'/>
                </div>
                <div>
                <img src={servicespic16} alt="" className='h-[6.7rem] rounded-lg border border-slate-100 hover:shadow-lg cursor-pointer'/>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}
