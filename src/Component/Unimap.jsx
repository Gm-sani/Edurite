import React, { useState } from 'react'
import italy from "./Italy1.jpg"
import china from "./china2.jpg"
import aus from "./australia3.jpg"
import finland from "./finland.jpg"
import sweden from "./sweden4.jpg"
import uk from "./uk6.jpg"
import usa from "./usa7.jpg"

export default function Unimap() {

const [img ,Setimg] = useState([italy,china,aus,finland,sweden,uk,usa])
const [show , Setshow] = useState(img[0])




  return (
    <div className='mt-[12rem]'>
      <div className='flex justify-between px-5'>
        <div  className='text-[2.7rem]  font-semibold'>
            <p>Make Your Choice for the</p>
            <p className=' text-slate-500'>Preferred Nation</p>
        </div>
        <div className='text-lg pt-8'>
            <p >Choosing the ideal destination for immigration is a pivotal</p>
            <p >decision that can shape the trajectory of your</p>
        </div>
      </div>
{/* ----------------------------------------------nav----------------------------------------- */}
<div className='flex gap-3 bg-gray-200 mx-5 rounded-lg px-3 py-2 mt-5'>
    <div className='px-10 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[0])}}>
        ITALY
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[1])}}>
        CHINA
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[2])}}>
        AUS
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[3])}}>
        FINALND
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[4])}}>
        SWEDEN
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer border-r border-gray-400 rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[5])}}>
        UK
    </div>
    <div className='px-12 py-0 text-gray-600 hover:text-black hover:bg-white cursor-pointer  rounded hover:shadow-md shadow-black'
    onClick={()=>{Setshow(img[6])}}>
        USA
    </div>
</div>
{/* ---------------------------------------------IMG----------------------------------------- */}
<div>
    <img src={show} alt="" />
</div>

    </div>
  )
}
