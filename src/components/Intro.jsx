import React from 'react'
import {motion } from 'framer-motion'
import profile from '../assets/profile.jpg'
const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{
            delay:delay,
            duration:0.5
        }
    }
})
const Intro=()=> {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='width-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-3xl font-thin tracking-light lg:mt-16 lg:text-5xl'>Roshan Kumar Shukla
                    </motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                    I am a 4th-year student pursuing a B.Tech in Information Technology from BIT Mesra. 
                    My interests lie in MERN stack development, 
                    and I have built several web applications utilizing this technology. 
                    Additionally, I am proficient in solving data structures and algorithms (DSA), 
                    which enhances my problem-solving abilities and efficiency in development.
                    </motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1, delay:1.2}} src={profile} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro