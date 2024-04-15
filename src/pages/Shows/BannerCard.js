import React from 'react'
import { Link } from 'react-router-dom'

export const BannerCard = ({title, desc,imgpath,background="#2B3148"}) => {
  return (
 
    <div className='p-3 mx-2 text-white ' style={{background,width:"50%"}}>
      <div className='row align-items-center'>
        <div className='col-12 col-md-7'>
          <h2 className='mb-2'>{title}</h2>
          <p className='m_h20'> {desc}</p>
           <Link to={"/"} className='text-decoration-none text-white m_h20'>Know More</Link>
            <button className='bg-white border-0 rounded-1 m_text_pinkish d-block mt-2 px-4'> Contact Today</button>
        </div>
        <div className='col-12 col-md-5'>
          <div className='m_bannercard_img_box'>
            <img src={`ListYourShows/${imgpath}`} alt="" />
          </div>
        </div>
      </div>
    </div>

   
 
  )
}
