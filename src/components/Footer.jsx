import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-4 md:px-20 lg:px-32 bg-gray-800 pt-4 w-full overflow-hidden'id='Footer' >
      <div className='flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3  mb-8 md:mb-2'>
            <img src={assets.logo} alt="" />
            <p className='text-gray-300 mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nihil accusantium illum deleniti ea ullam voluptatem in cupiditate ipsum non!</p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Company</h2>
            <ul className='flex flex-col text-gray-400 gap-2'>
                <a className='hover:bg-white' href="#Header">Home</a>
                <a className='hover:bg-white' href="#About">About</a>
                <a className='hover:bg-white' href="#Contact">Contact Us</a>
                <a className='hover:bg-white' href="#">Privacy Policy</a>
            </ul>
        </div>
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'>Subcribe to our NewsLetter</h2>
        <p className='text-gray-400 max-w-80 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officia voluptas mollitia tempore, deserunt doloribus.</p>
        <div className='flex gap-2'>
        <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-600 focus:outline-none w-full md:w-auto' type="text" placeholder='Enter your email' />  
        <button className='bg-blue-500 text-white px-4 py-2 rounded '>Subscribe</button>  
        </div> 
        </div>
      </div>
      < div className='border-t border-gray-700 py-4 text-gray-400 text-center mt-8'>  
       {new Date().getFullYear()} All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
