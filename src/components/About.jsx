import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
      initial={{opacity:0 ,x:200}} 
      transition={{duration:1}}
      whileInView={{opacity:1 ,x:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto px-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mt-3 mb-4'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 text-center text-w-80 mb-8'>Passonate About Properties Dedicated Home Your Vision</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img className='w-full md:w-1/2 max-w-lg' src={assets.brand_img} alt="" />
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 '>
                <div className=''>
                    <h2 className='text-4xl font-semibold text-gray-700'>10+</h2>
                    <p>Years of experience</p>
                </div>
                <div >
                    <h2 className='text-4xl font-semibold text-gray-700'>30+</h2>
                    <p>Projects completed</p>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold text-gray-700'>20+</h2>
                    <p>Mn. Sq. Ft Deliverved </p>
                </div>
                <div >
                    <h2 className='text-4xl font-semibold text-gray-700'>25+</h2>
                    <p>Ongoing Projects</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore repellat accusantium quibusdam ipsa optio amet consectetur adipisicing elit. Voluptate dolore repellat accusantium quibusdam ipsa optio cupiditate a ab, amet, hic expedita adipisci rerum laboriosam asperiores praesentium non officia nostrum placeat.</p>
         <button className='bg-blue-500 px-6 py-3 rounded w-max'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
