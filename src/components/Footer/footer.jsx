import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='justify-center items-center flex flex-col mb-5 px-5 space-y-1 bg-black text-white py-10'>
        <div className='mb-10'>Pages</div>
        <div><Link to="about-us" className=' underline'>About us</Link></div>
        <div><Link to="about-us" className=' underline'>Services</Link></div>
        <div><Link to="about-us" className=' underline'>Blogs</Link></div>
        <div><Link to="conatct-us" className=' underline'>Contact us</Link></div>
        <div><Link to="about-us" className=' underline'>Privacy Policy</Link></div>
        <div>
        <button className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-full mb-2 ">
              <Link to="conatct-us">Contact Us</Link>
            </button>
        </div>
    </div>
  )
}
