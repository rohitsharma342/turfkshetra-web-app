import React, { useEffect, useState } from 'react';
import GradeIcon from '@mui/icons-material/Grade';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    let start = 0;
    const end = 360;
    const duration = 2000; // Animation duration in milliseconds
    const incrementTime = 10; // Update interval
    const step = (end - start) / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    setTimeout(() => setFadeIn(true), 500); // Delay text fade-in animation

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='justify-center items-center flex flex-col mb-5 px-5'>
      <div><GradeIcon sx={{ fontSize: "50px", borderRadius: "10%", fontWeight: "bold" }} /></div>
      <div className='text-[50px]'>{count}</div>
      <div>Complete Solution</div>
      <div 
        className={`text-center opacity-0 transform -translate-x-10 transition-all duration-500 ${fadeIn ? 'opacity-100 translate-x-0' : ''}`}
      >
        Our consultancy specializes in AERB registration and AERB licensing, providing tailored solutions backed by a team of experts with extensive regulatory knowledge. With a proven track record of successfully guiding hospitals and diagnostic centers through the licensing process, we ensure a seamless experience from documentation to quality assurance. Our commitment to excellence, transparent communication, and personalized support make us your trusted partner in achieving compliance and enhancing operational safety. Choose us for peace of mind and a successful journey in radiation safety.
      </div>
    </div>
  );
}
