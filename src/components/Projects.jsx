import  { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"

const Projects = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const [cardToShow, setCardToShow]=useState(1)
   
    useEffect(()=>{
    const updateCardToShow =()=>{
        if(window.innerWidth >= 1024){
            setCardToShow(projectsData.length)
        }else{
            setCardToShow(1)
        }
    }
    updateCardToShow()
    window.addEventListener('resize',updateCardToShow )
    return () =>{
        window.removeEventListener('resize',updateCardToShow )
    }
    },[])

    const prevProject = ()=>{
        setCurrentCard((prevIndex)=> (prevIndex +1) % projectsData.length)
    }
    const nextProject = ()=>{
        setCurrentCard((prevIndex)=> prevIndex=== 0 ? projectsData.length -1 : prevIndex -1 )
    }
  return (
    <motion.div 
    initial={{opacity:0 ,x:-200}} 
      transition={{duration:1}}
      whileInView={{opacity:1 ,x:0}}
      viewport={{once:true}}
     className='flex flex-col items-center pt-10 px-6 md:px-20 lg:px-32 my-20 container mx-auto overflow-hidden' id='Project'>
      <h2 className='text-2xl sm:text-4xl text-gray-800 font-bold mb-4'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h2>
      <p className='text-gray-500 text-center max-w-80 mb-6 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, hic.</p>
      {/* next img */}
      <div className='flex justify-end  mb-5 '>
        <button onClick={prevProject}
        className='p-3 bg-gray-300 rounded mr-2' aria-label='Previous Projects'>
            <img src={assets.left_arrow} alt="previous" />
        </button>
        <button onClick={nextProject}
        className='p-3 bg-gray-300 rounded mr-2' aria-label='Next Projects'>
            <img src={assets.right_arrow} alt="Next Projects" />
        </button>
        </div>
        {/* project slider */}
        <div className='overflow-hidden'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform:`translateX(-${(currentCard *100)/cardToShow}%)`}}
            >
                {projectsData.map((project, index)=>(
                    <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                        <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                        <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                            <div className='inline-block bg-white w-3/4 px-4 shadow-md'>
                                 <h2 className='text-2xl text-gray-800 font-semibold'>
                                    {project.title}
                                 </h2>
                                 <p className='text-gray-600 text-sm'>{project.price} <span className='px-1'>|</span> {project.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       
      </div>
    </motion.div>
  )
}

export default Projects
