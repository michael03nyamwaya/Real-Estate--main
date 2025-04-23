import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cd83c1fc-1e1f-459e-bc10-804b787fd045");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error((data.message))
      setResult("");
    }
  };
  return (
    <motion.div
     initial={{opacity:0 ,x:-200}} 
      transition={{duration:1}}
      whileInView={{opacity:1 ,x:0}}
      viewport={{once:true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
     <h1 className='text-2xl sm:text-4xl font-semibold text-gray-800 text-center mb-5'>Contact <span className='underline underline-offset-4 decoration under font-light'>With us</span></h1>
      <p className='text-gray-500 text-lg max-w-80 mx-auto'>Ready to make a move? Let's build your future together</p>
      
      <form onSubmit={onSubmit} >
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-400 py-3 px-4 rounded mt-2' type="text" name='Name' 
                placeholder='Your Name' required />
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-6'>
                Your Email
                <input className='w-full border border-gray-400 py-3 px-4 rounded mt-2' type="email" name='Email' 
                placeholder='Your Email' required />
            </div>
        </div>
        <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-500 mt-3 px-4 py-3 rounded h-48 resize-none'
             name="Message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 text-white py-3 px-8 rounded mt-6 mb-8'>
            {result ? result : "Sending"}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact
