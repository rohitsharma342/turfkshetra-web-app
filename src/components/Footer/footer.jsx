import React from 'react'

export const Footer = () => {
  return (
    <div className='justify-center items-center flex flex-col mb-5 px-5 bg-black text-white py-10'>
        <div className='mb-10'>Pages</div>
        <div>About us</div>
        <div>Services</div>
        <div>Knowledge Center</div>
        <div>Contact us</div>
        <div>Privacy Policy</div>
        <div>
        <button className="mt-10 bg-blue-600 text-white px-4 py-2 rounded-full mb-2 ">
              Contact Us
            </button>
        </div>
    </div>
  )
}
