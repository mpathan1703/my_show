import React from 'react'
import "./Plays.css"

export const Plays = () => {
  return (
    <section className='container'>
      <div className='w-50  m-auto  my-5'>
        <h4 className='m_h1'>Plays in Bhokardan</h4>
<div className='d-flex align-items-center justify-content-end flex-column text-center m_plays_content'>
  <div className='m_plays_img_box'>
    <img src="plays.avif" alt="" />
  </div>
  <small className='m_h16 mt-4'>Nope! Nothing! Nada!</small>
  <span className='m_h10 text-muted'>Sorry! There was nothing to load on this page. Kindly <br/> visit the homepage for more entertainment.</span>
  <button className='btn btn-sm m_bg_pinkish text-white m_sign_in px-3 border-0 mt-3 w-100'>Visit Home Page</button>
</div>

      </div>
    </section>
  )
}
