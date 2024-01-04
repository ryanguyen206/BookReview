import React, {useContext} from 'react'
import { RiBook2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {

    
    
    return (
        <div className='py-10 text-lg'>
            <p>Hello</p>
            <ul className='flex justify-between text-stone-700 font-medium'>
                <div className='flex items-center'> 
                    <RiBook2Fill/>
                    <li className='ml-2'><Link to='/'>Book Review</Link></li>
                </div>
                <div className='flex'>
                    <li className='pr-6'>About</li>
                    <li className='pr-6'>Contact</li>
                    <li><Link to='/login'>Login</Link></li>
                </div>
            
            </ul>
        </div>
    )
}

export default Navbar