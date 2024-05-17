import React from 'react'
import DialpadIcon from '@mui/icons-material/Dialpad';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import PaymentIcon from '@mui/icons-material/Payment';
import CallIcon from '@mui/icons-material/Call';
import MapsUgcTwoToneIcon from '@mui/icons-material/MapsUgcTwoTone';
import MapComponent from './Mapcomp';

export default function Contactfirst() {
  return (
    <div className='flex justify-between mx-11 mt-12 '>
      {/* -----------------------------------left text------------------------------ */}
     <div className='px-8 py-7 '>
        <div className='flex gap-2'>
            <div className=' py-1'><DialpadIcon className='p-1 text-green-600'/></div>
            <div className='text-xs mt-2 font-semibold'>CONTACT US</div>
        </div>
        <p className='mt-2 text-xl font-bold tracking-tight'>Do you have questions or went more</p>
        <p className=' text-xl font-bold'>information?</p>
     {/* ------------------------------------Form 1------------------------------------- */}

     <div className='mt-2 flex gap-5'>

      <div className='flex p-3 mt-3 gap-2 border border-slate-200 rounded-lg w-fit'>
      <div className=''><PersonOutlineIcon className='p-[0.15rem] text-slate-400'/></div>
      <div><input type="text" className='bg-transparent  hover:border-b hover:border-slate-400 text-xs' placeholder='Your Name'/></div>
      </div>
      {/* ----------------------------------------------- */}
      <div className='flex p-3 mt-3 gap-2 border border-slate-200 rounded-lg w-fit'>
      <div className=''><EmailIcon className='p-[0.15rem] text-slate-400'/></div>
      <div><input type="text" className='bg-transparent hover:border-b hover:border-slate-400 text-xs' placeholder='Email'/></div>
      </div>

     </div>
     {/* -----------------------------------form end---------------------------------------- */}
      {/* ------------------------------------Form 2------------------------------------- */}

      <div className='flex gap-5'>

      <div className='flex p-3 mt-3 gap-2 border border-slate-200 rounded-lg w-fit'>
      <div className=''><PaymentIcon className='p-[0.15rem] text-slate-400'/></div>
      <div><input type="text" className='bg-transparent hover:border-b hover:border-slate-400 text-xs' placeholder='Student Visa'/></div>
      </div>
      {/* ----------------------------------------------- */}
      <div className='flex p-3 mt-3 gap-2 border border-slate-200 rounded-lg w-fit'>
      <div className=''><CallIcon className='p-[0.15rem] text-slate-400'/></div>
      <div><input type="text" className='bg-transparent hover:border-b hover:border-slate-400 text-xs' placeholder='Mobile Number'/></div>
      </div>

      </div>
{/* -----------------------------------form end---------------------------------------- */}
      <textarea name="" id="" className='mt-5 h-28 w-[25.5rem] p-3 rounded-lg bg-transparent border border-slate-200 text-xs' placeholder='Write Your Message'>
      </textarea>
      <div className='mt-3 px-10 text-white py-4 bg-green-500  hover:bg-blue-500 w-fit rounded-lg cursor-pointer text-xs font-bold'>
        <p>Send Message</p>
      </div>
     </div>

     <div className='h-56'>
    <MapComponent/>
     </div>
    </div>
  )
}
