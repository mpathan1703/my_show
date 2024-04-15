import React from 'react'
import "./Corporates.css"
import { Banner } from './Banner'
import Parteners from './Parteners'
import Records from './Records'
import Promotions from './Promotions'
import Solutions from './Solutions'
// import Compaigns from './Compaigns'
import OurProducts from './OurProducts'
import BulkBooking from './BulkBooking'
import Testimonial2 from './Testimonial2'
import Questions from './Questions'



export const Corporates = () => {
  return (
    <div>
      <Banner />
      <Parteners />
      <Records />
      <Promotions/>
      <Solutions/>
     <div className='m-0 p-0'>
     <div className=' container my-2 p-4 d-flex align-items-center justify-content-between bg-white'>
        <p className='p-0 m-0'>Get priority support from the experts in the entertainment industry.</p>
        <button className='py-2 m_btn_pink border-0 text-white rounded-1'>Access the complete suite</button>
      </div>
     </div>
      {/* <Compaigns/> */}
      <OurProducts/>
      <BulkBooking/>
      <Testimonial2/>
      <div className='d-flex  my-5'>
        <button style={{margin:"auto",border :"1px solid #F84464"}} className=' m_text_pinkish bg-white  px-5 py-2 fw-bold rounded-1'>Partner With Us</button>
      </div>
      <Questions/>
    </div>
  )
}
