import React from 'react'

import waveImage from "../../assets/wave.png"
import { Counter } from './counter'
import ServiceList from './serviceList'
export const Overview = () => {
  const data =[1,2,3,4]
  return (
    <>
    <div
    className="relative w-full py-40 flex items-center justify-center bg-cover bg-center text-white mb-5"
    style={{
      backgroundImage: "url('https://source.unsplash.com/1600x900/?hospital,technology')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="text-center px-6 md:px-12 relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold">
        AERB+ <span className="text-yellow-400">E-Lora</span> Solution
        <span className="text-white"> “Expert Guidance for a Complex World”</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl ">
        Navigating the AERB licensing process and obtaining an AERB certificate can be 
        complex, but our consultancy is here to assist you every step of the way. We 
        specialize in guiding organizations through the regulatory landscape, ensuring 
        compliance with AERB standards while prioritizing safety in the use of X-ray 
        generation equipment. Let us help you achieve AERB certification efficiently 
        and effectively.
      </p>
      
      {/* Button */}
      <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-lg">
        Contact Us
      </button>
    </div>

 
  </div>
  <div>
    <Counter/>
  </div>
  <div>
    <ServiceList/>
  </div>
  {/* <div className="absolute top-[100px] w-full">
     <img src={waveImage} alt="wave" className="w-full" />
  </div> */}
  </>
  )
}
