import React from 'react'
import { motion } from 'framer-motion'
function Contacts() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            className='my-4'>(+91)-9973749630</motion.p>
            <motion.a 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1.5}}
            href='mailto:rshukl800@gmail.com' className='border-b'>rshukl800@gmail.com</motion.a>
        </div>
    </div>
  )
}

export default Contacts