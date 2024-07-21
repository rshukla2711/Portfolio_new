import React from 'react'
import { motion } from 'framer-motion'
import about from '../assets/about.jpg'
const About=()=> {
  return (
    <div className='border-b border-neutral-900 pb-4 '>
        <h1 className='my-20 text-center text-4xl'>About 
        <span className='text-neutral-500'> Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='h-auto max-w-xs rounded-2xl' src={about}/>
                </div>
                
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1.5}}
            className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>I am a dedicated MERN stack developer with experience in building and deploying dynamic web applications. 
                        My skills include working with MongoDB, Express.js, React, and Node.js, 
                        allowing me to create efficient and scalable solutions. 
                        In addition to my knowledge of full-stack development, 
                        I am also proficient in data structures and algorithms (DSA), 
                        enabling me to optimize performance and solve complex problems effectively. 
                        I have completed various projects, showcasing my ability to deliver practical and secure web development solutions.
                        </p>
                        
                    </div>
                    <a href='https://drive.google.com/file/d/1wDL67sitW34zY8mhjyHHIiOTEGl3IyMm/view'><button  type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Download Resume</button></a>
            </motion.div>
            

            
        </div>
    </div>
  )
}

export default About