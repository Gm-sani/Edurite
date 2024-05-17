import React from 'react'
import aboutfirst from './aboutfirst.jpg'
import abouttwo from './abouttwo.jpg'
import aboutthree from './aboutthree.jpg'
import aboutfour from './aboutfour.jpg'

export default function Aboutus1() {

   
  return (
  
    <div className='bg-gray-100 pb-20'>
     <img src={aboutfirst} alt="" className=''/>
     <div className='mt-12 flex justify-between px-7'>
        <div>
            <p className=' text-[2.5rem] font-bold tracking-tighter'>Committed to Your Visa</p>
            <p className='text-[2.5rem]  font-bold tracking-tighter text-gray-500'>Success - About us</p>
        </div>
        <div className='pt-5 text-[1rem]'>
            <p >We deliver budget-friendly visa solutions, removing financial</p>
            <p >barriers from your journey. Our goal is to provide quality</p>
            <p >services at reasonable rates.</p>
        </div>
     </div>
     <div className='mt-16 mx-5'>
     <img src={abouttwo} alt="" className='rounded-2xl'/>
     <div className='flex justify-between'>
     <div className='p-10 bg-white pr-[9.4rem] hover:border-red-700 hover:border-b-2'>
        <p className='text-[3.5rem] font-semibold'>30k</p>
        <p className='text-xl text-red-700 tracking-widest font-bold '>...</p>
        <p className='text-[1.2rem] font-semibold pt-2 tracking-tighter'>We Have Worked</p>
        <p className='text-[1.2rem] font-semibold'>With Clients</p>
     </div>
     <div className='p-10 bg-white pr-[9.6rem] hover:border-red-700 hover:border-b-2'>
        <p className='text-[3.5rem] font-semibold'>100%</p>
        <p className='text-xl text-red-700 tracking-widest font-bold '>...</p>
        <p className='text-[1.2rem] font-semibold pt-2'>Successful Visa</p>
        <p className='text-[1.2rem] font-semibold'>Process Rate</p>
     </div>
     <div className='p-10 bg-white pr-[9.2rem] hover:border-red-700 hover:border-b-2'>
        <p className='text-[3.5rem] font-semibold'>1DAY</p>
        <p className='text-xl text-red-700 tracking-widest font-bold '>...</p>
        <p className='text-[1.2rem] font-semibold pt-2'>Application Approval</p>
        <p className='text-[1.2rem] font-semibold'>Processing Time</p>
     </div>
     </div>
     </div>
     {/* --------------------------------pics and paragraph --------------------------------- */}
     <div className='pt-32 px-6 flex justify-between'>
     <div>
            <p className='text-[2.5rem] font-bold tracking-tighter pt-8'>Guiding Your Path with Our</p>
            <p className='text-[2.5rem]  font-bold tracking-tighter text-gray-500'>Immigration Mission</p>
            <p className='w-[32rem] pt-4'>
            We're here to simplify immigration complexities, guiding you to success. Our mission is to unite families, open opportunities, and make your journey enriching. Your dreams are our focus on the path to a brighter future.
            </p>
      </div>
      <div>
         <img src={aboutthree} alt="" className='h-[18.5rem] rounded-2xl'/>
      </div>
     </div>
     {/* --------------------------------2---------------------------------- */}
     <div className='pt-32 px-6 flex justify-between'>
     <div>
         <img src={aboutfour} alt="" className='h-[18.5rem] rounded-2xl'/>
      </div>
     <div>
            <p className='text-[2.5rem] font-bold tracking-tighter pt-8'>Our Immigration</p>
            <p className='text-[2.5rem]  font-bold tracking-tighter text-gray-500'>Service history</p>
            <p className='w-[32rem] pt-4'>
            Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country,
            </p>
      </div>
     </div>
     
    </div>
    
  )
}
