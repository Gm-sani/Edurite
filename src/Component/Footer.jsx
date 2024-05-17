import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate =useNavigate();
  return (
    <div className='bg-red-900'>
     <div className='flex  gap-36 pt-12'>
        <div className=''>
            <p className='text-[1rem] pl-7 text-blue-950 font-semibold '>Services</p> 
            <ul className="list-disc text-xs text-white mt-5 pl-10">
                <li className='hover:text-blue-950 cursor-pointer'>Study Abroad Consulting</li>
                <li className='hover:text-blue-950 cursor-pointer'>University & Scholarship Guidance</li>
                <li className='hover:text-blue-950 cursor-pointer'>Student Visa Facillitaion</li>
                <li className='hover:text-blue-950 cursor-pointer'>Personal Statment Assistance</li>
                <li className='hover:text-blue-950 cursor-pointer'>Personal Training</li>
                <li className='hover:text-blue-950 cursor-pointer'>Pre & Post Departure Guide</li>
            </ul>
        </div>
        {/* ----------------------------------2nd list ----------------------------- */}
        <div className=''>
            <p className='text-[1rem] text-blue-950 font-semibold pl-7'>Explore Link</p> 
            <ul className="list-disc text-xs text-white mt-5 pl-10">
                <li className='hover:text-blue-950 cursor-pointer'>About Us</li>
                <li className='hover:text-blue-950 cursor-pointer'>Services</li>
                <li className='hover:text-blue-950 cursor-pointer'>Terms & Conditions</li>
                <li className='hover:text-blue-950 cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>
        {/* ----------------------------------------3rd list---------------------------------- */}
        <div className=''>
            <p className='text-[1rem] text-blue-950 font-semibold pl-7'>Our Branch</p> 
            <ul className="list-disc text-xs text-white mt-5 pl-10">
                <li className='hover:text-blue-950 cursor-pointer'>Lahore</li>
                <li className='hover:text-blue-950 cursor-pointer'>eduriteconsulting@gmail.com</li>
                <li className='hover:text-blue-950 cursor-pointer'>92-300-2488996</li>
                <li className='hover:text-blue-950 cursor-pointer'>92-300-1488995-</li>
                <li className='hover:text-blue-950 cursor-pointer'>92-341-2074305</li>
                <li className='hover:text-blue-950 cursor-pointer'>92-309-2480468</li>
                <li className='hover:text-blue-950 cursor-pointer'>92-314-7978902</li>
            </ul>
        </div>
     </div>
     {/* ------------------------------------list end------------------------------ */}
     <p className='text-lg pl-5 mt-20 text-blue-950 font-semibold '>Do you have questions or went more</p>
     <p className='text-lg   text-blue-950 font-semibold border-b border-white mx-5 '>information? Contact us now</p>
     <div className='flex justify-between'>
        <div>
        <p className='text-xs text-blue-950 mx-5 pt-2 pb-2 cursor-pointer'>Copyright © 2024 eduriteconsulting All rights reserved.</p>
        </div>
        <div>
            <a href="https://gmsportfolio.netlify.app/">
            <p  className='text-xs text-blue-950 mx-5 pt-2 pb-2 cursor-pointer hover:text-white'>Developed by Gms</p>
            </a>
        
        </div>
     </div>
    
    </div>
  )
}
