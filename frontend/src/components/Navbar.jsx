import React from 'react'
import { RiBook2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className='py-10 text-lg'>
        <ul className='flex justify-between text-stone-700 font-medium'>
            <div className='flex items-center'> 
                <RiBook2Fill/>
                <li className='ml-2'>Book Review</li>
            </div>
            <div className='flex'>
                <li className='pr-6'>About</li>
                <li className='pr-6'>Contact</li>
                <li>Sign up</li>
            </div>
         
        </ul>
    </div>
  )
}

export default Navbar