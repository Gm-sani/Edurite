import React from 'react'
import { IconButton } from '@mui/material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TimerIcon from '@mui/icons-material/Timer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from "./logo-removebg-preview.png"
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const navigate =useNavigate();
  return (
<div>
    <div className='flex justify-between px-7'>
      <div className='flex gap-2'>
        <div> 
            <DialpadIcon className="p-1 py-1 text-green-500"/>
        </div>
        <div className='py-1 text-[0.70rem]'>HELP DESK :</div>
        <div className='py-1 text-[0.70rem] font-semibold'>+92-300-1488995 : +92-300-2488996 </div>
      </div>

      <div className='flex'>
      <TimerTwoToneIcon className="p-1 py-1 text-green-500 "/>
      <div className='py-1 text-[0.70rem] font-semibold'>Monday - Friday 09:00 am - 06:00 Pm</div>
      </div>

      <div className='flex '>
      <FmdGoodIcon className="p-1 py-1 text-green-500"/>
      <div className='py-1 text-[0.70rem] font-semibold'>Office 23, First Floor, Gul Plaza Barkat Market Lahore</div>
      </div>
    </div>
{/* ----------------------------------low navbar------------------------------------------------- */}
<div className='px-7 flex gap-[12rem]'>
    <div onClick={()=>{navigate("/")}} >
        <img src={logo} alt="" className='p-1 cursor-pointer'/>
    </div>
    <div className='flex gap-7 text-[0.75rem] pt-7 font-light'>
        <div onClick={()=>{navigate("/")}} className='cursor-pointer h-1'>Home</div>
        <div onClick={()=>{navigate("about")}} className='cursor-pointer h-1'>About us</div>
        <div onClick={()=>{navigate("service")}} className='cursor-pointer h-1'>Services</div>
        <div onClick={()=>{navigate("country")}} className='cursor-pointer h-1'>Country</div>
        <div onClick={()=>{navigate("contact")}} className='cursor-pointer h-1'>Contact us</div>
    </div>
</div>

</div>
    
  )
}
