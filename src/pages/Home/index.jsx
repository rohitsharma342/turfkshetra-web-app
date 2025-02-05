import React from 'react'
import { Navbar } from '../../layouts/Navbar/navbar'
import { Overview } from '../../components/Overview/overView'
import { BookingRecent } from '../../components/Bookings/booking'
import Slider from '../../components/Slider/slider'
import { Institute } from '../../components/Institute/institute'
import Query from '../../components/Query/query'
import Testimonials from '../../components/Review/review'
import Services from '../../components/Service/service'
import FAQ from '../../components/Faq/faq'
import { Footer } from '../../components/Footer/footer'

export const Home = () => {
  return (
    <div className=' w-[100%]'>
      <Navbar/>
      <Overview/>
      <Slider/>
      <Institute/>
      <Query/>
      <Testimonials/>
      <Services/>
      <FAQ/>
      <Footer/>
      {/* <BookingRecent/> */}
    </div>
  )
}
