import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div 
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" 
      style={{ backgroundImage: 'url(/header_img.png)', backgroundSize: 'cover' }} 
      id="Header"
    >
      <Navbar />
      <motion.div
      initial={{opacity:0 ,y:100}} 
      transition={{duration:1.5}}
      whileInView={{opacity:1 ,y:0}}
      viewport={{once:true}}
      className="container mx-auto text-center py-6 px-8 md:px-20 lg:px-32">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16 flex justify-center">
          <a href="#" className="border border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all">Projects</a>
          <a href="#" className="px-8 py-3 rounded bg-blue-500 text-white hover:bg-blue-600 transition-all">Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
