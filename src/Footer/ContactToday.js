import React from 'react'
import { GiHut } from "react-icons/gi";

export const ContactToday = () => {
 
  return (
<section className='m-mg_dark'>
  <div className='container text-white py-4'>
    <div className='row align-items-center justify-content-between'>
      <div className='col-12 col-md-8 align-items-center'>
        <div className='d-flex align-items-center gap-2'>
          <GiHut size={25}  />
          <h4 className='m_h15'>List Your Show</h4>
          <h6 className='m_h13'>Got a show, event, activity or a great experience? Partner with us &amp; get listed on BookMyShow</h6>
        </div>
      </div>
      <div className='col-12 col-md-2'>
        <button className='m_btn_pink  text-white py-2 px-4 border-0 rounded m_h17'>Contact Today!</button>
      </div>
    </div>
  </div>
</section>
  )
}
