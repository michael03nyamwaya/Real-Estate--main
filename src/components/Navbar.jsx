import React, { useEffect, useState } from 'react';
import {assets} from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)

  useEffect(()=>{
   if(showMobileMenu){
    document.body.overflow='hidden'
   }else{
    document.body.overflow='auto'
   }
   return()=>{
    document.body.overflow='auto'
   }
  },[showMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-20 '>
      <div className='container mx-auto flex items-center justify-between gap-4 py-4 px-6 md:px-14 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex items-center gap-6 text-white ">  
          <li>
            <a href="#Header" className='cursor-pointer hover:bg-gray-500'>Home</a>
          </li>
          <li>
            <a href="#About" className='cursor-pointer hover:bg-gray-500'>About</a>
          </li>
          <li>
            <a href="#Project" className='cursor-pointer hover:bg-gray-500'>Projects</a>
          </li>
          <li>
            <a href="#Contact" className='cursor-pointer hover:bg-gray-500'>Contact</a>
          </li>
          <li>
            <a href="#Testimonials" className='cursor-pointer hover:bg-gray-500'>Testimonials</a>
          </li>
        </ul>
        <button className='hidden md:block px-6 py-3 rounded-full bg-white'>Sign Up</button>
        <img onClick={()=>setMobileMenu(true)} className='md:hidden w-7' src={assets.menu_icon} alt="" />
        </div>
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'}  right-0 bottom-0 top-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer '>
            <img onClick={()=>setMobileMenu(false)} className='w-7' src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center px-5 py-6 gap-4 mt-5 justify-center text-lg font-medium'>
            <a onClick={()=>setMobileMenu(false)} href="#Header">Home</a>
            <a onClick={()=>setMobileMenu(false)} href="#About">About</a>
            <a onClick={()=>setMobileMenu(false)} href="#Contact">Contact</a>
            <a onClick={()=>setMobileMenu(false)} href="#Testimonials">Testimonials</a>
          </ul>
        
      </div>
    </div>
  );
}

export default Navbar;
