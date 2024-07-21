import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import {SiMongodb} from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa' 
import { FaJsSquare } from 'react-icons/fa'
import {DiMysql} from 'react-icons/di'
import {TbBrandCpp} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { FaPython } from 'react-icons/fa'
import { motion } from 'framer-motion'
const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition: {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
function Skills() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl '>Skills</motion.h1>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJsSquare className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3 className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
        </motion.div>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:2}} 
        className='flex flex-wrap items-center justify-center gap-4 my-3'>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-blue-800'/>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCpp className='text-7xl text-neutral-400'/>
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiBootstrap className='text-7xl text-violet-500'/>
            </motion.div>
            <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-7xl text-orange-600'/>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-yellow-500'/>
            </motion.div>
            
        </motion.div>

    </div>
  )
}

export default Skills