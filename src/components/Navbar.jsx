import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
const Navbar = () =>  {
  return (
    <>
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src= / */}

        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaGithub href='https://github.com/rshukla2711' />
            <FaLinkedin />
            <FaTwitter />
            <FaInstagram />
        </div>
    </nav>
    </>
  )
}

export default Navbar;