import React, { useEffect } from 'react'
import girlpassport from './girlpassport3.jpg'
import passport1 from './passport1as.jpg'
import passport2 from './passport2.jpg'
import passport3 from './passport3.jpg'
import passport4 from './passport4.jpg'
import passport5 from './passport5.jpg'
import gsap from "gsap"

export default function Passport() {

    useEffect(()=>{
        const tl =gsap.timeline();

        tl.to("#pass1",{
            x:20,
            opacity:1,
            duration:0.5,
        })

        tl.to("#pass2",{
            x:350,
            opacity:1,
            duration:0.8,
        })

        tl.to("#pass3",{
            y:200,
            x:20,
            opacity:1,
            duration:1,
        })

        tl.to("#pass4",{
            x:350,
            y:200,
            opacity:1,
            duration:1.2,
        })

        tl.to("#pass5",{
            x:700,
            y:200,
            opacity:1,
            duration:1.5,
        })

    },[])






  return (
    <div className='mt-20 pt-14 relative mb-20 pb-20'>
        {/* --------------------------------background----------------------- */}
    <div className='flex gap-32 justify-between bg-slate-200 absolute'>
      <div className='pl-6 pt-12'>
       <p className='text-[3rem] font-semibold'>Providing the Best</p>
       <p className='text-[2.8rem] font-semibold text-slate-400'>Services to Students</p>
      </div>
      <div>
       <img src={girlpassport} alt="" className='h-screen'/>
      </div>
    </div>
    {/* --------------------------frontend------------------------------ */}
    <div id='pass1' className='absolute mt-[14rem] opacity-5'>
        <img src={passport1} alt="" className='h-44 rounded-xl'/>
    </div>

    <div id='pass2' className='absolute mt-[14rem] opacity-0'>
        <img src={passport2} alt="" className='h-44 rounded-xl'/>
    </div>

    <div id='pass3' className='absolute mt-[14rem] opacity-0'>
        <img src={passport3} alt="" className='h-44 rounded-xl '/>
    </div>

    <div id='pass4' className='absolute mt-[14rem] opacity-0'>
        <img src={passport4} alt="" className='h-44 rounded-xl '/>
    </div>

    <div id='pass5' className='absolute mt-[14rem] opacity-0'>
        <img src={passport5} alt="" className='h-44 rounded-xl '/>
    </div>


    </div>
    
  )
}
