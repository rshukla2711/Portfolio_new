import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import {FaInstagram} from 'react-icons/fa'
const Navbar = () =>  {
  return (
    <>
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src= / */}

        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://github.com/rshukla2711'><FaGithub  /></a>
            <a href='https://www.linkedin.com/in/rshukl800?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/'><FaLinkedin /></a>
            {/* <a href=''><BsTwitterX /></a> */}
            <a href='https://www.instagram.com/roshan__27.11__/'><FaInstagram /></a>
        </div>
    </nav>
    </>
  )
}

export default Navbar;