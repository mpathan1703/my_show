import React from 'react'
import { Link } from 'react-router-dom'

export const BannerCard = () => {
  return (
    <div className='p-3 mx-2 mt-2 text-white 'style={{width:"50%",background:"#385434"}}>
    <div className=' row align-items-cetnter'>
        <div className='col-12 col-md-7 '>
             <h2 className='mb-2'>Empower the artist within you</h2>
             <p className='m_h20'>
             List your own performances, gigs and more with BookMyShow
             </p>
              <Link to={"*"} className='text-white m_h20 text-decoration-none'>
              Know More
              </Link>
              <button className='bg-white rounded-1 border-0 d-block m_text_pinkish mt-2 px-4'>Contact us Today!</button>
        </div>
        <div className='col-12 col-md-5 '>
            <div className='m_bannercard_img_box'>
                <img src="ListYourShows/sli-o.jpeg" alt="" />
            </div>
        </div>
    </div>
  </div>
          
  )
}
