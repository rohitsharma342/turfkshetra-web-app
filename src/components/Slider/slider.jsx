import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosCheckmarkCircle } from "react-icons/io";

// import { Button } from "@/components/ui/button";

export default function Slider() {
  return (
    <>
     <div className="w-full flex justify-center items-center py-10 rounded-lg shadow-lg mb-2 mt-10 hover:shadow-none shadow-purple-100">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full "
      >
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest AERB Updates
            </h2>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg mb-2">
              Read More
            </button>
            {/* <Button className="mt-4 bg-blue-600 text-white">Read More</Button> */}
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest AERB Updates
            </h2>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg mb-2">
              Read More
            </button>
            {/* <Button className="mt-4 bg-blue-600 text-white">Read More</Button> */}
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center text-center p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Latest AERB Updates
            </h2>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg mb-2">
              Read More
            </button>
          </div>
          
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
    <div className="justify-center items-center flex flex-col mb-5 px-5">
         <div>
            <IoIosCheckmarkCircle className="text-4xl"/>
         </div>
         <div className="text-center">
         AERB has provided all possible information, processes, and guidelines related to every practice. You can explore the website to understand the processes, but if you have time constraints or find the process difficult, we would be happy to help you with minimum support price.
         </div>
    </div>
    </>
   
  );
}
