import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
      initial={{opacity:0 ,x:100}} 
      transition={{duration:1}}
      whileInView={{opacity:1 ,x:0}}
      viewport={{once:true}}
    className='container mx-auto py-6 pt-6 px-6 md:px-20
    lg:px-32 overflow-hidden' id='Testimonials'>
      <h1 className='text-2xl sm:text-4xl font-semibold text-gray-800 text-center mb-5'>Customer <span className='underline underline-offset-4 decoration under font-light'>Testimonials</span></h1>
      <p className='text-gray-500 text-lg max-w-80 mx-auto'>Get Real stories from our esteemed customers</p>
      <div className='flex flex-wrap justify-center gap-8 mt-4'>
        {
            testimonialsData.map((testimonial, index)=>(
                <div key={index} className='max-w-[340px] border py-12 px-8 shadow-lg rounded text-center'>
                    <img className='w-20 h-20 rounded-full mx-auto mb-5' src={testimonial.image} alt={testimonial.title} />
                    <h2 className='text-xl text-gray-700 '>{testimonial.name}</h2>
                    <p className='text-sm text-gray-500 mb-2'>{testimonial.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {
                            Array.from({length: testimonial.rating},(item,index)=>(
                                <div key={index}>
                                    <img src={assets.star_icon} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <p className='text-gray-600'>{testimonial.text}</p>
                </div>
            ))
        }
      </div>
    </motion.div>
  )
}

export default Testimonials
